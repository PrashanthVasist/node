function trial1 (abc) {
    for (a of abc) {
        console.log(`The evolution order of the pokemon is ${a}`);
    }
}

trial1([`Pichu`, "Pikachu", "Raichu"]);

console.log(`----------------------------------------------`)

function trial2 (abc) {
    for (let a in abc) {
        let b = parseInt(a) + 1;
        console.log(`The evolution ${b} evolution of the pokemon is ${abc[a]}.`);
    }
}

trial2([`Pichu`, "Pikachu", "Raichu"]);