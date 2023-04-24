const express = require('express');
var cors = require('cors')
let app = express();

app.use(cors())

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

app.get('/chart', (req, res) => {
    const guest = [];
    const user = [];

    for(let i=0; i<5; i++) {
        let guest_random = randomIntFromInterval(50, 500);
        let user_random = randomIntFromInterval(100, 600);
        guest.push(guest_random);
        user.push(user_random)
    }

    let response = {
        labels: ['', 'Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [{
          label: 'Guest',
          data: guest,
        }, {
          label: 'User',
          data: user,
        }
      ]
    }

    res.send(response);
});

app.get('/pie', (req, res) => {
    let sum = 100
    const numbers = []

    for (let i = 0; i < 2; i++) {
        const randomNumber = Math.floor(Math.random() * sum)
        sum -= randomNumber < 0 ? 0 : randomNumber
        numbers.push(randomNumber < 0 ? 0 : randomNumber)
    }

    numbers.push(sum)

    let response = {
        labels: ['Basic Tees', 'Custom Short Pants', 'Super Hoodies'],
        datasets: [{
            data: numbers
        }]
    }

    res.send(response);
});

const port = process.env.PORT || 4000;


app.listen(port, () => {
    console.log("Server is running...");
})
