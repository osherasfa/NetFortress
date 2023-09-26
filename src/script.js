const towerBtn = document.getElementById('tower')
const menu = document.getElementById('menu')

towerBtn.addEventListener('click', () => {
  menu.classList.contains('hidden') ? menu.classList.remove('hidden') : menu.classList.add('hidden')
})