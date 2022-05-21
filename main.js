/*jshint esversion: 8 */

const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

let mainWindow;

function createWindow () {
	mainWindow = new BrowserWindow({
		width: 800,
		height: 845,
		resizable: false,
		frame: false,
		webPreferences: {
		  nodeIntegration: true,
		  contextIsolation: false,
		  preload: path.join(__dirname, 'preload.js')
		}
	});
  
	mainWindow.loadFile('GPM/GPM.html');
}

app.whenReady().then(() => {
	createWindow();
  
	app.on('activate', function () {
	  if (BrowserWindow.getAllWindows().length === 0) createWindow();
	});
});

app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') app.quit();
});