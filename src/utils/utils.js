import { ElLoading } from 'element-plus'

const required = () => { throw new Error('Missing parameter') }

// 全屏loading弹层
let loadingInstance = null
let loadCount = 0
function openLoading () {
  if (loadCount === 0) {
    loadingInstance = ElLoading.service({
      lock: true,
      background: 'rgba(255, 255, 255, 0.37)'
    })
  }
  loadCount++
}
function closeLoading () {
  loadCount--
  if (loadCount === 0) {
    loadCount = 0
    loadingInstance && loadingInstance.close()
  }
}

// 本地存储
function getLocalStorage (key) {
  return localStorage.getItem(key)
}
function setLocalStorage (key, data = required()) {
  localStorage.setItem(key, data)
}
function remLocalStorage (key) {
  localStorage.removeItem(key)
}




export {
  openLoading,
  closeLoading,
  getLocalStorage,
  setLocalStorage,
  remLocalStorage
}