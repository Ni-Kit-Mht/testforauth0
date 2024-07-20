// src/App.tsx

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const App: React.FC = () => {
  const { loginWithRedirect, logout, isAuthenticated, user, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>My App</h1>
      {!isAuthenticated ? (
        <button onClick={() => loginWithRedirect()}>Log In</button>
      ) : (
        <div>
          <button onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>
          <h2>Welcome, {user?.name}</h2>
        </div>
      )}
    </div>
  );
};

export default App;
