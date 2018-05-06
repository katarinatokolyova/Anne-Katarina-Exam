// At the frontpage the user can create an event
var Dormitoryplatform = (function () {
            // Local array to keep track of data
            let dormitories = []

            const dormitoryListWindowElement = document.querySelector('#domitorylist-window')

            //Private frontend module 
            let frontend = {}

            frontend.autoScroll = function () {
                let cW = dormitoryListWindowElement

                if (cW.offsetHeight / (cW.scrollHeight - cW.scrollTop) > 0.85) {
                    cW.scrollTop += 150
                }
            }

            frontend.addDormitory = function (dormitory) {
                let html = dormitoryTemplate(dormitory)

                dormListWindowElement.insertAdjacentElement('beforeend', html)

                frontend.autoScroll()
            }

            frontend.getDormitoryHTML = function (dormitories) {
                let html = ''

                dormitories.forEach(e => {
                    html += dormTemplate(e)
                })
                return html
            }

            frontend.displayDormitories = function (dormitories) {
                dormitoryListWindowElement.innerHTML = front.getDormitoryHTML(dormitories)
            }

            //Initializing an empty object
            let module = {}

            // Method for creating an event
            module.createDormitory = function (dormitory) {
                dormitory.push(dormitory)
            }

            //Returns an array with events
            module.getDormitory = function () {
                return dormitories
            }
            return module


            // ??
            function dormitoryEvent (dormitory) {
                this.dormitory = dormitory
            }

        })