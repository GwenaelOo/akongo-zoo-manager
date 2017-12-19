import auth0 from 'auth0-js';

export default class Auth {
    auth0 = new auth0.WebAuth({
        domain: 'akongo.eu.auth0.com',
        clientID: 'yChlOWW96OyxWZx8QZrE2ZO_v4Z4LiQO',
        redirectUri: 'http://localhost:3000/callback',
        audience: 'https://akongo.eu.auth0.com/userinfo',
        responseType: 'token id_token',
        scope: 'openid'
    });

    login() {
        this.auth0.authorize();
    }
}