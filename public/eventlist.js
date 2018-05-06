// At the frontpage the user can create an event
var Eventplatform = (function () {
// Local array to keep track of data
let events = []

const eventListWindowElement = document.querySelector('#eventList-window')

//Private frontend module 
let frontend = {}

frontend.autoScroll = function (){
    let cW = eventListWindowElement

    if (cW.offsetHeight / (cW.scrollHeight - cW.scrollTop) > 0.85) {
        cW.scrollTop += 150
      }
  }

  frontend.addEvent = function (event) {
      let html = eventTemplate (event)

      eventListWindowElement.insertAdjacentElement('beforeend', html)
      
      frontend.autoScroll()
  }

  frontend.getEventHTML = function (events){
      let html = ''

      events.forEach(e => {
          html += eventTemplate(e)
      })
      return html
  }

  frontend.displayEvents = function (events){
      eventListWindowElement.innerHTML = front.getEventHTML(events)
  }

  //Initializing an empty object
let module = {}

// Method for creating an event
module.createEvent = function (event) {
    event.push(event)
    frontend.addComment(event)
}

//Returns an array with events
module.getEvent = function (){
    return event
}
return module 

function DormEvent (event, dormitory) {
    this.event = event
    this.dormitory = dormitory
}

// nyt
module.getEvents = function (dormitory) {
    // The credentials option makes sure that the browsers cookies
    // are sent back and forth during a request
    let options = {
        credentials: 'include'
    }

    return fetch(`/api/dormitories/${dormitory}/events`, options)
    .then(response => response.json())
  }
})

// module.getEvents(DORM_ID)