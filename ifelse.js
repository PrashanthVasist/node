function checkAge (age) {
    if (age < 16) {
        console.log("You are a minor.");
    }
    else if (age >=60) {
        console.log("You are a senior citizen.");
    }
    else if (age >=16 && age <18) {
        console.log("You are a teenager.");
    }
    else if (age >=18 && age <60) {
        console.log("You are an adult");
    }
    else {
        console.log("Invalid age.");
    }
}

checkAge("Pikachu");



function checkBrowser (browser) {
    switch (browser) {
        case "chrome":
           console.log (`You are using ${browser}.`);
            // return browser;
            break;
        case "firefox":
            console.log (`You are using ${browser}.`);
            break;
        case "edge":
            console.log (`You are using ${browser}.`);
            break;
        default:
            console.log("Please assign a proper browser.");
            return null;
            
    }
    
    // return browser;
    // if (browser == "Chrome") {
    //     console.log("You are using Chrome.");
    // }
    // else if (browser == "Firefox") {
    //     console.log("You are using Firefox.");
    // }
    // else if (browser == "edge") {
    //     console.log("You are using Edge.");
    // }
    // else {
    //     console.log("Please assign a proper browser.");
    // }
}

checkBrowser("Chrome".toLocaleLowerCase());
checkBrowser("FIREFOX".toLowerCase());
checkBrowser("edge");
checkBrowser("fire");