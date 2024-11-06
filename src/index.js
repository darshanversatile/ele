const { app, BrowserWindow, dialog } = require('electron')
const path = require('node:path')
const { autoUpdater } = require('electron-updater')

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit()
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  })

  // Load the main app page
  mainWindow.loadFile(path.join(__dirname, '../front/index.html'))

  // Open the DevTools for debugging (remove in production)
  mainWindow.webContents.openDevTools()
}

// Set the update feed URL (GitHub, custom server, etc.)
autoUpdater.setFeedURL({
  provider: 'github',
  owner: 'darshanversatile',
  repo: 'your-repo-name',
  private: true, // Use only if repository is private
  token: 'your-github-personal-access-token', // Use a GitHub token if private
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.whenReady().then(() => {
  createWindow()

  // Check for updates when the app is ready
  autoUpdater.checkForUpdatesAndNotify()

  // Notify the user if an update is available
  autoUpdater.on('update-available', () => {
    dialog
      .showMessageBox({
        type: 'info',
        title: 'Update Available',
        message: 'A new version is available. Do you want to update now?',
        buttons: ['Yes', 'Later'],
      })
      .then((result) => {
        if (result.response === 0) {
          // User chose to update
          autoUpdater.downloadUpdate()
        }
      })
  })

  // Once the update is downloaded, prompt the user to install it
  autoUpdater.on('update-downloaded', () => {
    dialog
      .showMessageBox({
        type: 'info',
        title: 'Update Ready',
        message: 'The update has been downloaded. Would you like to install it now?',
        buttons: ['Yes', 'Later'],
      })
      .then((result) => {
        if (result.response === 0) {
          autoUpdater.quitAndInstall() // Restart the app to apply the update
        }
      })
  })

  // If there's an error during the update process
  autoUpdater.on('error', (error) => {
    console.error('Error during auto-update:', error)
  })

  // On macOS, recreate the window if there are no windows open
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

// Quit when all windows are closed (except macOS)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// Run Express server for serving static files
const express = require('express')
const server = express()

server.use(express.static(path.join(__dirname, 'front')))

server.listen(2000, () => {
  console.log('App is running on http://localhost:2000')
})
