// const express = require('express')
// const app = express()
// const port = 4000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// });

// app.get('/ashok', (req, res) => {
//     res.send('<h1> test </h1>')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/ashok', (req, res) => {
        res.send('<h1>test2</h1>')
})


app.listen(process.env.PORT, () =>{
    console.log(`listen ${port}`);
    
})