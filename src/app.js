import {app, BrowserWindow} from 'electron';

let mainWindow = null;

app.on('window-all-closed', () => {
  app.quit();
});

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 360,
    height: 500,
    minWidth: 360,
    minHeight: 500,
    titleBarStyle: 'hidden-inset'
  });

  mainWindow.loadURL(`file://${__dirname}/renderer/index.html`);
});
