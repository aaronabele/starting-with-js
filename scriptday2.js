/*function greet(welcomeWord, userName) {
  if (welcomeWord && userName) {
    if (welcomeWord) {
      return welcomeWord + " " + userName;
    } else {
      return "Hi" + userName;
    }
  } else {
    return "Hallo Gast";
  }
}

console.log(greet());
*/

/*function greet(welcomeWord, userName) {
  if (welcomeWord && userName) {
    if (welcomeWord) {
      return welcomeWord + " " + userName;
    } else {
      return "Hi" + userName;
    }
  } else {
    return "Hallo Gast";
  }
}

console.log(greet("Hallo", "Aaron"));
*/

/*
function greet(welcomeWord, userName) {
  if (welcomeWord && userName && typeof welcomeWord === "string") {
    if (welcomeWord) {
      return welcomeWord + " " + userName;
    } else {
      return "Hi " + userName;
    }
  } else {
    return "Hi Gast, nice to see you";
  }
}

console.log(greet("1", "Aaron"));
*/

/*
function greet(welcomeWord, userName) {
  if (welcomeWord && userName && typeof welcomeWord === "string") {
    if (welcomeWord) {
      return welcomeWord + " " + userName;
    } else {
      return "Hi " + userName;
    }
  } else {
    return "Hi Guest";
  }
}
console.log(greet(1, "Aaron"));*/

let fullName = "";
let isSetFirstNameExecuted = false;
let isSetLastNameExecuted = false;

function setFirstName(firstName) {
  if (firstName && typeof firstName === "string") {
    fullName += firstName;
    isSetFirstNameExecuted = true;
  }
}

function setLastName(lastName) {
  if (lastName && typeof lastName === "string") {
    fullName += lastName;
    isSetLastNameExecuted = true;
  }
}

function getFullname() {
  if (
    fullName != "" &&
    isSetFirstNameExecuted === true &&
    isSetLastNameExecuted === true
  ) {
    return fullName;
  } else {
    return "Achtung, falsch";
  }
}

setFirstName("Aaron ");
setLastName("Abele");
console.log(getFullname());
