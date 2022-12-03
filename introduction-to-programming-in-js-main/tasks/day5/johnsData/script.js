const johnsData = {
  firstName: "John",
  getFirstName: function () {
    return johnsData.firstName;
  },
  surName: "Doe",
  getSurName: function () {
    return johnsData.surName;
  },
  age: 28,
  city: "Hamburg",
  children: ["Mia", "Fynn"],
  hobbies: ["Football", "Playing Guitar"],
};

function fullName() {
  console.log(johnsData["firstName"] + " " + johnsData["surName"]);
  return johnsData["firstName"] + " " + johnsData["surName"];
}

function changeJohnsData(propName, propValue) {
  console.log(propName, propValue);

  const johnsDataToArray = johnsData.split("");

  console.log(johnsDataToArray);
}
