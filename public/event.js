var Eventplatform = (function () {

// Local array to keep track of data
let comments = []
let guestList = []


// Elements
const eventWindowElement = document.querySelector('#event-window')
const eventCommentElement = document.querySelector('#comment-window')
const guestListElement = document.querySelector('#guestlist-window')

// Templates
const userTemplate = ({ username }) => `
<li class="media my-2">
  <div class="media-body">
    <b class="text-secondary">${username}</b>
  </div>
</li>
`

const commentTemplate = ({text, user}) => `
<div class="media my-3 chat-message">
  <div class="media-body">
    <div class="mt-0"><b>${user.username}</b></div>
    <p>
      ${text}
    </p>
  </div>
</div>
`

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

frontend.addUser = function (user){
    let html = guestListTemplate (user)

    guestListElement.insertAdjacentElement('beforeend', html)
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

// Add a user to the gueslist
frontend.addUser = function (user) {
    let html = userTemplate(user)


  // Set the new HTML and add it to the end of the list
  guestListElement.insertAdjacentHTML('beforeend', html)  
}



