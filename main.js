// main.js
const { app, BrowserWindow } = require('electron');
const path = require('path');

// Error Handling
process.on('uncaughtException', (error) => {
    console.error("Unexpected error: ", error);
});

function createWindow() {
    const win = new BrowserWindow({
        width: 1600,
        height: 800,
        minWidth: 1600, // Establece el ancho mínimo
        minHeight: 800, // Establece la altura mínima
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
            enableRemoteModule: false,
        }
    });

    // Ocultar el menú de Electron
    win.setMenu(null);

    win.loadURL('http://localhost:4200');
}

// App Lifecycle
app.whenReady().then(createWindow);
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
});