const express = require('express');
const fs = require('fs')
const app = express.Router();
const port = 3000;



app.get(`/class/list`,(req,res) => {
    const classList = req.params.class
    fs.readFile(`./Classes/${classList}.json`, (err, data) => {
        if (err) {
            throw err
        }
        else console.log(data)
    }) // change ' to ` for $ interpolation

})

module.exports = {
    userRouter: app
}

/*List All Students in a Class
GET localhost:3000/class/list/?class=physics
Check if the class file exists, if not give an error response
If class file exists show the list of students
{
  students: [
    { name: 'John', age: 30, city: 'NYC', grade: 75 },
    { name: 'Emily', age: 28, city: 'LA', grade: 80 }
  ]
}
An error response should look like:

{ 
  error: 'Class physicslol doesn't exist.'
}
*/

