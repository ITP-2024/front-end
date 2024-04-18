// pages/api/products.ts
import { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from './mongo';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  const db = await connectToDatabase();

  switch (method) {
    case 'GET':
      try {
        const products = await db.collection('Products').find({}).toArray(); // Specify the collection name here
        res.status(200).json(products);
      } catch (error) {
        res.status(500).json({ message: 'Error fetching products', error });
      }
      break;
    case 'POST':
      try {
        const product = req.body;
        const result = await db.collection('Products').insertOne(product); // Specify the collection name here
        res.status(201).json({ _id: result.insertedId, ...product });
      } catch (error) {
        res.status(500).json({ message: 'Error creating product', error });
      }
      break;
    // Implement PUT and DELETE methods similarly
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}