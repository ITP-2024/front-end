'use client'
import React, { useState, useEffect, SetStateAction } from "react";
//import { useRouter } from 'next/router';

interface User {
  userID: string;
  userName: string;
  addressID: string;
  address: string;
  createdAt: string;
  email: string;
  street: string;
  city: string;
  zipCode: string;
}

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedUserId, setSelectedUserId] = useState<User | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  //const router = useRouter();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:8080/users");
      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      } else {
        throw new Error("Failed to fetch users");
      }
      setLoading(false);
      setError(null); // Set error to null when there is no error
    } catch (error: unknown) {
      const errorMessage = (error as Error).message;
      setError(errorMessage);
      setLoading(false);
    }
  };
  

  const handleDeleteUser = async (userID: string) => {
    try {
      const response = await fetch(`http://localhost:8080/users/${userID}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setUsers(users.filter((user) => user.userID !== userID));
      } else {
        throw new Error("Failed to delete user");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(() => error.message);
      } else {
        setError(() => "An unknown error occurred.");
      }
    }
  };
  
  

  const handleEditUser = (userID: string) => {
    const selectedUser = users.find(user => user.userID === userID);
    if (selectedUser) {
      setSelectedUserId(selectedUser);
    } else {
      console.error('Address not found');
    }
  };


  const handleDeleteClick = (userID: string) => {
    //setSelectedUserId(userID);
    handleDeleteUser(userID);
  };
  // Filter users based on search query
  const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    try {
      const response = await fetch(`http://localhost:8080/users/userName/${event.target.value}`);
      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      } else {
        console.error('Failed to fetch existing members by search term');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const handleUpdateUser = async (updatedUser: User) => {
    try {
      const response = await fetch(`http://localhost:8080/users/${updatedUser.userID}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUser),
      });
      if (response.ok) {
        setUsers(
          users.map((user) =>
            user.userID === updatedUser.userID ? updatedUser : user
          )
        );
        setSelectedUserId(null);
      } else {
        throw new Error("Failed to update user");
      }
    } catch (error) {
      console.error('Error updating user:', error);
      setError("Failed to update user");
    }
  };
  

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="ml-[295px]">
      <div className="mt-[30px] mt-[60px]"> 
        <div style={{ backgroundColor: '#DEC6EE', paddingBottom: '20px' }}>
          <h2 style={{ fontSize: '24px', color: 'black', fontWeight: 'bold',paddingTop: '20px' }}>User List</h2>
          <input
          type="text"
          placeholder="Search by username..."
          value={searchTerm}
          onChange={handleSearch}
          style={{ color: 'black' }}
        />
          <table style={{ borderCollapse: 'collapse', width: '100%',border: '2px solid white' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid black' }}>
                <th style={{ padding: '10px', textAlign: 'left',color: 'black',fontWeight: 'bold' }}>UserName</th>
                <th style={{ padding: '10px', textAlign: 'left',color: 'black',fontWeight: 'bold' }}>Email</th>
                <th style={{ padding: '10px', textAlign: 'left',color: 'black',fontWeight: 'bold' }}>Actions</th>
              </tr>
            </thead>
            <tbody style={{ backgroundColor: '#f3e5f5' }}>
              {users.map((user) => (
                <tr key={user.userID}>
                  <td style={{ padding: '10px', textAlign: 'left',color: 'black' }}>{user.userName}</td>
                  <td style={{ padding: '10px', textAlign: 'left',color: 'black' }}>{user.email}</td>
                  <td>
                    <button style={{ backgroundColor: '#871A99', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '5px' }}onClick={() => handleDeleteClick(user.userID)} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded mr-2">Delete</button>
                    <button style={{ backgroundColor: '#871A99', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '5px' }}onClick={() => handleEditUser(user.userID)} className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {selectedUserId && (
            <div className="flex flex-col items-center">
              <h2 className="mb-8 text-3xl font-bold"style={{ color: 'black' }}>Edit User</h2>
              <form onSubmit={() => handleUpdateUser(selectedUserId)}>
                <div className="mb-4">
                  <label htmlFor="street" className="block text-xl font-bold"style={{ color: 'black' }}>email</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={selectedUserId.street}
                    onChange={(e) =>
                      setSelectedUserId({ ...selectedUserId, email: e.target.value })
                    }
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                
                
                <button type="submit" className="mr-8 px-8 py-4 text-xl bg-purple-400 rounded-lg font-bold"style={{ backgroundColor: '#871A99' }}>Update User</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserList;
