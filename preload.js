const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electron', {
    notificationApi: {
        sendNotification(message) {
            ipcRenderer.send('notify', message);
        },
        sendNotificationWithAudio(notificationsData) {
            ipcRenderer.send('schedule-notifications', notificationsData);
        }
    },

    audioFileApi: {
        sendAudioFile(bufferAudios) {
            ipcRenderer.send('save-audio', bufferAudios);
        }
    }
});