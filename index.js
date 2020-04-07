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
  const letters = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'DEL',
    'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'ENTER',
    'Shift', '\\', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '.', ',', '/', '▲', 'Shift',
    'Ctrl', 'Win', 'Alt', '', 'Alt', 'Ctrl', '◄', '▼', '►'
  ]

  const rus_letters = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'DEL',
    'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'ENTER',
    'Shift', '\\', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/', '▲', 'Shift',
    'Ctrl', 'Win', 'Alt', '', 'Alt', 'Ctrl', '◄', '▼', '►'
  ]

  const caps_eng_letters = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'DEL',
    'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'ENTER',
    'Shift', '\\', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '.', ',', '/', '▲', 'Shift',
    'Ctrl', 'Win', 'Alt', '', 'Alt', 'Ctrl', '◄', '▼', '►'
  ]

  const caps_rus_letters = ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'DEL',
    'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'ENTER',
    'Shift', '\\', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '/', '▲', 'Shift',
    'Ctrl', 'Win', 'Alt', '', 'Alt', 'Ctrl', '◄', '▼', '►'
  ]

  const shift_eng_letters = ['~', '!', '@', '$', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
    'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'DEL',
    'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'ENTER',
    'Shift', '\\', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '.', ',', '/', '▲', 'Shift',
    'Ctrl', 'Win', 'Alt', '', 'Alt', 'Ctrl', '◄', '▼', '►'
  ]
  const shift_rus_letters = ['Ё', '!', '"', '№', '%', ':', ',', '.', ';', '(', ')', '_', '+', 'Backspace',
    'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'DEL',
    'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'ENTER',
    'Shift', '\\', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '▲', 'Shift',
    'Ctrl', 'Win', 'Alt', '', 'Alt', 'Ctrl', '◄', '▼', '►'
  ]
  body.appendChild(keypads)

  for (let index = 0; index < letters.length; index++) {
    const inputElement = document.createElement('button')
    inputElement.innerHTML = letters[index]
    inputElement.id = 'key'
    inputElement.data = letters[index]
    keypads.appendChild(inputElement)

    

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
      if (flag == 'eng') {
        flag = 'rus'
        lang.forEach(function (element, index) {
          return element.innerHTML = rus_letters[index]
        })
      } else {
        flag = 'eng'
        lang.forEach(function (element, index) {
          return element.innerHTML = letters[index]
        })
      }
    }
    if (event.shiftKey && event.altKey == false) {
      if (flag == 'eng') {
        flag = 'rus'
        lang.forEach(function (element, index) {
          return element.innerHTML = shift_rus_letters[index]
        })
      } else {
        flag = 'eng'
        lang.forEach(function (element, index) {
          return element.innerHTML = shift_eng_letters[index]
        })
      }
    }

    if (event.code == 'CapsLock') {
      if (lang[15].innerHTML == 'q') {
        // flag = 'rus';
        // shift = 'big';
        lang.forEach(function (element, index) {
          return element.innerHTML = caps_eng_letters[index]
        })
      } else if (lang[15].innerHTML == 'й') {
        // flag = 'eng';
        // shift = 'big';
        lang.forEach(function (element, index) {
          return element.innerHTML = caps_rus_letters[index]
        })
      } else if (lang[15].innerHTML == 'Q') {
        // flag = 'rus';
        // shift = 'small';
        lang.forEach(function (element, index) {
          return element.innerHTML = letters[index]
        })
      } else {
        // flag = 'rus';
        // shift = 'small';
        lang.forEach(function (element, index) {
          return element.innerHTML = rus_letters[index]
        })
      }
    };
    if (event.code == 'ShiftLeft' || event.code == 'ShiftRight') {
      if (lang[15].innerHTML == 'q') {
        // flag = 'rus';
        // shift = 'big';
        lang.forEach(function (element, index) {
          return element.innerHTML = shift_eng_letters[index]
        })
      } else if (lang[15].innerHTML == 'й') {
        // flag = 'eng';
        // shift = 'big';
        lang.forEach(function (element, index) {
          return element.innerHTML = shift_rus_letters[index]
        })
      } else if (lang[15].innerHTML == 'Q') {
        // flag = 'rus';
        // shift = 'small';
        lang.forEach(function (element, index) {
          return element.innerHTML = letters[index]
        })
      } else {
        // flag = 'rus';
        // shift = 'small';
        lang.forEach(function (element, index) {
          return element.innerHTML = rus_letters[index]
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

  // document.onkeypress = function (event) {
  //     codes.push(event.code);
  //     console.log(codes);
  // }

  const codes = ['IntlBackslash', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'BackSpace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'Backslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Period', 'Comma', 'Slash', 'ArrowUp', 'ShiftRight', 'CtrlLeft', 'Win', 'AltLeft', 'Space', 'AltRight', 'CtrlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight']

  document.onkeypress = function (event) {
    document.querySelectorAll('#key').forEach(function (element) {
      element.classList.remove('active')
    })
    document.querySelectorAll('#key').forEach(function () {
      for (let i = 0; i < codes.length; i++) {
        const p = codes.indexOf(event.code)
        lang[p].classList.add('active')
      }
    })
  }
};

createKeypad()
