// src/Auth0ProviderWithHistory.tsx
import React, { ReactNode } from 'react';
import { Auth0Provider, Auth0ProviderOptions, AppState } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

interface Auth0ProviderWithHistoryProps {
  children: ReactNode;
}

const Auth0ProviderWithHistory: React.FC<Auth0ProviderWithHistoryProps> = ({ children }) => {
  const navigate = useNavigate();
  const domain = 'dev-bii7xwj0q8um5en2.jp.auth0.com'; 
  const clientId = 'vgWW4ioNxfsWNoGvbfjcVxwyFvca0phn';

  const onRedirectCallback: Auth0ProviderOptions['onRedirectCallback'] = (appState?: AppState) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
