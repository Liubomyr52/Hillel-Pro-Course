// HOMEWORK: 12.2

const parent = document.querySelector('.parent')

parent.addEventListener(('click'), function(event) {
  if(event.target.tagName == 'BUTTON') {
    alert(event.target.textContent)
  }
})


// HOMEWORK: 12.1

const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')

let b = ''

btn1.addEventListener(('click'), function() {
  const a = prompt('Enter a location/URL')
  return b = a
})
btn2.addEventListener(('click'), function() {
  window.location.href = b
})



// HOMEWORK: 12.3      NEED TO WORK ON IT;


const parent1 = document.querySelector('.parent1')
const input = document.querySelector('input')
const btn = document.querySelector('.btn')
                                                                                                          

btn.addEventListener(('click'), function() {
  const inputValue = input.value
  const newLi = document.createElement('li')
  newLi.textContent = inputValue
  const newButton = document.createElement('button')
  newButton.textContent = 'Delete'
  newLi.append(newButton)
  parent1.append(newLi)
})

parent1.addEventListener(('click'), function(event) {
  if(event.target.tagName === 'BUTTON') {
    event.target.parentElement.remove()
  }
})