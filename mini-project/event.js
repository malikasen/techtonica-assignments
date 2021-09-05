// Create an event class
class Event {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.availableTickets = [];
  }
  addAvailableTickets(type, price) {
    this.availableTickets.push(new TicketType(type, price))
  }
  allTickets() {
    let str = 'All tickets: ';
    for (let i = 0; i < this.availableTickets.length; i++) {
      str += i + 1 + '. ' + this.availableTickets[i]['name'] + ' ($' + this.availableTickets[i]['price'] + ') ';
    }
    return str;
  }
  searchTickets(lowerPrice, upperPrice) {
    let str = 'Eligible tickets: ';
    let count = 0;
    for (let i = 0; i < this.availableTickets.length; i++) {
      if(this.availableTickets[i]['price'] >= lowerPrice && this.availableTickets[i]['price'] <= upperPrice) {
        count ++;
        str += count + '. ' + this.availableTickets[i]['name'] + ' ($' + this.availableTickets[i]['price'] + ') ';
      }
    }
    if (str === 'Eligible tickets: ') {
      str = 'No tickets available.'
    }
    return str;
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
    html += `<li>${item.name} - ${item.description} - ${item.searchTickets(0, 100)}</li>`;
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

// Create a ticket type for the event
eventObj1.addAvailableTickets("human", 299);
eventObj1.addAvailableTickets("vampire", 99);

eventObj2.addAvailableTickets("General Admission", 25)
eventObj2.addAvailableTickets("Floor Seating", 80)

eventObj3.addAvailableTickets("Orchestra", 300)
eventObj3.addAvailableTickets("Mezzanine", 200)
eventObj3.addAvailableTickets("Balcony", 100)

console.log(eventObj3);
console.log(eventObj3.allTickets());
console.log(eventObj3.searchTickets(100, 250));

