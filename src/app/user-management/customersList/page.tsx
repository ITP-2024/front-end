'use client'
import React, { useState, useEffect, SetStateAction } from "react";


interface User {
  userID: string;
  userName: string;
  addressID: string;
  address: string;
  password: string;
  email: string;
  street: string;
  city: string;
  zipCode: string;
}

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

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
    console.log("Edit user with ID:", userID);
    // Implement logic for editing user
  };

  const handleDeleteClick = (userID: string) => {
    setSelectedUserId(userID);
    handleDeleteUser(userID);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>User List</h2>
      <table>
        <thead>
          <tr>
            <th>UserName</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.userID}>
              <td>{user.userName}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleDeleteClick(user.userID)} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded mr-2">Delete</button>
                <button onClick={() => handleEditUser(user.userID)} className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
};

export default UserList;
