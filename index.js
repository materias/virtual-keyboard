const body = document.querySelector('body')
const text = document.createElement('textarea')
text.id = 'userinput'
body.appendChild(text)
const paragraph = document.createElement('p')
paragraph.innerText = 'layout switch: shift + alt'
paragraph.id = 'par'
const os = document.createElement('p')
os.innerText = 'created in Mac OS'
os.id = 'mac'
body.appendChild(paragraph)
body.appendChild(os)

const keypads = document.createElement('div')
keypads.className = 'keypad'

function createKeypad () {
  
  body.appendChild(keypads)

  for (let index = 0; index < letters.length; index++) {
    const inputElement = document.createElement('button')
    inputElement.innerHTML = letters[index]
    inputElement.id = 'key'
    inputElement.data = letters[index]
    keypads.appendChild(inputElement)

    switch (letters[index]) {
      case 'DEL':
        inputElement.addEventListener('click', function () {
          text.value = text.value.slice(1, text.value.length)
        }, false)
        break

      case 'Tab':
        inputElement.addEventListener('click', function () {
          text.value += '    '
        }, false)
        break

      case 'Backspace':
        inputElement.addEventListener('click', function () {
          text.value = text.value.slice(0, text.value.length - 1)
        }, false)
        break

      case 'ENTER':
        inputElement.addEventListener('click', function () {
          text.value = text.value + '\n'
        }, false)
        break

      case 'Win':
        inputElement.addEventListener('click', function () {
          text.value = text.value
        }, false)
        break

      case 'Ctrl':
        inputElement.addEventListener('click', function () {
          text.value = text.value
        }, false)
        break

      case 'Alt':
        inputElement.addEventListener('click', function () {
          text.value = text.value
        }, false)
        break

      case '':
        inputElement.addEventListener('click', function () {
          text.value = text.value += ' '
        }, false)
        break

      default:
        inputElement.addEventListener('click', function (e) {
          text.value += e.target.innerHTML
        }, false)
    };

    keypads.appendChild(inputElement)
  };
    
  let flag = 'eng'
  const lang = document.querySelectorAll('button')
  lang[0].className = 'symbol'
  lang[28].className = 'del'
  lang[13].className = 'backspace'
  lang[14].className = 'tab'
  lang[29].className = 'caps'
  lang[41].className = 'enter'
  lang[42].className = 'left-shift'
  lang[55].className = 'right-shift'
  lang[56].className = 'ctrl'
  lang[61].className = 'ctrl'
  lang[59].className = 'space'
  lang[57].className = 'win'
  lang[58].className = 'alt'
  lang[60].className = 'alt'
  lang[54].className = 'arrow'
  lang[62].className = 'arrow'
  lang[63].className = 'arrow'
  lang[64].className = 'arrow'

  document.addEventListener('keydown', (event) => {
    if (event.shiftKey && event.altKey) {
      if (flag === 'eng') {
        flag = 'rus'
        lang.forEach((element, index) => {
          return element.innerHTML = rusLetters[index]
        })
      } else {
        flag = 'eng'
        lang.forEach((element, index) => {
          return element.innerHTML = letters[index]
        })
      }
    }
    if (event.shiftKey && event.altKey == false) {
      if (flag === 'eng') {
        flag = 'rus'
        lang.forEach((element, index) => {
          return element.innerHTML = shiftRusLetters[index]
        })
      } else {
        flag = 'eng'
        lang.forEach((element, index) => {
          return element.innerHTML = shiftEngLetters[index]
        })
      }
    }

    if (event.code === 'CapsLock') {
      if (lang[15].innerHTML === 'q') {
        lang.forEach((element, index) => {
          return element.innerHTML = capsEngLetters[index]
        })
      } else if (lang[15].innerHTML === 'й') {
        lang.forEach((element, index) => {
          return element.innerHTML = capsRusLetters[index]
        })
      } else if (lang[15].innerHTML === 'Q') {
        lang.forEach((element, index) => {
          return element.innerHTML = letters[index]
        })
      } else {
        lang.forEach((element, index) => {
          return element.innerHTML = rusLetters[index]
        })
      }
    };
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
      if (lang[15].innerHTML === 'q') {
        lang.forEach((element, index) => {
          return element.innerHTML = shiftEngLetters[index]
        })
      } else if (lang[15].innerHTML === 'й') {
        lang.forEach((element, index) => {
          return element.innerHTML = shiftRusLetters[index]
        })
      } else if (lang[15].innerHTML === 'Q') {
        lang.forEach((element, index) => {
          return element.innerHTML = letters[index]
        })
      } else {
        lang.forEach((element, index) => {
          return element.innerHTML = rusLetters[index]
        })
      }
    };
  })

  document.querySelectorAll('button').forEach(function (element) {
    element.onclick = function () {
      document.querySelectorAll('button').forEach(function (element) {
        element.classList.remove('active')
      })
      this.classList.add('active')
    }
  })

  document.onkeypress = function (event) {
    document.querySelectorAll('#key').forEach(function (element) {
      element.classList.remove('active')
    })
    document.querySelectorAll('#key').forEach(function () {
      for (let i of codes) {
        const p = codes.indexOf(event.code)
        lang[p].classList.add('active')
      }
    })
  }
};

createKeypad()
