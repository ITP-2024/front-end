import { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from './mongo';
import { ObjectId } from 'mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  const db = await connectToDatabase();

  switch (method) {
    case 'GET':
      try {
        const order = await db.collection('Order').find({}).toArray(); 
        res.status(200).json(order);
      } catch (error) {
        res.status(500).json({ message: 'Error fetching Order Details', error });
      }
      break;
    case 'POST':
      try {
        const order = req.body;
        const result = await db.collection('Order').insertOne(order); 
        res.status(201).json({ _id: result.insertedId, ...order });
      } catch (error) {
        res.status(500).json({ message: 'Error to Save Order Details', error });
      }
      break;
    case 'PUT':  
      try {
        const { id } = req.query;
        const updateComplain = req.body;
        const result = await db.collection('Order').updateOne(
          { _id: new ObjectId(id as string) },
          { $set: updateComplain }
        );
        if (result.matchedCount === 0) {
          return res.status(404).json({ message: 'Complaint not found' });
        }
        res.json({ message: 'Complain updated successfully' });
      } catch (error) {
        res.status(500).json({ message: 'Error updating complain', error });
      }
      break;
    case 'DELETE':
      try {
        const { id } = req.query;
        const result = await db.collection('Complain').deleteOne({ _id: new ObjectId(id as string) });
        if (result.deletedCount === 0) {
          return res.status(404).json({ message: 'Complain not found' });
        }
        res.json({ message: 'Complain deleted successfully' });
      } catch (error) {
        res.status(500).json({ message: 'Error deleting complain', error });
      }
      break;
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
