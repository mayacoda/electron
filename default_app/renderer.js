const {remote, shell} = require('electron')
const {execPath} = remote.process

document.onclick = (e) => {
  e.preventDefault()
  if (e.target.tagName === 'A') {
    shell.openExternal(e.target.href)
  }
  return false
}

document.querySelector('.electron-version').innerText = `Electron v${process.versions.electron}`
document.querySelector('.chrome-version').innerText = `Chrome v${process.versions.chrome}`
document.querySelector('.node-version').innerText = `Node v${process.versions.node}`
document.querySelector('.v8-version').innerText = `v8 v${process.versions.v8}`

document.querySelector('.command-example').innerText = `${execPath} path-to-app`
