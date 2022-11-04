// Write a program for merging two object (using spread operator).
let object1 ={
    name:'rabin',
    age:22,
    address:'dhaka city'
};
let object2 = {
    desiganaion :'web devloper',
    selary:50000,
    gender:'male'
};
let fullObj={...object1,...object2}
console.log(fullObj)



// Write programs for entries(), hasOwn(), keys(), values() methods.

let object ={
    name: 'water',
    barand:'rivera',
    capacity:2.25,
    price:25
};
let entries=Object.entries(object);
console.log(entries)
let hasOwn = object.hasOwnProperty('barand')
console.log(hasOwn);

let Keys = Object.keys(object)
console.log(Keys)
let value = Object.values(object)
console.log(value)

