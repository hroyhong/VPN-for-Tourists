// // pages/api/create-payment-intent.js

// import { NextApiRequest, NextApiResponse } from 'next';
// import Stripe from 'stripe';

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
//   apiVersion: '2022-11-15',
// });

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     try {
//       const { amount } = req.body;
//       const paymentIntent = await stripe.paymentIntents.create({
//         amount,
//         currency: 'usd',
//       });
//       res.status(200).json({ clientSecret: paymentIntent.client_secret });
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   } else {
//     res.setHeader('Allow', 'POST');
//     res.status(405).end('Method Not Allowed');
//   }
// }