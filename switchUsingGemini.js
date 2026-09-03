function checkBrowser(browser) {
  // 1. Log the message immediately
  console.log(`You are using ${browser}.`);

  // 2. Use switch to validate or handle specific cases
  switch (browser) {
    case "chrome":
    case "firefox":
    case "edge":
      // Valid browsers can just break out of the switch and return below
      break;
    default:
      console.log("Please assign a proper browser.");
      return null; // Return early if it is an invalid browser
  }

  // 3. Return the valid browser at the very end
  return browser;
}


checkBrowser("Chrome");
checkBrowser("fire")