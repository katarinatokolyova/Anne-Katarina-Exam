var Eventplatform = (function () {

// Local array to keep track of data
let comments = []
let eventparticipants = []


// Elements
const eventWindowElement = document.querySelector('#event-window')
const eventParticipantsElement = document.querySelector('#event-participants')


// Private frontend module
let frontend = {}

frontend.autoScroll = function () {
    let eW = eventWindowElement
    
    if (e.W.offsetHeight / (eW.scrollHeight - eW.scrollTop) > 0.85) {
        eW.scrollTop += 150
    }
}

// what does this part does?
frontend.addUser = function (user) {
    let html = userTemplate(user)
}


})
