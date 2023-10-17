const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5001;

// middle ware 
app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Data is comming from \'teccnology-and-electronics\' server ')
})

app.listen(port, () => {
  console.log(`Technology and Electronics app listening on port ${port}`)
})