
// Task 1

 const user = {
   name: 'Liubomyr',
   age: 13,
   city: 'New York',

   getInfo: function() {
     console.log(`Name: ${this.name}`)
     console.log(`Age: ${this.age}`)
     console.log(`City: ${this.city}`)
   }
 }
user.getInfo()






// Task 2

 const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 const newArray = originalArray

 const even = newArray.filter((num) => num % 2 === 0)

 console.log(even)




// Task 3


 const array = [
   {id: 1, name: 'Alex', phoneNumber: '676-767-6767', email: 'dawdaw@gmail.com'},
   {id: 2, name: 'John', phoneNumber: '525-252-5252', email: 'adsdwa@gmail.com'},
  {id: 3, name: 'Martin', phoneNumber: '414-141-4141', email: 'dawawdwad@gmail.com'}
 ]
 const search = array.filter((user) => user.name == 'Alex')

array.push({id: 4, name: 'Roman', phoneNumber: '123-456-7890', email: 'alfksas@gmail.com'})

console.log(array)
console.log(search)

