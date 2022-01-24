/*
LOOPS:
-FOR
-FOReACH
-MAP
-FILTER
-WHILE
*/

const myList = [1,2,3]

// for

for (let index = 0; index < myList.length; index++) {
  console.log(myList[index])
}

// forEach

myList.forEach(item => {
  console.log(item);
})

// map

const myNewList = myList.map(item => {
  return item + 1;
})

// filter

const myNewList2 = myList.filter(item => {
  return item === 1
})

// while

let value = 5;

while (value > 0) {
  console.log(value);
  value--
}