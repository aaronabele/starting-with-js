function isPalindrome(word) {
  if (word && typeof word === "string") {
    word = word.toLocaleLowerCase();

    const wordToArray = word.split("");

    if (word === wordToArray.reverse().join("")) {
      return true;
    } else {
      return false;
    }
  }
}
