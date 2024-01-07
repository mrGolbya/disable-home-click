function disableHomeClick() {
  if (window.location.href === window.location.origin + '/') {
    this.style.cursor = 'default';
    this.style.opacity = '1';
    this.addEventListener('click', (e) => {
      e.preventDefault()
    })
  }
}

document.querySelectorAll('.logo').forEach((i) => {
  i.addEventListener('mouseover', disableHomeClick)
})