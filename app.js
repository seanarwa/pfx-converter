const { app, BrowserWindow } = require('electron')

let win;

function createWindow () {
  win = new BrowserWindow({ 
	  width: 800, 
	  height: 600, 
	  'minWidth': 800, 
	  'minHeight': 600, 
	  icon: 'images/app.png' 
  });
  
  win.webContents.openDevTools()

  win.loadFile('app/index.html');

  win.on('closed', () => {
    win = null
  });
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
})