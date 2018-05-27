## Advanced Promise Exercises

### 1

Write a function called `testNum` that takes a number as an argument and returns a Promise. If the number is greater than 10, the promise resolves and returns a positive message, if the value is less than 10 the promise rejects and returns a negative message. Use this promise with a `then` and `catch` chain.

### 2

Write two functions that use Promises that you can chain! The first function, makeAllCaps(), will take in an array of words and capitalize them, and then the second function, sortWords(), will sort the words in alphabetical order. Finally, print out the array. If the array contains anything but strings, it should reject with an error message. Use the array samples below as test data.

```javascript
const arrayOfWords = ['JavaScript', 'python', 'Ruby']
const complicatedArray = ['tomato', 44, false]
```
