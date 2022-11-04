// 1. write a program using array concat() method

let firstArray = [25,50,12,25,58];
let lastArray = [65,40,46,48,50,62];
console.log(firstArray , lastArray)
let arrayConcat = firstArray.concat(lastArray)
console.log(arrayConcat)

// 2.write a program using array every() method
let myArray =[5,8,9,12,15,17]
let arrayEvery = myArray.every(isPositive) ;
function isPositive(item){
return item>4
};
console.log(arrayEvery)

//3.  write a program using array fill() method

let friend = ['raju','rsbin','rahul','rahat'];
let fillMethod =friend.fill('ratan');
console.log(fillMethod)


// 4. write a program to using array filter method
let number= [20,40,30,50,21,23,60,90];
let newNumber = number.filter((num)=>{
    return num > 25
})
console.log(newNumber)


// 5. write a program to using array find method
let student = [
    {name:'rabin',mark:40, subject:'math'},
    {name:'ratul',mark:85, subject:'physics'},
    {name:'rahat', mark:65, subject:'bangla'},
    {name:'raju', mark:80, subject:'history'}
] ;
let result= student.find((exam)=>{
    return exam.mark > 50
});
console.log(result)

// 6. write a program using array findindex method 
let num = [1,2,3,4,5,6,7,8,9];
let findindexMethod =  num.findIndex((currentvalue)=>{
    return currentvalue>5
})
console.log(findindexMethod)


// 7. write a program to using array forEach method
let numbers = [42,45,86,90,90,12];
numbers.forEach((value)=>{
    console.log(value)
});


// 8.write a program to using array includes() method
let fruits = ['mango','apple','banana','orange'];
let includesMethod = fruits.includes('banana');
console.log(includesMethod)

// 9. write an program to using array isArray()method

let array = [1,2,3,4,5,6];
let isArrayMethod = Array.isArray(array);
console.log(isArrayMethod)

//10. write a program to using array join() method

let country = ['Bangladesh','india','Romania','japan'];
let joinMethod= country.join('-');
console.log(joinMethod)

//11. write a program to using array map method

let serial= [4,5,6,7,8,9];
let mapMethod = serial.map((value)=>{
    return value*2
})
console.log(mapMethod)

// 12. write a program to using pop method
let popMethod = ['ratul', 'rabin','rahat','raju'];
popMethod.pop()
console.log(popMethod)

// 13. write a program to using push method

let pushMethod = [25,30,24,26,28,35];
pushMethod.push(45);
console.log(pushMethod)

// 14. write a program to using array revers method
let reversMethod = [1,2,3,4,5,6,7,8,9]
reversMethod.reverse()
console.log(reversMethod)

// 15. write  program to using array shift method
let shiftMethod =  [1,2,3,4,5,6,7,8,9];
shiftMethod.shift()
console.log(shiftMethod)

// 16. write a program to using unshift() method
let unShiftMethod = ['ratul', 'rabin','rahat','raju']
unShiftMethod.unshift('rakib')
console.log(unShiftMethod)

// 17. write a program to using array slice() method

let sliceMethod = [11,12,13,14,15,16,17,18];
let res= sliceMethod.slice(1,4);
console.log(res)

// 18. write an program to using array some() method
let someMethod = [2,12,14,24,25,17,90,30,9];
let outPut = someMethod.some((value)=>{
    return value > 18
})
console.log( 'some over 18',outPut)

// 19. write a program to using array sort() method
let str = [22,21,10,25,40,7,6,105]
str.sort();
console.log(str) 

// 20. write a program to use array splice() method

let spliceMethot = [1,2,3,4,5,6];
let spliceResult = spliceMethot.splice(1,3);
console.log(spliceResult)


// Write a program for concatenation two array (using spread operator).
let firstNumber = [1,2,3,4,5];
let secondNumber = [6,7,8,9];
let totalNumber = [...firstNumber,...secondNumber]
console.log(totalNumber)
















