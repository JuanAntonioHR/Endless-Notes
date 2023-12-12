const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electron', {
    notificationApi: {
        sendNotification(message) {
            ipcRenderer.send('notify', message);
        }
    },

    audioFileApi: {
        sendAudioFile(bufferAudios) {
            ipcRenderer.send('save-audio', bufferAudios);
        }
    }
});