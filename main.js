'use strict';
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const { Menu, dialog } = electron;

const path = require('path');
const url = require('url');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({ width: 800, height: 600 });
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'dist', 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
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

const template = [
  {
    label: 'ファイル',
    submenu: [
      { label: '終了', role: 'quit' },
    ]
  },
  {
    label: '編集',
    submenu: [
      { label: '元に戻す', role: 'undo' },
      { label: 'やり直し', role: 'redo' },
      { type: 'separator' },
      { label: '切り取り', role: 'cut' },
      { label: 'コピー', role: 'copy' },
      { label: '貼り付け', role: 'paste' },
      { label: '全て選択', role: 'selectall'}
    ]
  },
  {
    label: '表示',
    submenu: [
      { label: 'ズームのリセット', role: 'resetzoom' },
      { label: '拡大', role: 'zoomin' },
      { label: '縮小', role: 'zoomout' },
      { type: 'separator' },
      { label: '全画面表示の切り替え', role: 'togglefullscreen' }
    ]
  },
  {
    role: 'window',
    submenu: [
      {role: 'minimize'},
      {role: 'close'}
    ]
  },
  {
    role: 'ヘルプ',
    submenu: [
      {
        label: 'Learn More',
        click () { require('electron').shell.openExternal('https://electron.atom.io') }
      }
    ]
  }
];

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)