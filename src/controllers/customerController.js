    const controller = {};
    const bd = require('../config/database');

    controller.list = function (req, res)
    {
        try {
           bd.query('select * from users order by users.iduser asc',(errors,users) => {
               if (errors){
                   throw errors;
               }
               res.render('users',{
                   data: users
                   //listUsers: res.rows
               });
            });
            //console.log(response.rows);
        }catch (e) {
            console.log(e);
        }
    }

    controller.distritoList = function (req, res)
    {
        try {
            db.query('select * from distrito',(errors,distrito) =>
            {
                if(errors){
                    throw errors;
                }
                res.render('users',{
                    data: distrito
                });
            });
        }catch (e) {

        }
    }

    module.exports = controller;


    /*const getUsers=async () =>
    {
        try {
            bd.query('select * from users order by users.iduser asc');
            console.log(response.rows);
        }
        catch (error) {
            console.log(error);

        }
    };*/
