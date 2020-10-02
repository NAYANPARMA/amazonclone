const cors = require("cors")
const express = require("express")
const uuid = require("uuid")

const stripe = require("stripe")(
  "sk_test_51HX044DNKvcY3zsCMJ9qFJ4UChc3EDahbc30EbfKacYiMnfDxIIxP2tGr0MlE7Mhl3r3Q9jqM7aGRwdzQOIzC1MJ00AWH4WvRY"
)

const app = express()

//middleware
app.use(express.json())
app.use(cors())

//routes

app.get("/", (req,res) => {
    res.send("IT WORKS")
})

//listen

// app.post('/payments/create' , async(req,res) => {
//     const total = request.query.total;
//     const idempontencyKey = uuid()

//     // return stripe.customers.create({
//     //     email: DOMSettableTokenList.email
//     // }).then(customer => {

//     // })
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: total, //subunit of currency
//       currency: 'inr',
//     },{idempontencyKey})
//     .then(result => res.status(200).json(result))
//     .catch(err => console.log(err))
// })

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment request Received", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunit of currency
    currency: "inr",
  });

  //OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});


app.listen(8282, () => console.log("I am Listening"))