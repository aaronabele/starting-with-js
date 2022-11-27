function isUpperCase(word) {
  if (!word) {
    return undefined;
  } else {
    if (word.toUpperCase() === word) {
      return true;
    } else {
      return false;
    }
  }
}
