import React from 'react';
import { useClient } from './useClient'; // Import the useClient hook
import CreateUser from './User/page'; // Import the CreateUserPage component

const ClientCreateUserPage: React.FC = () => {
  useClient(); // Wrap the parent component with useClient hook
  return <CreateUser />;
}

export default ClientCreateUserPage;
