import {Security, SecureRoute, ImplicitCallback} from '@okta/okta-react';

const websiteOrigin = 'http://localhost:3000';
const config = {
    issuer: 'https://dev-274294.oktapreview.com/oauth2/default',
    redirectUri: websiteOrigin + '/implicit/callback',
    clientId: '0oacq9o4x1rvieiMk0h7'
}

export {config};