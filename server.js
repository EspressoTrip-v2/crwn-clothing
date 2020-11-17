const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const compression = require('compression');

/* ONLY LOAD ENV FILE IN DEVELOPEMENT */
if (process.env.NODE_ENV !== 'production') require('dotenv').config();
/* PASS SECRET KEY TO STRIPE */
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

/* EXPRESS APP */
const app = express();
const port = process.env.PORT || 5000;

/* MIDDLEWARE INCLUSION */
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

/* SETUP FILE LOCATION FOR GET REQUESTS */
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

/* INSTANTIATE EXPRESS APP */
app.listen(port, (error) => {
  if (error) throw error;
  console.log(`Server running on port ${port}`);
});

/* ROUTES */
app.post('/payment', (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'usd',
  };

  stripe.charges.create(body, (stripeError, stripeResponse) => {
    if (stripeError) {
      console.log(stripeError.message);
      res.status(500).send({ error: stripeError });
    } else {
      res.status(200).send({ success: stripeResponse });
    }
  });
});
