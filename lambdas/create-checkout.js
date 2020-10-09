const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async (req, res) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1000,
    currency: "usd",
  });
  return {
    statusCode: 200,
    body: JSON.stringify({
      clientSecret: paymentIntent.client_secret,
    }),
  };
};
