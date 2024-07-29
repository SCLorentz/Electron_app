const { ipcRenderer } = require('electron');

window.addEventListener('DOMContentLoaded', () => {
  const minimizeButton = document.getElementById('minimize-button');
  const maximizeButton = document.getElementById('maximize-button');

  minimizeButton.addEventListener('click', () => {
    ipcRenderer.send('minimize-window');
  });

  maximizeButton.addEventListener('click', () => {
    ipcRenderer.send('maximize-window');
  });
});