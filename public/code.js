
// From server.js
// Main endpoint where main page is served from
app.get('/', (req, res) => {
    // Render the main.html in the views folder
    res.render('main', {
        title: 'Main page title'
    })
})

// About page
app.get('/about', (req, res) => {
    // Example socket.io event
    io.emit('page view', {
        page: 'about'
    })

    // Render the about.html in the views folder
    res.render('about', {
        title: 'About page'
    })
})