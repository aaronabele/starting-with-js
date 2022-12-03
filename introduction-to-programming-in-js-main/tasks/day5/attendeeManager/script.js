const attendees = [];

function addAttendee(attendee) {
  //attendees.push(attendee);
  //console.log(attendees);

  if (attendee !== attendees.values()) {
    attendees.push(attendee);
  } else {
    console.log("Fehler");
  }
}

function removeAttendee(attendeeName) {
  attendees.pop(attendeeName);
  console.log(attendees);

  if (attendeeName !== attendees.values()) {
    console.log("Cant remove shit");
  } else {
    attendees.pop(attendeeName);
  }
}

function resetAttendeesArray() {
  attendees.length = 0;
}
