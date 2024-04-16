import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await axios.get<GiftBoxColor[]>('http://localhost:8080/giftBoxColor');
    const giftBoxColors = response.data;
    res.status(200).json(giftBoxColors);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching gift box colors' });
  }
};

interface GiftBoxColor {
  boxColorId: string;
  color: string;
  image: string;
}