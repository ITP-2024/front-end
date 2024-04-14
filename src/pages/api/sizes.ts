// pages/api/sizes.ts
import { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from './mongo';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  const db = await connectToDatabase();

  switch (method) {
    case 'GET':
      try {
        const sizes = await db.collection('Sizes').find({}).toArray(); // Specify the collection name here
        res.status(200).json(sizes);
      } catch (error) {
        res.status(500).json({ message: 'Error fetching sizes', error });
      }
      break;
    case 'POST':
      try {
        const size = req.body;
        const result = await db.collection('Sizes').insertOne(size); // Specify the collection name here
        res.status(201).json({ _id: result.insertedId, ...size });
      } catch (error) {
        res.status(500).json({ message: 'Error creating size', error });
      }
      break;
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}