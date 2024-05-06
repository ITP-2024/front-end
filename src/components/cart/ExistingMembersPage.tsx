import React, { useState, useEffect } from 'react';

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

  return (
    <div>
      <h1>Existing Members</h1>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email Address</th>
            <th>Phone Number</th>
            <th>Access Type</th>
          </tr>
        </thead>
        <tbody>
          {existingMembers.map(member => (
            <tr key={member.id}>
              <td>{member.firstName}</td>
              <td>{member.lastName}</td>
              <td>{member.emailAddress}</td>
              <td>{member.phoneNumber}</td>
              <td>{member.accessType}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExistingMembersPage;
