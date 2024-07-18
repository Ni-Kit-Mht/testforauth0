import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Auth0ProviderWithHistory from './Auth0ProviderWithHistory';

const App: React.FC = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {!isAuthenticated && (
              <li>
                <button onClick={() => loginWithRedirect()}>Log in</button>
              </li>
            )}
            {isAuthenticated && (
              <>
                <li>
                  <span>{user?.name}</span>
                </li>
                <li>
                  <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log out</button>
                </li>
              </>
            )}
          </ul>
        </nav>

        <Routes>
          <Route path="/">
            <Home />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

const Home: React.FC = () => {
  const { isAuthenticated, user } = useAuth0();

  return (
    <div>
      <h2>Home</h2>
      {isAuthenticated ? (
        <p>Welcome, {user?.name}!</p>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
};

const WrappedApp: React.FC = () => {
  return (
    <Auth0ProviderWithHistory>
      <App />
    </Auth0ProviderWithHistory>
  );
};

export default WrappedApp;
