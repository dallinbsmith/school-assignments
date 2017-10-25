npm init
npm install --save electron
open the package.json
find the "script"
"scripts":{
  "electron": "electron ."
}

npm run electron


const electron =require('electron');
const {app, BrowserWindow, Menu, ipcMain} = electron;
