console.log('connected.')

function changeText(element) {
  element.innerText = "MADE YOU CLICK"
}

function increaseCount(idName) {
  var section = document.getElementById(idName);
  // console.log(section)
  section.innerText++
}

var textInput = document.querySelector('#text-input')

function grabValueFromInput() {
  console.log(textInput.value);
  changeSectionColors(textInput.value);
}

function changeSectionColors(color) {
  var sections = document.getElementsByTagName('section');
  console.log(sections)
  for (var section of sections) {
    section.style.backgroundColor = color;
  }
}