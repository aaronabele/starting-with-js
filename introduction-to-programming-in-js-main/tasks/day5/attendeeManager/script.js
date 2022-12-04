const attendees = [];

function addAttendee(attendeeName) {
  if (!attendees.includes(attendeeName)) {
    attendees.push(attendeeName);
  } else {
    console.log("Attendee name already exists.");
  }
}

function removeAttendee(attendeeName) {
  if (attendees.includes(attendeeName)) {
    function findAttendeeByIndex(attendeeNameInArray) {
      return attendeeNameInArray === attendeeName;
    }
    const arrIndex = attendees.findIndex(findAttendeeByIndex);
    attendees.splice(arrIndex, 1);
  } else {
    console.log("The passed in Name doesn't exist in the attendees array");
  }
}

function resetAttendeesArray() {
  attendees.length = 0;
}
