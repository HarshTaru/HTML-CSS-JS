let heading = document.getElementById('heading')

let div = document.getElementById('div1')
// undefined
// div
// div1.innerHTML
// '\n        <p id="para">Hello i am a paragraph</p>\n    '
// div1.innerText
// 'Hello i am a paragraph'
let element1 = document.createElement('span')
element1.innerText = " hello i am a span";
// ' hello i am a span'
div.insertAdjacentElement('beforebegin',element1)
div.insertAdjacentElement('afterbegin',element1)
div.insertAdjacentElement('afterend',element1)
div.insertAdjacentElement('beforeend',element1)