const expresss = require('express');

// create express app 

const app  = expresss();

const port = process.env.PORT || 5000;


// Import router
const newsRoutes =  require('./src/routes/news.route');
// Create news routers
app.use('/api/v1/news',newsRoutes)

// define root route

app.get('/' , (req ,res) => {
    res.send("Hello Kane")
});

// listen to port 
app.listen(port , () => {
    console.log(`Express Server is running at port ${port}`);
})

