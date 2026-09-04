function getBrowser(browsers) {
    for (let e of browsers) {
        console.log(`The browser now is ${e}`);
    }
}

getBrowser(["chrome", "firefox", "edge"]);

console.log("---------------------------------------------------");

// const getObject = (people) => {
//     for (let key in people) {
//         console.log(`The ${key} is ${people[key]}`)
//     }
// };

function getObject (people) {
    for (let key in people) {
        console.log(`The ${key} is ${people[key]}`);
    }
};

const people = {
    name: "Prashanth",
    gender: "male",
    family: `healthy and happy`
}

getObject(people);
