const express = require('express')
const morgan = require('morgan')
const path = require('path')
const mysql = require('mysql')
const myConecction = require('express-myconnection')
const app = express();


// IMPORTANDING ROUTES
const userRoutes = require('./routes/users')

//SETTINGS
app.set('port' , process.env.PORT || 3000);
app.set('view engine' , 'ejs' );
app.set('views' , path.join(__dirname , 'views'));

//MIDLEWARE
app.use(morgan('dev'))
app.use(myConecction(mysql ,{
    host:'localhost',
    user:'root',
    password:'',
    port: 3306,
    database: 'nodejs'
} , 'single'))

app.use(express.urlencoded({extended:false}))


//ROUTES

app.use('/' , userRoutes)



//STATIC FILES
app.use(express.static(path.join(__dirname , 'public')))


app.listen(app.get('port'),() =>{
    console.log(`Server is running on port ${app.get('port')}`)
})

