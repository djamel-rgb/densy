const {app, BrowserWindow} = require('electron');

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
      height: 600,
      width: 800, 
      title: "Pharmalink",
      webPreferences: {
      	nodeIntegration: true
      }
  });

  mainWindow.loadFile("view/login.html")
});
