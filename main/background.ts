import path from 'path';
import { app, ipcMain, BrowserWindow } from 'electron';
import serve from 'electron-serve';
import { createWindow } from './helpers';

const isProd = process.env.NODE_ENV === 'production';

if (isProd) {
  serve({ directory: 'app' });
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`);
}

let mainWindow: BrowserWindow | null = null;

(async () => {
  await app.whenReady();

  mainWindow = createWindow('main', {
    width: 800,
    height: 600,
    resizable: false,
    frame: false, // Remove a moldura para que o menu padrão não apareça
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  if (isProd) {
    await mainWindow.loadURL('app://./');
    mainWindow.setMenu(null);
  } else {
    const port = process.argv[2];
    mainWindow.removeMenu();
    await mainWindow.loadURL(`http://localhost:${port}/`);
  }

  // Listener para minimizar a janela
  ipcMain.on('window-minimize', () => {
    if (mainWindow) mainWindow.minimize();
  });

  // Listener para fechar a janela
  ipcMain.on('window-close', () => {
    if (mainWindow) mainWindow.close();
  });
  ipcMain.on('window-maximize', () => {
    if (mainWindow) {
      if (mainWindow.isMaximized()) {
        mainWindow.restore();
      } else {
        mainWindow.maximize();
      }
    }
  });
})();

app.on('window-all-closed', () => {
  app.quit();
});
