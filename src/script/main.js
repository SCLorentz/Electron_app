const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

app.on('ready', () => {
  const mainWindow = new BrowserWindow({
    icon: __dirname + '/finder.png', // Caminho para o ícone do aplicativo
    width: 800,
    minWidth:800,
    height: 600,
    minHeight:600,
    transparent: true,
    frame: false,
    titleBarStyle: 'hidden',
    alwaysOnTop:true,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });
  mainWindow.loadFile('index.html');
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
// Exemplo de função personalizada
function minimizeWindow() {
  const window = BrowserWindow.getFocusedWindow();
  if (window) {
    window.minimize();
  }
}
function maximizeWindow() {
  const window = BrowserWindow.getFocusedWindow();
  if (window) {
    window.maximize();
  }
}

// Escuta o evento "minimize-window" enviado do arquivo HTML
ipcMain.on('minimize-window', () => {
  minimizeWindow();
});
ipcMain.on('maximize-window', () => {
  maximizeWindow();
});



