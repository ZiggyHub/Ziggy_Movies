const express = require('express');
const cors = require('cors');
const { dataBaseConnection } = require('../db/database')

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3000
        this.usersPath = "/api/users"
        // this.servicePath = "/api/services"
        this.dataBaseConnection()
        this.middlewares()
        this.routes()
    }

    async dataBaseConnection(){
        await dataBaseConnection()
    }


    middlewares(){
        this.app.use(cors())
        this.app.use(express.json())
    }

    routes(){
    this.app.use(this.usersPath, require('../routes/users.routes'))
    //     this.app.use(this.servicePath, require('../routes/services.routes'))

    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`escuchando en el puerto ${this.port}`)
        })
    }
}


module.exports = Server;