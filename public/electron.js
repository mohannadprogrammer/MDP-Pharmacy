const {
  BrowserWindow,
  app,
  ipcMain,
} = require('electron');

const path = require('path');
const url = require('url');
const isDev = require('electron-is-dev');

const {OPEN_URL}=require('../utils/constants');
let mainWindow;


function createWindow() {
  mainWindow = new BrowserWindow({width: 900, height: 680});
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
  mainWindow.on('closed', () => mainWindow = null);

  ipcMain.on(OPEN_URL,(event , massage )=>{
    console.log('is work')
  })
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});