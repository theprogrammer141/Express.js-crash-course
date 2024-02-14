const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// app.use(logger);

// app.get('/', (request, response) =>
// {
//     // console.log('Here');
//     // response.send(500);
//     // response.status(500).send('Hi');
//     // response.json({message: "Error"});
//     // response.download('server.js');
//     response.render('index', { text: "World"});
// });

const userRouter = require('./routes/users');

app.use('/users', userRouter);

app.listen(3000);