/*
1. push
2. pop
3. shift
4. unshift
5. splice
6. slice
7. concat
8. indexOf
9. includes
10. forEach
*/

const color = ['white', 'green', 'black','red','green','blue'];

function pushMethod(colorName) {
console.log("This is PUSH - Adds the new element at the end of the array");
console.log(color);
color.push(colorName);
console.log(color);
console.log("---------------------------------------------------");
}

pushMethod('pink');

function popMethod(colorName) {
    console.log("This is POP - Removes the last element from the array");
    console.log(color);
    color.pop(colorName);
    console.log(color);
    console.log("---------------------------------------------------");
}

popMethod('majenta');

function shiftMethod() {
    console.log("This is SHIFT - Removes the first element from the array");
    console.log(color);
    let shiftedColorName = color.shift();
    // let shiftedColorName = color.shift(color);
    console.log(color);
    console.log(`The shifted color name returned in the Method "${shiftedColorName}"`);
    console.log("---------------------------------------------------");
}

shiftMethod();

function unshiftMethod(colorName) {
    console.log("This is UNSHIFT - Adds the new element to the beginning of the array. Also it can be stored as a variable");
    console.log(color);
    color.unshift(colorName);
    console.log(color);
    console.log("---------------------------------------------------");
}

unshiftMethod('blonde');

function spliceMethod(index, count, colorName) {
    console.log("This is SPLICE - Removes the elements from the array AND adds new elements to the array ONLY IF specified");
    console.log(color);
    color.splice(index, count, colorName);
    console.log(color);
    console.log("---------------------------------------------------");
}

spliceMethod(2, 1, 'violet');

function sliceMethod(startIndex, endNumber) {
    console.log("This is SLICE - Returns a shallow copy of a portion of an array that is specified. It doesn't consider the ");
    console.log(color);
    let slicedColorName = color.slice(startIndex, endNumber);
    console.log(slicedColorName);
    console.log(color);
    console.log("---------------------------------------------------");
}

sliceMethod(1, 4);

function concatMethod(colorName) {
    console.log("This is CONCAT - Merges two or more arrays. This method does not change the existing arrays, but instead returns a new array.");
    console.log(color);
    let concatColorName = color.concat(colorName);
    console.log(concatColorName);
    console.log(color);
    console.log("---------------------------------------------------");
}

concatMethod(['yellow', 'orange']);

function indexOfMethod(colorName) {
    console.log("This is INDEXOF - Returns the first index at which a given element can be found in the array, or -1 if it is not present.");
    console.log(color);
    let indexOfColorName = color.indexOf(colorName);
    let indexOfColorName2 = color.indexOf(colorName, indexOfColorName + 1);
    console.log(`${colorName} is at the index "${indexOfColorName}" in the array and is at the position "${indexOfColorName + 1}"`);
    console.log(`${colorName} is also at the index "${indexOfColorName2}" in the array and is at the position "${indexOfColorName2 + 1}"`);
    console.log("---------------------------------------------------");
}

indexOfMethod('green');
indexOfMethod('banana');

function includesMethod(colorName) {
    console.log("This is INCLUDES - Checks for the given value in the array and returns true or false");
    console.log(color);
    let includesColorName = color.includes(colorName);
    console.log(`Is ${colorName} present in the array? - ${includesColorName}`);
    console.log("---------------------------------------------------");
}

includesMethod('blue');
includesMethod('banana');

function forEachMethod() {
    console.log("This is FOREACH - Executes a provided function once for each array element");
    console.log(color);
    color.forEach((e) => {
        console.log(`The color "${e}" is: ${color.indexOf(e)}`);
    })
    console.log("---------------------------------------------------");
}

forEachMethod();