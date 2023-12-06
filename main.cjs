let app, BrowserWindow, ipcMain, Notification;

const isDev = !((typeof process !== 'undefined' && process.versions && process.versions.electron) || app?.isPackaged);

function createWindow() {
    import('electron').then((electron) => {
        const win = new electron.BrowserWindow({
            width: 1300,
            height: 750,
            backgroundColor: '#ffffff',
            webPreferences: {
                nodeIntegration: false,
                contextIsolation: true,
                preload: path.join(__dirname, 'preload.js')
            }
        });

        win.loadFile('index.html');
        isDev && win.webContents.openDevTools();
    });
}

if (isDev) {
    import('electron-reload').then((electronReload) => {
        electronReload(__dirname, {
            electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
        });
    });
}

import('electron').then((electron) => {
    app = electron.app;
    BrowserWindow = electron.BrowserWindow;
    ipcMain = electron.ipcMain;
    Notification = electron.Notification;

    app.whenReady().then(() => {
        createWindow();

        app.on('activate', () => {
            if (BrowserWindow.getAllWindows().length === 0) createWindow();
        });
    });

    ipcMain.on('notify', (_, message) => {
        new Notification({ title: 'Notification', body: message }).show();
    });

    ipcMain.on('app-quit', () => {
        app.quit();
    });

    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') app.quit();
    });
});
