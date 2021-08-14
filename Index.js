   /* const { Pool } = require('pg');

    const config={
        user: 'postgres',
        host: 'localhost',
        password:'pgsql',
        database: 'postgres'

    }

    const pool =new Pool(config);

    const getUsers=async () =>
    {
        try {
            const response =await pool.query('select * from users order by users.iduser asc');
            console.log(response.rows);
        }
        catch (error) {
            console.log(error);

        }
    };
    const CreateUser= async () =>
    {
        try {
            const query = 'insert into users(nombre,apellido,iddistrito) values ($1,$2,$3)'
            const values = ['Carla','Casillas',2]

            const response = await pool.query(query,values);
            console.log(response);
        }
        catch (e) {
            console.log(e);
        }
    }

    const CreateRole= async () =>
    {
        try {
            const query = 'insert into role(rolename) values ($1)'
            const values = ['Administrador']

            const response = await pool.query(query, values);
            console.log(response);
        }
        catch (e) {
            console.log(e);
        }
    }


    const getUserById=async () =>
    {
        try {
            const query = 'select nombre from users where users.iduser=$1'
            const param = [1]
            const response=await pool.query(query,param);
            console.log(response.rows);
        }
        catch (e) {
            console.log(e);
        }
    }

    const getRoles= async () =>
    {
        try {
            const response = await pool.query('select * from role');
            console.log(response.rows);
        }
        catch (error) {
            console.log(error);

        }
    };
    const deleteUser = async  () =>
    {
        try {
            const query = 'delete from users where users.iduser=$1'
            const param = [3]

            const response =await pool.query(query,param);
            console.log(response);
        }
        catch (e) {
            console.log(e);
        }

    }
    const updateUser = async () =>
    {
        try {
            const query = 'update users set nombre = $1 where users.iduser = $2'
            const values = ['Miguel',2]

            const response = await pool.query(query,values);
            console.log(response);
        }
        catch (e) {
            console.log(e);
        }
    }

    //getRoles();
    //CreateUser();
    //CreateRole();
    //getUsers();
    getUserById();
    //deleteUser();
    //updateUser();
*/