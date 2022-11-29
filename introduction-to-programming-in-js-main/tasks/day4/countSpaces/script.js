function countSpaces(str) {
  if (str && typeof str === "string") {
    let count = str.split(" ").length - 1;
    console.log(count);
    return count;
  } else {
    return undefined;
  }
}
