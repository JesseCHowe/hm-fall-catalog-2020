const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const products = require("./data/products.json");

const calculateOrderAmount = (test) => {
  const items = JSON.parse(test);
  const total = items.reduce((prev, curr) => {
    const product = products.filter((product) => product.name === curr.name)[0];
    return prev + curr.qty * product.amount;
  }, 0);
  return total;
};

exports.handler = async (req, res) => {
  const items = req.body;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "usd",
  });
  return {
    statusCode: 200,
    body: JSON.stringify({
      clientSecret: paymentIntent.client_secret,
    }),
  };
};
