'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

const GiftBoxDetails: React.FC = () => {
  const [giftBoxData, setGiftBoxData] = useState(null);
  const router = useRouter();
  const param  = useSearchParams();
  const id = param.get('id');

  console.error(id);

  useEffect(() => {
    if (id) {
      // Make HTTP request to fetch gift box data based on the ID
      axios.get(`http://localhost:8080/giftBox/update/get?id=${id}`)
        .then(response => {
          setGiftBoxData(response.data);
        })
        .catch(error => {
          console.error('Error fetching gift box data:', error);
        });
    }
  }, [id]);

  if (!giftBoxData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Render the gift box details */}
      <h1>Gift Box Details</h1>
      <p>ID: {giftBoxData}</p>
      {/* Render other details of the gift box */}
    </div>
  );
};

export default GiftBoxDetails;


