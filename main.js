const {app, BrowserWindow, ipcMain} = require('electron');
var sqlite3 = require('sqlite3').verbose();
const ipc = require('electron').ipcRenderer;
var db = new sqlite3.Database('data/DesnyDB.db');
let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
      height: 600,
      width: 800, 
      minHeight: 500,
      minWidth: 700,
      title: "Philink",
      webPreferences: {
      	nodeIntegration: true
      }
  });

  mainWindow.loadFile("view/login.html")
});

ipcMain.on('Login', _ => {
  mainWindow.loadFile("view/main.html")
})
