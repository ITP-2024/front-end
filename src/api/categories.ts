import { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from './mongo';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  const db = await connectToDatabase();

  switch (method) {
    case 'GET':
      try {
        const categories = await db.collection('Categories').find({}).toArray(); // Specify the collection name here
        res.status(200).json(categories);
      } catch (error) {
        res.status(500).json({ message: 'Error fetching categories', error });
      }
      break;
    case 'POST':
      try {
        const category = req.body;
        const result = await db.collection('Categories').insertOne(category); // Specify the collection name here
        res.status(201).json({ _id: result.insertedId, ...category });
      } catch (error) {
        res.status(500).json({ message: 'Error creating category', error });
      }
      break;
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}