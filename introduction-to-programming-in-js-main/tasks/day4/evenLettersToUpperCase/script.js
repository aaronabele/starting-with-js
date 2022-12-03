/*
function evenLettersToUpperCase(str) {
  if (str && typeof str === "string") {
    str = str.toLocaleLowerCase();

    const strToArray = str.split("");

    for (i = 0; i < strToArray.length; i++) {
      if (i % 2 === 1) {
        strToArray[i] = strToArray[i].toLocaleUpperCase();
      }
    }
    console.log(strToArray.join(""));
    return strToArray.join("");
  }
}*/

/*
function evenLettersToUpperCase(str) {
  if (str && typeof str === "string") {
    str = str.toLocaleLowerCase();

    const strToArray = str.split("");

    for (i = 0; i < strToArray.length; i++) {
      if (i % 2 === 1) {
        strToArray[i] = strToArray[i].toLocaleUpperCase();
      }
    }
    console.log(strToArray.join(""));
    return strToArray.join("");
  }
}*/

function evenLettersToUpperCase(str) {
  if (str && typeof str === "string") {
    str = str.toLocaleLowerCase();

    const strToArray = str.split("");

    for (i = 0; i < strToArray.length; i++) {
      if (i % 2 === 1) {
        strToArray[i] = strToArray[i].toLocaleUpperCase();
      }
    }
    console.log(strToArray.join(""));
    return strToArray.join("");
  }
}
