import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        // Fetch gift box data from the server
        const giftBoxResponse = await axios.get('http://localhost:8080/giftBox/update/get?id=${id}');
        const giftBoxData = giftBoxResponse.data;
        
        // Return the fetched data
        res.status(200).json(giftBoxData);
    } catch (error) {
        console.error('Error fetching gift box data:', error);
        res.status(500).json({ error: 'Error fetching gift box data' });
    }
}
