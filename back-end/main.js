/* 
This is the Main Page
Currently, it only takes you to the sample.js when a get request is
made for that 
*/

const express = require('express')
const app = express()
const port = 5000;
const test_login = '/testlogin'

//The following line will get the function from testlogin.js
const test = require('./testlogin.js');

//This block here will open the main page and display: 'This is the Main Page'
app.get('/', (req, res) => {
    res.send('This is the Main Page');

})

app.get('/example', (req, res) => {
    //const firstName = req.query.firstName;
    res.json({
        UserName: 'John Smith',
        Password: 'Password',
        Birthday: 'January 01, 2000',
        Email: 'johnsmith@gmail.com',
        PhoneNumber: '604-444-4444'});
})

//This block opens up url/testlogin and displays 'Test login succesful!'
app.get(test_login, (req, res) =>{
    res.send(test());
})


app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`);
})
