const toggleButton = document.querySelector('.toggle-button')
const sidebar = document.getElementById('sidebar')
const carousel = document.getElementById('testimonialCarousel')
const items = document.querySelectorAll('.testimonial-item')
const dots = document.querySelectorAll('.dot')
let index = 0

toggleButton.addEventListener('click', () => {
  sidebar.classList.toggle('active')
})

document.querySelectorAll('.accordion-item').forEach((item) => {
  item
    .querySelector('.accordion-header')
    .addEventListener('click', () => toggleItem(item))
  if (item.classList.contains('open')) {
    const content = item.querySelector('.accordion-content')
    content.style.maxHeight = content.scrollHeight + 'px'
  }
})

function toggleItem(item) {
  const content = item.querySelector('.accordion-content')
  if (item.classList.contains('open')) {
    content.style.maxHeight = 0
    item.classList.remove('open')
  } else {
    item.classList.add('open')
    content.style.maxHeight = content.scrollHeight + 'px'
  }
}
const path = window.location.pathname
if (path === '/') {
  window.location.href = '/index.html'
} else if (path === '/layanan') {
  window.location.href = '/layanan/index.html'
} else if (path === '/klien-kami') {
  window.location.href = '/klien-kami/index.html'
}
AOS.init()
document.addEventListener('DOMContentLoaded', () => {
  new Typed('.dd-typing-text-1', {
    strings: ['Professional', 'Terpercaya', 'Dikenal', 'Berkembang'],
    typeSpeed: 100, // kecepatan mengetik
    backSpeed: 60, // kecepatan menghapus
    backDelay: 3000, // jeda sebelum menghapus (ms)
    loop: true, // berulang tanpa henti
  })
})
