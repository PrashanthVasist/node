let names = [`Raghunath`, `Sandhya`, `Prashanth`, `Mythri`];
let familyNames = names.map((e) => `${e} is a family member`);
console.log(familyNames);

console.log("-----------------------------------------------");

let rupees = [200, 100, 50, 80, 91];
let rupToUsd = rupees.map((e) => (e * 0.011).toFixed(2));
console.log(rupToUsd);
// console.log(`${rupees} price in USD is ${rupToUsd}`);

for (let i = 0; i < rupees.length; i++) {
    console.log(`${rupees[i]} INR = ${rupToUsd[i]} USD`);
}

console.log("-----------------------------------------------");

let shopAmt = [100, 148, 350, 789, 154, 617, 225, 399];

function chkOutAmtCal(shopAmtVal) {
    if (shopAmtVal < 399) {
        return shopAmtVal + 30;
    }
    else {
        return shopAmtVal
    }
}

let chkAmt = shopAmt.map(chkOutAmtCal);
console.log(chkAmt);

console.log("-----------------------------------------------");

function hmsStringToSeconds(timeStr) {
    // Splits the string by ":" and converts each piece into a number
    const [hours, minutes, seconds] = timeStr.split(':').map(Number);

    // Multiply and sum the components together
    let timeInSec = (hours * 3600) + (minutes * 60) + (seconds);
    return timeInSec;
}

function speedWatching(timeStr, speed) {
    const totalTime = hmsStringToSeconds(timeStr, speed);

    let newTime = (totalTime / speed);
    let timeSaved = totalTime - newTime;

    const hours = Math.floor(newTime / 3600);
    const mins = Math.floor((newTime % 3600) / 60);
    const sec = Math.floor(newTime % 60);

    const newHours = Math.floor(timeSaved / 3600);
    const newMins = Math.floor((timeSaved % 3600) / 60);
    const newSec = Math.floor(timeSaved % 60);


    let pad = (num) => String(num).padStart(2, "0");

    console.log(`Logging Hours: ${pad(hours)}`);
    console.log(`Logging mins: ${pad(mins)}`);
    console.log(`Logging secs: ${pad(sec)}`);


    const time = `${pad(hours)}:${pad(mins)}:${pad(sec)}`
    const timeDifference = `${pad(newHours)}:${pad(newMins)}:${pad(newSec)}`;
    return [time, timeDifference];
    console.log(`For a video of length ${timeStr}, it only takes ${time} in ${speed}x speed `)

}

// Example usage:
let givenTime = "1:42:46";
let speed = 1.5;
const [time, timeDifference] = speedWatching(givenTime, speed);
console.log(`Time in Seconds: ${hmsStringToSeconds(givenTime, speed).toFixed(2)}`)
// console.log(`The final time it takes is ${time}}`);

console.log(`The final time it takes is ${time} to watch ${givenTime} video in ${speed}x speed. So the time saved is ${timeDifference}`);