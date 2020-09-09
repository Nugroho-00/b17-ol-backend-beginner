// const express = require("express")
// // const {request , response} = require("express")

// const app = express()

// app.get("/Home", (req, res) => {
//     res.send("Welcome to my first backend")
// })

// app.listen(3030, () => {
//     console.log("Server listening on port http://localhost:3030")
// })

// app.get("/Profile", (req, res) => {
//     res.send({
//         data: [{
//             nama: "jane",
//             batch: "17.2",
//             email: "janedoe @mail.com"
//         }]
//     })
// })

// app.post('/', function (req, res) {
//     res.send('POST request to the homepage')
// })

// app.patch('/Profile', function (req, res, ) {
//     res.send({
//         nama: "Satrio"
//     })
// });

const express = require("express")
const bodyParser = require("body-parser")

const app = express()

// app.use(bodyParser.urlencoded({
//     extended: true
// }));
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended: true
// }));

let data = {
    nama: "jane",
    batch: "17.2",
    email: "janedoe@mail.com"
};

app.get("/home", (request, response) => {
    response.send("Welcome to my first backend!!!")
});

app.get("/profile", (request, response) => {
    return response.json(data);
});

app.delete("/profile/:nama", (request, response) => {
    return response.json(data)
})

// app.post("/profile", (request, response) => {
//     const newData = {
//         nama: request.body.nama,
//         batch: request.body.batch,
//         email: request.body.email,
//     };
//     data.push(newData)
//     return response.json(newData)
// });


app.listen(3030, () => {
    console.log("Server listening on port http://localhost:3030")
})