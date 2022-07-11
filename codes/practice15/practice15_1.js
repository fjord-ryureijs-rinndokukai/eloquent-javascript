const p = document.querySelector('p');
  p.style.fontSize = '10px'
  const size = 10
  document.addEventListener('keydown', function changeSize(event) {
    event.preventDefault();
    if (event.key === 'ArrowUp') {
      size *= 1.1
    } else if (event.key === 'ArrowDown')  {
      size *= 0.9
    }
    p.style.fontSize = `${size}px`
    if (size >= 30) {
      p.innerHTML = '💥'
      document.removeEventListener('keydown', changeSize)
    }
  })
