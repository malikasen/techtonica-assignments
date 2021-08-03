// Create an event class
class Event {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.availableTickets = [];
  }
}

// The below statement creates an object.
const eventObj1 = new Event(
  'KLOS Golden Gala',
  'An evening with hollywood vampires'
);

// Create few more objects with different values
const eventObj2 = new Event('Skillet & Sevendust', 'Victorious war tour');
const eventObj3 = new Event('Jenny Lewis', 'On the line tour 2019');

// Create an empty Event array
const eventArray = new Array();

// Push the objects created into the array. 
// pushing single object to an array
// eventArray.push(eventObj1);
// pushing multiple objects to an array at once
eventArray.push(eventObj1, eventObj2, eventObj3);

// in order to check whether the elements are pushed, use console.log
console.log(eventArray);

// Iterate through the eventArray
$(document).ready(function () {
  let html = '';
  $.each(eventArray, function (index, item) {
    html += `<li>${item.name} - ${item.description}</li>`;
  });
  // insert final html into #event...
  $('#event').html(html);
});

// Create a ticket class
class TicketType {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}
