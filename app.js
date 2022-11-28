const express = require('express');
const cors = require('cors')
const PORT = process.env.PORT || 3001;
const AppRouter = require('./routes/AppRouter')

const app = express();
app.use(cors())


app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.get('/', (req, res) => {
    res.send('home page');
  })

  app.use('/api', AppRouter) 

app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`)
  })