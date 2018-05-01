var Eventplatform = (function () {

// Local array to keep track of data
let comments = []
let eventparticipants = []


// Elements
const eventWindowElement = document.querySelector('#event-window')
const eventCommentElement = document.querySelector('#comment-window')
const eventParticipantsElement = document.querySelector('#event-participants')


// Private frontend module
let frontend = {}

frontend.autoScroll = function () {
    let eW = eventCommentElement
    
    if (e.W.offsetHeight / (eW.scrollHeight - eW.scrollTop) > 0.85) {
        eW.scrollTop += 150
    }
}

frontend.addComment = function (comment) {
    let html = commentTemplate(comment)

    eventCommentElement.insertAdjacentElement('beforeend', html)
}

frontend.addParticipant = function (participant){
    let html = participantTemplate (participant)

    eventParticipantsElement.insertAdjacentElement('beforeend', html)
    frontend.autoScroll ()
}

frontend.getCommentHTML = function (comments) {
    let html = ''

    comments.forEach (e => {
        html += commentTemplate(e)
    })
    return html
}

frontend.displayComments = function (comments) {
    eventWindowElement.innerHTML.getCommentHTML(events)

}

//Initializing and empty object 
let module = {}

module.sendComment = function (comment) {
    comment.push(comment)
    frontend.addComment(comment)
}

//Return the comment array
module.getComment = function () {
    return comments
}

return module

function EventComment (comment, user)
    this.comment = comment
    this.user = user
    this.createdAt = new Date()
})
