import { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from './mongo';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  const db = await connectToDatabase();

  switch (method) {
    case 'GET':
      try {
        const payment = await db.collection('payment').find({}).toArray(); // Specify the collection name here
        res.status(200).json(payment);
      } catch (error) {
        res.status(500).json({ message: 'Error fetching payment', error });
      }
      break;
    case 'POST':
      try {
        const payment = req.body;
        const result = await db.collection('payment').insertOne(payment); // Specify the collection name here
        res.status(201).json({ _id: result.insertedId, ...payment });
      } catch (error) {
        res.status(500).json({ message: 'Error creating paymen', error });
      }
      break;
    // Implement PUT and DELETE methods similarly
    default:
      res.status(405).end(`Method ${method} Not Allowed`);

      
  }
}