import React from "react";

export default function App() {
    const title = "Endless Notes";
    const enhancedTitle = title + ' - React App!';

    const sendNotification = () => {
        electron.notificationApi.sendNotification('My notification');
    }

    return (
        <>
            <h1>{enhancedTitle}</h1>
            <button onClick={sendNotification}>Send notification</button>
        </>
    );
}