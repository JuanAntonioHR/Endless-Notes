const { app, BrowserWindow, ipcMain, Notification } = require('electron')
const path = require('path')
const fs = require('fs')
const util = require('util')

const isDev = !app.isPackaged

function createWindow() {
    const win = new BrowserWindow({
        width: 1300,
        height: 760,
        backgroundColor: '#ffffff',
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js')
        }
    })

    win.loadFile('index.html')
    isDev && win.webContents.openDevTools()
}

if (isDev) {
    require('electron-reload')(__dirname, {
        electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
    })
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

ipcMain.on('save-audio', (_, bufferAudios) => {
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

ipcMain.on('app-quit', () => {
    app.quit();
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
