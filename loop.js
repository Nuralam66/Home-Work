// write a program  using simple for loop

for(let i=1;i<=20;i+=2){
    console.log(i)
}


//  write an program to using for in loop
let watweBottle ={
    equepment : 'water',
    brand : 'rivera',
    capacity:2.25,
    color: 'white'
}

let text='';
for(let e in watweBottle){
    text = watweBottle[e]
    console.log(text)
}


// write an program using for of loop

let numbers =[70,80,75,78,82,79,83,72];
for( let number of numbers){
console.log(number)
}