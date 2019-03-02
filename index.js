// Write a function that takes 2 parameters - the first is an array, the second is an element that may or may not be in the array. 
// Without using any built in array methods, return true if the element is in the array or false otherwise. 
// . 

// Ex:
// Input: [1,2,3]  1
// Output: true

// Input: [1,2,3]  4
// Output: false

// Input: ['code', 'dev', 'nerd']  'nerd'
// Output: false

// Input: ['code', 'dev', 'nerd']  'genius'
// Output: false

const array = [1, 2, 3];
const element = 4;

function classDrill(array, element) {
    for (var i = 0; i < array.length; i++) {
        if (element === array[i]) {
            return console.log(true);
        }
    }
    return console.log(false);
}

classDrill(array, element);