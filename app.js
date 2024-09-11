import express from 'express'
import {router} from './router/router.js'

const PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())
app.use(router)

app.listen(PORT, () => {
    try {
        console.log('Conected to database')
        console.log(`Server is running on port ${PORT}`)
    }catch(e) {
        console.log('error connectin to database',e)
    }
})