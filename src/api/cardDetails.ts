import { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from './mongo';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  const db = await connectToDatabase();

  switch (method) {
    case 'GET':
      try {
        const cardDetails = await db.collection('cardDetails').find({}).toArray(); // Specify the collection name here
        res.status(200).json(cardDetails);
      } catch (error) {
        res.status(500).json({ message: 'Error fetching card details', error });
      }
      break;
    case 'POST':
      try {
        const cardDetail = req.body;
        const result = await db.collection('cardDetails').insertOne(cardDetail); // Specify the collection name here
        res.status(201).json({ _id: result.insertedId, ...cardDetail });
      } catch (error) {
        res.status(500).json({ message: 'Error creating card detail', error });
      }
      break;
    // Implement PUT and DELETE methods similarly
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
