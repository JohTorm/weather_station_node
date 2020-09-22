const express = require('express')
const bodyParser = require('body-parser')
const { v4: uuidv4 } = require('uuid');
const app = express()
const port = 3000

app.use(bodyParser.json())

let sensor = [
    {
        id: uuidv4(),
        type: 'temperature',
        description: 'sensor',
        latitude: '65.7864',
        longitude: '25.3434324',
        sensorDataTypes: {
            humidity: false,
            temperature: true,
            rain: false,
            wind: false,
            cloud: true
        }
    }
]

let sensorData = [
    {
        timestamp: '2018-09-24T18:06:28Z',
        values: {
          humidity: 45,
          temperature: 12.6,
          rain: 44,
          wind: 3,
          cloudiness: 57
        }
      }
      
]

let user = [
    {
        id: uuidv4(),
        userName: "Pekka123",
        name: "Pekka",
        streetAddress: "Pekankatu 34",
        city: "Pekkala",
        country: "Suomi",
        birthDate: '1994-02-17',
        email: "Pekka@Pekka.com",
        password: "Pekka123",
      }
]

app.post('/sensors', (req, res) => {
    const newSensor = {
        id: uuidv4(),
        type: req.body.type,
        description: req.body.description,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        sensorDataTypes: {
            humidity: req.body.sensorDataTypes.humidity,
            temperature: req.body.sensorDataTypes.temperature,
            rain: req.body.sensorDataTypes.rain,
            wind: req.body.sensorDataTypes.wind,
            cloud: req.body.sensorDataTypes.cloud,
        }
    }
    sensor.push(newSensor)
    res.sendStatus(200)
})

app.post('/users', (req, res) =>{
    const newUser = {
        id: uuidv4(),
        username: req.body.username,
        name: req.body.name,
        streetaddress: req.body.streetaddress,
        city: req.body.city,
        country: req.body.country,
        birthDate: req.body.birthDate,
        email: req.body.email,
        password: req.body.password,
      }
    user.push(newUser)
   res.send(user[user.length - 1].id)
    
})

app.get('/sensors', (req, res) => {
    res.json({ sensor })
})



app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`)
})