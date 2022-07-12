window.addEventListener('mousemove', (event) => {
  let dot = document.createElement('div')
  dot.className = 'trail'
  dot.style.left = (event.pageX - 3) + 'px'
  dot.style.top = (event.pageY - 3) + 'px'
  document.body.appendChild(dot)
  if (document.body.childNodes.length >= 20) {
    document.body.firstElementChild.remove()
  }
})
