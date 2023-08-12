const numbers = []

numbers.push (1,2,3)

console.log(numbers)



const fruits = ["apple" , "banana" ]
 const fruits2 = ["orange"]
 const fruits1 = fruits.concat(fruits2);
 console.log(fruits1);



 const name = ["Bataa" , "Boldoo" , "Nomin"]
const name1 = name.indexOf("Nomin")
console.log(name1)


const colors = ["red" , "green" , "blue"]
colors.pop();
console.log(colors)

const animals=["dog", "cat", "elephant" ].splice(2,3);
console.log(animals);


const number = [1,2,3,4].splice(0,0)
console.log(number)



const kvadrat = (x)=>{
    return x*x
}

 
console.log( kvadrat(8) );