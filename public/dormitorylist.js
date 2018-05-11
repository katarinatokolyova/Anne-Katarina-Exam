// At the frontpage the user can create an event
var Dormitoryplatform = (function () {
            // Local array to keep track of data
            let dormitories = []

            const dormitoryListWindowElement = document.querySelector('#domitorylist-window')

//dormitory template
const dormitoryTemplate = ({dormitoryname}) => `
    <li class="media my-2">
            <div class="media-body">
                <b class="text-secondary">${dormitoryname}</b>
            </div>
    </li>
    `       

            //Private frontend module 
            let frontend = {}

            frontend.autoScroll = function () {
                let cW = dormitoryListWindowElement

                if (cW.offsetHeight / (cW.scrollHeight - cW.scrollTop) > 0.85) {
                    cW.scrollTop += 150
                }
            }     

// Add a dormitory to the window
            frontend.addDormitory = function (dormitory) {
                let html = dormitoryTemplate(dormitory)

                dormListWindowElement.insertAdjacentElement('beforeend', html)

                frontend.autoScroll()
            }

// Method to generate all html of an array of dormitories
            frontend.getDormitoryHTML = function (dormitories) {
                let html = ''

                dormitories.forEach(e => {
                    html += dormTemplate(e)
                })
                return html           
// Method to display a specific array of dormitories in the window
            frontend.displayDormitories = function (dormitories) {
                dormitoryListWindowElement.innerHTML = front.getDormitoryHTML(dormitories)
            }

            //Initializing an empty object
            let module = {}


            module.createDormitory = function (dormitory) {
            let options = {
                method: 'post',
                credentials: 'include',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(dormitory)
            }
            
            fetch('/api/dormitories', options)
            .then(response => response.json())
            .then(response => {
                if (response.status != 'OK') {
                    alert(response.dormitory)
                }
            })
        } 

            /* Method for creating an event
            module.createDormitory = function (dormitory) {
                dormitory.push(dormitory)
            }*/

            //Returns an array with dormitories
            module.getDormitory = function () {
                let options = {
                    credentials: 'include'
                }

                return fetch ('/api/dormitories', options)
                .then(response => response.json())
            }

        function intitialize() {
            let socket = io()

            socket.on('new dormitory', dormitory => { 
                dormitories.push(dormitory)

                frontend.addDormitory(dormitory)
            })

        module.getDormitory()
        .then(allDormitories => {
            dormitories = allDormitories

            frontend.displayDormitories(dormitories)
        })
    }


    intitialize()


    return module
}
})

function DormitoryList (text) {
    this.text = text
}

document.querySelector('#dormitoryForm').addEventListener('submit', event => {
    event.preventDefault()

    let input = input.value
    let newDormitoryObject = new Dormitory (text)

    Dormitoryplatform.createDormitory(newDormitoryObject)

    input.value = ''
})

document.querySelector('#dormitoryForm').addEventListener('submit', event => {
    event.preventDefault()

let input = document.querySelector('#dormitoryList-window')
let value = input.value

if (value == '') {
document.querySelector('#domitoryList-window').classList.add('hidden')
return
}

document.querySelector('#dormitoryList-window').classList.add('hidden')

let results = Dormitoryplatform.createDormitory(value)

Dormitoryplatform.displayDormitoriesresults(results.results)

})

