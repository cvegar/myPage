    const express = require('express');
    const path = require('path');
    const morgan = require('morgan');



    const app = express();


    //importing routes
    const customerRotes = require('./routes/users');

    //settings
    app.set('port',process.env.PORT || 3000);
    app.set('view engine','ejs');
    app.set('views', path.join(__dirname,'views'));


    //middlewares -- registra las peticiones del servidor
    app.use(morgan('dev'));

    //routes -- las rutas del servidor
    app.use('/',customerRotes);

    //statics files
    app.use(express.static(path.join(__dirname, 'public')));

    //staring server port
    app.listen(app.get('port'),() => {

       console.log('Server in port 3000');

    });