// Write a function called testNum that takes a number as an argument and returns a Promise. If the number is greater than 10, the promise resolves and returns a positive message, if the value is less than 10 the promise rejects and returns a negative message. Use this promise with a then and catch chain.

const testNum = (number) => {
  return new Promise((resolve, reject) => {
    if(number > 10) {
      resolve("Yay!")
    } else {
      reject("boo")
    }
  })
}

// success!
testNum(12).then((message) => console.log("Success " + message)).catch((message) => console.log("Fail " + message))


// fail
testNum(9).then((message) => console.log("Success " + message)).catch((message) => console.log("Fail " + message))

// Write two functions that use Promises that you can chain! The first function, makeAllCaps(), will take in an array of words and capitalize them, and then the second function, sortWords(), will sort the words in alphabetical order.Finally, print out the array.If the array contains anything but strings, it should reject with an error message.Use the array samples below as test data.

// const arrayOfWords = ['JavaScript', 'python', 'Ruby']
// const complicatedArray = ['tomato', 44, false]


const makeAllCaps = (arrayOfStrings) => {
  return new Promise((resolve, reject) => {
    // We check to make sure that everything in this array is a "String"
    const allStrings = arrayOfStrings.every((value) => typeof value == "string")
    if(allStrings) {
      // Since everything is a string, we can call map on the array which will apply
      // a function to each element in the array, and return a new array of
      // uppercased strings
      const uppercased = arrayOfStrings.map((value) => value.toUpperCase())
      resolve(uppercased)
    } else {
      reject("Array is not all strings!")
    }
  })
}

const sortWords = (arrayOfStrings) => {
  return new Promise((resolve, reject) => {
    // We check to make sure that everything in this array is a "String"
    const allStrings = arrayOfStrings.every((value) => typeof value == "string")
    if (allStrings) {
      resolve(arrayOfStrings.sort())
    } else {
      reject("Array is not all strings!")
    }
  })
}

const arrayOfWords = ['JavaScript', 'python', 'Ruby']
const complicatedArray = ['tomato', 44, false]

makeAllCaps(arrayOfWords).then(sortWords).then((arrayOfString) => console.log(arrayOfString)).catch( message => console.log(message))

makeAllCaps(complicatedArray).then(sortWords).then((arrayOfString) => console.log(arrayOfString)).catch(message => console.log(message))