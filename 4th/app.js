const board = document.querySelector('#board');
const colors = ['#ff0000', '#fbb034', '#ffdd00', '#c1d82f', '#00a4e4', '#8a7967']
const SQUARES_NUMBER = 700

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () => {
    setColor(square)
  })

  square.addEventListener('mouseleave', () => {
    removeColor(square)
  })

  board.append(square)
}

function setColor(element) {
  element.style.backgroundColor = getRandomColor();
  element.style.boxShadow = `0 0 2px ${getRandomColor()}, 0 0 10px ${getRandomColor()}`
}

function removeColor(element) {
  element.style.backgroundColor = '#505050'
  element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}