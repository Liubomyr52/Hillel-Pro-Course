
// HOMEWORK 1:

const input1 = prompt('Enter a phrase')
const input2 = prompt('Enter what letters you want to remove!')


const words = input1.split('')

const filteredArray = words.reduce((acc,el) => {
  if(!input2.includes(el)) {
    console.log(el)
    acc.push(el)
  }
  return acc
},[])

console.log(filteredArray)







// HOMEWORK: 2


const array = [1, 2, 3, 4, '5', 6, 7, '8', 9, 10, '11']

function task1() {
  let summ = 0
  let counter = 0

  for(let i of array) {
  if(typeof i == 'number') {
    summ += i
    counter += 1
  }
}
return  summ / counter
}
console.log(task1())






// HOMEWORK: 3


const array = [1, 3, 4, 6, 2, 5, 7]

function removeElement(array, item) {
  for(let i = 0; i < array.length; i++) {
    if(array[i] === item) {
      array.splice(i, 1)
    }
  }
  return array
}
console.log(removeElement(array, 4))
