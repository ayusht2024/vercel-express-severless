const express = require('express');
const app = express();
// const morgan = require('morgan');
// const helmet = require('helmet');
// const cors = require('cors');

// require('dotenv').config();

// const middlewares = require('./middlewares');
// const api = require('./api');




// app.use(morgan('dev'));
// app.use(helmet());
// app.use(cors());
// /middleware
app.use(express.json());

const PORT = 8080;
app.listen(PORT,
  () => console.log('alive on http://localhost:' + PORT)
)

// add a endpoint 
app.get('/tshirt', (req, res) => {
  res.status(200).send({
    tshirt: '1',
    size: 'large'
  })
 });

//  curl -X POST http://localhost:8080/tshirt:123 -H "Content-Type: application/json" -d '{"logo": "myLogo"}'

// add a endpoint dynamic endpoint 

// app.post('/tshirt/:id', (req, res) => {
//   //middleware to parse json 
//   const {id} = req.params;
//   const {logo} = req.body;

//   // Save to db 
//   if (!logo) {
//     res.status(418).send({
//       message: "We need logo"
//     })
//   res.send({
//     tshirt: '1',

//   })}

// });

app.post('/tshirt/:id', (req, res) => {
  const { id } = req.params;
  const { logo } = req.body;

  // Check if logo is provided
  if (!logo) {
    return res.status(418).send({
      message: "We need logo"
    });
  }

  // Simulate saving to the database and send response
  res.send({
    tshirt: '1',
    id,
    logo
  });
});
// curl -X POST http://localhost:8080/tshirt/123 -H "Content-Type: application/json" -d '{"logo": "myLogo"}'


// app.use('/api/v1', api);

// app.use(middlewares.notFound);
// app.use(middlewares.errorHandler);

module.exports = app;
