let arr = [55, 27, 97, 142, 5, 67, 19, 164, 77];

let evenNumber = arr.filter((e) => {
    if (e % 2 == 0) {
        return e;
    }
});

let oddNumber = arr.filter((e) => {
    if (e % 2 !=0)
        return e;
});

console.log(`The Even Numbers are: ${evenNumber}`);
console.log(`The Odd Numbers are: ${oddNumber}`);

let arrSortInc = arr.sort((a, b) => a - b);
console.log(arrSortInc);

let arrSortDec = arr.sort((a, b) => b - a);
console.log(arrSortDec);
