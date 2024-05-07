'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface Member {
  id: string;
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumber: string;
  accessType: string;
}

const ExistingMembersPage: React.FC = () => {
  const [existingMembers, setExistingMembers] = useState<Member[]>([]);
  const [editMember, setEditMember] = useState<Member | null>(null);
  const [deleteSuccessMessage, setDeleteSuccessMessage] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    // Fetch existing members data from the backend
    const fetchExistingMembers = async () => {
      try {
        const response = await fetch('http://localhost:8080/addShareCartMembers');
        if (response.ok) {
          const data = await response.json();
          setExistingMembers(data);
        } else {
          console.error('Failed to fetch existing members');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchExistingMembers();
  }, []);

  const handleEdit = (member: Member) => {
    // Set the member to be edited
    setEditMember(member);
  };
  
  const handleSaveEdit = async () => {
    try {
      const response = await fetch(`http://localhost:8080/addShareCartMembers/${editMember!.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(editMember)
      });
      if (response.ok) {
        console.log(`Edited member with id ${editMember!.id}`);
        setEditMember(null); // Exit editing mode
        // Update the existingMembers state with the edited member
       
      } else {
        console.error(`Failed to edit member with id ${editMember!.id}`);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  const handleCancelEdit = () => {
    // Cancel editing mode
    setEditMember(null);
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:8080/addShareCartMembers/${id}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        // Remove the deleted member from the existingMembers array
        setExistingMembers(existingMembers.filter(member => member.id !== id));
        setDeleteSuccessMessage('Member successfully deleted.');

        setTimeout(() => {
            setDeleteSuccessMessage('');
          }, 3000);
        console.log(`Deleted member with id ${id}`);
      } else {
        console.error(`Failed to delete member with id ${id}`);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:8080/addShareCartMembers/firstName/${searchTerm}`);
      if (response.ok) {
        const data = await response.json();
        // Convert search term to lowercase
        const searchTermLower = searchTerm.toLowerCase();
        // Filter existing members based on the search term (case-insensitive)
        const filteredMembers = data.filter((member: Member) => member.firstName.toLowerCase().includes(searchTermLower));
        setExistingMembers(filteredMembers);
      } else {
        console.error('Failed to fetch existing members by search term');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  

  return (
    <div style={{ backgroundColor: '#DEC6EE', color: 'black', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', fontSize: '2em' }}>Existing Members</h1>
      <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} style={{ marginRight: '10px', padding: '8px', borderRadius: '5px', width: '300px' }} />
      <button style={{ backgroundColor: '#871A99', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '5px' }} onClick={handleSearch}>Search</button>
      {deleteSuccessMessage && (
        <div style={{ backgroundColor: 'red', color: 'white', padding: '10px', borderRadius: '5px', marginBottom: '10px', textAlign: 'center' }}>
          {deleteSuccessMessage}
        </div>
      )}
      <Link href="shareCart">
      <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '10px' ,marginTop: '20px'}}>
  <button style={{ backgroundColor: '#871A99', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '5px' }}>Save New Member</button>
</div>
      </Link>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid black' }}>
            <th style={{ padding: '10px', textAlign: 'left' }}>First Name</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Last Name</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Email Address</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Phone Number</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Access Type</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Edit</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Delete</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Share</th>
          </tr>
        </thead>
        <tbody>
          {existingMembers.map(member => (
            <tr key={member.id} style={{ borderBottom: '1px solid black' }}>
              <td style={{ padding: '10px', textAlign: 'left' }}>{member.firstName}</td>
              <td style={{ padding: '10px', textAlign: 'left' }}>{member.lastName}</td>
              <td style={{ padding: '10px', textAlign: 'left' }}>{member.emailAddress}</td>
              <td style={{ padding: '10px', textAlign: 'left' }}>{member.phoneNumber}</td>
              <td style={{ padding: '10px', textAlign: 'left' }}>{member.accessType}</td>
              <td style={{ padding: '10px', textAlign: 'left' }}>
                <button style={{ backgroundColor: '#871A99', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '5px' }} onClick={() => handleEdit(member)}>Edit</button>
              </td>
              <td style={{ padding: '10px', textAlign: 'left' }}>
                <button style={{ backgroundColor: '#871A99', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '5px' }}onClick={() => handleDelete(member.id)}>Delete</button>
              </td>
              <td style={{ padding: '10px', textAlign: 'left' }}>
                <button style={{ backgroundColor: '#871A99', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '5px' }}>Share</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
  
      {/* Edit Member Form */}
      {editMember && (
  <div style={{ marginTop: '20px', textAlign: 'center' }}>
    <h1 style={{ textAlign: 'center', fontSize: '2em' }}>Update member details</h1>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <label style={{ marginBottom: '10px' }}>First Name:</label>
      <input type="text" value={editMember.firstName} onChange={e => setEditMember({ ...editMember, firstName: e.target.value })} style={{ marginBottom: '10px', padding: '8px', borderRadius: '5px', width: '100%', maxWidth: '300px' }} />
      <label style={{ marginBottom: '10px' }}>Last Name:</label>
      <input type="text" value={editMember.lastName} onChange={e => setEditMember({ ...editMember, lastName: e.target.value })} style={{ marginBottom: '10px', padding: '8px', borderRadius: '5px', width: '100%', maxWidth: '300px' }} />
      <label style={{ marginBottom: '10px' }}>Email Address:</label>
      <input type="text" value={editMember.emailAddress} onChange={e => setEditMember({ ...editMember, emailAddress: e.target.value })} style={{ marginBottom: '10px', padding: '8px', borderRadius: '5px', width: '100%', maxWidth: '300px' }} />
      <label style={{ marginBottom: '10px' }}>Phone Number:</label>
      <input type="text" value={editMember.phoneNumber} onChange={e => setEditMember({ ...editMember, phoneNumber: e.target.value })} style={{ marginBottom: '10px', padding: '8px', borderRadius: '5px', width: '100%', maxWidth: '300px' }} />
      <label style={{ marginBottom: '10px' }}>Access Type:</label>
      <select value={editMember.accessType} onChange={e => setEditMember({ ...editMember, accessType: e.target.value })} style={{ marginBottom: '10px', padding: '8px', borderRadius: '5px', width: '100%', maxWidth: '300px' }}>
        <option value="View Only">View Only</option>
        <option value="Edit Items">Edit Items</option>
        <option value="Add Items">Add Items</option>
      </select>
    </div>
    <button style={{ backgroundColor: '#871A99', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '5px', marginRight: '10px', marginTop: '20px' }} onClick={handleSaveEdit}>Save</button>
    <button style={{ backgroundColor: '#871A99', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '5px', marginTop: '20px' }} onClick={handleCancelEdit}>Cancel</button>
  </div>
)}


    </div>
  );
  
}

export default ExistingMembersPage;
