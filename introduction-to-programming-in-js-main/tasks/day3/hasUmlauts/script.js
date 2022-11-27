function hasUmlauts(word) {
  if (word === undefined && typeof word !== "string") {
    return undefined;
  } else {
    if (word.toLowerCase().includes("ä")) {
      return true;
    } else if (word.toLowerCase().includes("ö")) {
      return true;
    } else if (word.toLowerCase().includes("ü")) {
      return true;
    } else if (word.toLowerCase().includes("ß")) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(hasUmlauts());
