import { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from './mongo';
import { ObjectId } from 'mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  const db = await connectToDatabase();

  switch (method) {
    case 'GET':
      try {
        const complain = await db.collection('Complain').find({}).toArray(); 
        res.status(200).json(complain);
      } catch (error) {
        res.status(500).json({ message: 'Error fetching Complain Details', error });
      }
      break;
    case 'POST':
      try {
        const complain = req.body;
        const result = await db.collection('Complain').insertOne(complain); 
        res.status(201).json({ _id: result.insertedId, ...complain });
      } catch (error) {
        res.status(500).json({ message: 'Error creating product', error });
      }
      break;
    case 'PUT':  
      try {
        const { id } = req.query;
        const updateComplain = req.body;
        const result = await db.collection('Complain').updateOne(
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
