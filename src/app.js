'use strict'
import {app, BrowserWindow} from 'electron'

import installExtension, {
  REACT_DEVELOPER_TOOLS,
  REDUX_DEVTOOLS, REACT_PERF
} from 'electron-devtools-installer'

installExtension('lmhkpmbekcpmknklioeibfkpmmfibljd')

const Hapi = require('hapi')
const server = new Hapi.Server()

server.connection({
  host: 'localhost',
  port: 8000
})

let mainWindow = null
app.on('window-all-closed', () => {
  app.quit()
})

app.on('ready', () => {
  server.register({
    register: require('hapi-routes'),
    options: {dir: 'src/routes'}
  }, function (err) {
    server.start((err) => {
      if (err) {
        throw err
      }
      console.log('Server running at:', server.info.uri)
    })
  })

  mainWindow = new BrowserWindow({
    width: 700,
    height: 500,
    minWidth: 360,
    minHeight: 500,
    titleBarStyle: 'hidden-inset'
  })

  mainWindow.loadURL(`file://${__dirname}/renderer/index.html`)
  mainWindow.webContents.openDevTools()
})
