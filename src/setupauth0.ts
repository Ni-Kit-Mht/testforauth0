import { Auth0Provider } from '@auth0/auth0-react';

const domain="dev-bii7xwj0q8um5en2.jp.auth0.com"
const clientId="vgWW4ioNxfsWNoGvbfjcVxwyFvca0phn"

const AuthProviderConfig = {
  domain,
  clientId,
  redirectUri: window.location.origin,
};

export const Auth0ProviderWithHistory = ({ children }: { children: React.ReactNode }) => {
  return (
    <Auth0Provider {...AuthProviderConfig}>
      {children}
    </Auth0Provider>
  );
};
