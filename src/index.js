const { app, BrowserWindow, dialog } = require('electron')
const path = require('path')
const { autoUpdater } = require('electron-updater') // Import autoUpdater from electron-updater

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit()
}

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  })

  mainWindow.loadFile(path.join(__dirname, '../front/index.html')) // Make sure this points to your app's HTML file
  mainWindow.webContents.openDevTools() // Enable DevTools (remove for production)
}

// Set up auto-updater for GitHub Releases
autoUpdater.setFeedURL({
  provider: 'github',
  owner: 'darshanversatile', // Your GitHub username
  repo: 'ele', // Your GitHub repository name
  private: false, // Set this to false for a public repo
})

// Check for updates when the app is ready
app.whenReady().then(() => {
  createWindow()

  // Check for updates and notify the user
  autoUpdater.checkForUpdatesAndNotify()

  // Event listener for when an update is available
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
          autoUpdater.downloadUpdate() // Start downloading the update
        }
      })
  })

  // Event listener for when an update is downloaded
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
          autoUpdater.quitAndInstall() // Install the update and quit the app
        }
      })
  })

  // Handle errors
  autoUpdater.on('error', (error) => {
    console.error('Error during auto-update:', error)
  })

  // Re-create window if it's closed (MacOS)
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

// Quit when all windows are closed
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
