const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51KVrYXSHOrbPbL79O1UR0ahv9MOWx7C0opiLEQPaYubawnYC5CmGHchJ8WOn6xNOmN4UM5Eht0zgIw6k8vqj83iC007lodBzEm')
// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());


app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;


    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd",
      });
 console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

 response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
exports.api = functions.https.onRequest(app);