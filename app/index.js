/** craation deu serveur */

const express = require('express') /** importation des modules d'express */
const cors = require('cors')

const router = require('./routes')

const app = express() /** création d'une instance du serveur */
app.use(cors())
const port = 3000 /***  création du port*/

app.use(router)

app.listen(port,err =>{
    err? console.log(err) : console.log(`server is runnine on port ${port}`)
})
/*app.listen(port, () => console.log(`Magic happens on port ${port}`))*/
