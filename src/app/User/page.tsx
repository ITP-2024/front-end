// ExistingMembersPage.tsx

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { User } from '../../app/ExistingMembersPage'

interface User {
  userID: string;
  userName: string;
  address: string;
  password: string;
  email: string;
}

const ExistingMembersPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [deleteSuccessMessage, setDeleteSuccessMessage] = useState<string>('');

  useEffect(() => {
    // Fetch existing users data from the backend
    const fetchExistingUsers = async () => {
      try {
        const response = await fetch('http://localhost:8080/users');
        if (response.ok) {
          const data = await response.json();
          setUsers(data);
        } else {
          console.error('Failed to fetch existing users');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchExistingUsers();
  }, []);

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:8080/users/userName/${searchTerm}`);
      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      } else {
        console.error('Failed to fetch users by search term');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDelete = async (userID: string) => {
    try {
      const response = await fetch(`http://localhost:8080/users/${userID}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        // Remove the deleted user from the users array
        setUsers(users.filter(user => user.userID !== userID));
        setDeleteSuccessMessage('User successfully deleted.');

        setTimeout(() => {
          setDeleteSuccessMessage('');
        }, 3000);
        console.log(`Deleted user with ID ${userID}`);
      } else {
        console.error(`Failed to delete user with ID ${userID}`);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div style={{ backgroundColor: '#DEC6EE', color: 'black', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', fontSize: '2em' }}>Existing Users</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        style={{ marginRight: '10px', padding: '8px', borderRadius: '5px', width: '300px' }}
      />
      <button
        style={{ backgroundColor: '#871A99', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '5px' }}
        onClick={handleSearch}
      >
        Search
      </button>
      {deleteSuccessMessage && (
        <div style={{ backgroundColor: 'red', color: 'white', padding: '10px', borderRadius: '5px', marginBottom: '10px', textAlign: 'center' }}>
          {deleteSuccessMessage}
        </div>
      )}
      <Link href="/createUser">
        <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '10px', marginTop: '20px' }}>
          <button style={{ backgroundColor: '#871A99', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '5px' }}>Create New User</button>
        </div>
      </Link>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid black' }}>
            <th style={{ padding: '10px', textAlign: 'left' }}>Username</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Address</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Email</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.userID} style={{ borderBottom: '1px solid black' }}>
              <td style={{ padding: '10px', textAlign: 'left' }}>{user.userName}</td>
              <td style={{ padding: '10px', textAlign: 'left' }}>{user.address}</td>
              <td style={{ padding: '10px', textAlign: 'left' }}>{user.email}</td>
              <td style={{ padding: '10px', textAlign: 'left' }}>
                <button
                  style={{ backgroundColor: '#871A99', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '5px' }}
                  onClick={() => handleDelete(user.userID)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExistingMembersPage;
