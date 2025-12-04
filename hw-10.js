
// HOMEWORK: 1

  let result = ''


  for(let i = 1; i <= 10; i++) {

  for(let j = 1; j <= 10; j++) {
    result += (i * j) + ' '
  }
  result += '\n'
}

document.querySelector('.pre').textContent = result




// HOMEWORK: 2

const text = document.querySelector('.li')
const btn1 = document.querySelector('.btn')

let counter = -1

btn1.addEventListener(('click'), function() {
  counter += 1

  const colors = ['red', ''] 

  text.style.color = colors[counter]
})




// HOMEWORK: 3


const btn = document.querySelector('.btn1')
const img = document.querySelectorAll('.img1')


btn.addEventListener(('click'), function() {

  img.forEach(i => i.style.display = 'none')

  const randomValue = Math.floor(Math.random() * img.length)

  img[randomValue].style.display = 'block'

})


















