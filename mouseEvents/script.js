var box = document.querySelector('#box')
console.log(box);

function getCoords(event) {
  console.log(event.clientX)
  console.log(event.clientY)
  var x = event.clientX
  var y = event.clientY
  changeColor(x, y)
}

function changeColor(x, y) {
  box.style.backgroundColor = `rgb(${x}, ${y}, ${(x + y) / 2})`
}