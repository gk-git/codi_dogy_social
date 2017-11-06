const AuthenticationClient = require('auth0').AuthenticationClient;

const auth0 = new AuthenticationClient({
    domain: 'dogo.eu.auth0.com',
    clientId: 'yw1WjXLJZ76F3bBo7mn1MfxvOddtGFBt',
    clientSecret: '6wJ6wtlJw2szGwVdTJOwPbZaam1PWXFsVc1pwH-2jp0niD53S8AYG7g0QGaXIKOY'
});

export  {auth0};