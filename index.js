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

    