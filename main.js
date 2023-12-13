const { app, BrowserWindow, ipcMain, Notification } = require('electron')
const path = require('path')
const fs = require('fs')
const cron = require('node-cron');
const sound = require("sound-play");
const isDev = !app.isPackaged

// Array para almacenar las tareas cron programadas
const scheduledTasks = [];

// Iconos de la aplicación
const dockIcon = path.join(__dirname, 'assets', 'images', 'endless-notes-icon.png');

function createWindow() {
    const win = new BrowserWindow({
        width: 1300,
        height: 760,
        resizable: false,  // Esto desactiva la capacidad de redimensionar la ventana
        backgroundColor: '#ffffff',
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js')
        }
    })

    win.removeMenu();  // Esto oculta el menú de la aplicación

    win.loadFile('index.html')
    isDev && win.webContents.openDevTools()
}

if (isDev) {
    require('electron-reload')(__dirname, {
        electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
    })
}

if (process.platform === 'darwin') {
    app.dock.setIcon(dockIcon);
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

ipcMain.on('notify', (_, message) => {
    new Notification({ title: 'Notification', body: message }).show()
})

// Función para borrar todo el contenido de la carpeta "public"
function deletePublicFolderContent() {
    const publicFolderPath = path.join(__dirname, './public');

    // Lee el contenido de la carpeta
    fs.readdir(publicFolderPath, (err, files) => {
        if (err) {
            console.error('Error al leer el contenido de la carpeta:', err);
            return;
        }

        // Itera sobre los archivos y borra cada uno
        files.forEach((file) => {
            const filePath = path.join(publicFolderPath, file);

            // Borra el archivo
            fs.unlink(filePath, (unlinkErr) => {
                if (unlinkErr) {
                    console.error('Error al borrar el archivo:', unlinkErr);
                } else {
                    console.log('Archivo borrado correctamente:', filePath);
                }
            });
        });
    });
}

ipcMain.on('save-audio', (_, bufferAudios) => {
    // Borra el contenido de la carpeta "public"
    deletePublicFolderContent();

    // Recorre el array de audios en buffer
    bufferAudios.forEach((bufferAudio) => {
        // audioContent es un objeto con las propiedades data y type
        const { data, type } = bufferAudio.audioContent;

        // Especifica la ruta y el nombre del archivo de salida
        const fullFilePath = path.join(__dirname, `./public/${bufferAudio.id}.mp3`);

        // Convierte el Buffer de audio a un array de bytes
        const audioBuffer = Buffer.from(data, type);

        // Guarda el archivo en el sistema de archivos
        fs.writeFile(fullFilePath, audioBuffer, (err) => {
            if (err) {
                console.error('Error al guardar el archivo:', err);
            } else {
                console.log('Archivo guardado correctamente:', fullFilePath);
            }
        });
    });
})

function sendNotificationWithAudio(title, message, audioFileName) {
    // Especifica la ruta y el nombre del archivo de salida
    const fullFilePath = path.join(__dirname, `./public/${audioFileName}.mp3`);
    
    // Reproduce el archivo de audio
    sound.play(fullFilePath).catch((error) => {
        console.error('Error al reproducir el archivo de audio:', error);
    });
    
    // Muestra la notificación
    new Notification({ title, body: message }).show();
}

// Función para programar una tarea cron para una notificación específica
function scheduleNotificationCron(notificationData) {
    const { title, text, time, audioFileName } = notificationData;

    const task = cron.schedule(time, () => {
        sendNotificationWithAudio(title, text, audioFileName);
    });

    scheduledTasks.push(task);
}

ipcMain.on('schedule-notifications', (_, notificationsData) => {
    // Recibe la información de las notificaciones desde el frontend
    notificationsData.forEach((notificationData) => {
        // Programa las tareas cron para cada notificación
        scheduleNotificationCron(notificationData);
    });
});


ipcMain.on('app-quit', () => {
    app.quit();
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
