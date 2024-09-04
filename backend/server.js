// Create Express Server
// npm init
// npm i express nodemon cors colors
const express = require ('express');
const app = express();
const port = 5000;
const logRequest = require('./middleware/logs');
const { errorHandler } = require('./middleware/errormiddleware.js');
// testing APIs (Application Programming Interface)

// app.use('/',(req,res) => {
//     res.send('Hai Iqbal Fajri')
// })

// basic routing "/" = routing atau API nya "," = handler
// yg dibawah adalah path
// app.get('/',(req,res) => {
//     res.send('Method Get')
// })

// app.post('/',(req,res) => {
//     res.json({
//         nama: 'Iqbal Fajri',
//         email: 'mr.zhaxt@gmail.com',
//         numPhone: '089543191960'
//     })
// })
// method use merupakan middleware => GET (read),POST (create),DELETE (delete),PUT (update)

app.use('/api/goals', require ('./routes/goalroutes.js'))
// app.listen (port,() => console.log (`server berjalan di port ${port}`))
app.listen(port, () => {
    // console.log(`Bagi duit dong ${port} aja`)
    console.log(`Server berjalan di port ${port}`)
})
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(logRequest)
app.use(errorHandler)