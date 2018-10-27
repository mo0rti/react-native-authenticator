const DEV_URL = "https://mywebsite.com/endpoint/";
const PROD_URL = "https://mywebsite.com/endpoint/";

const URL = (__DEV__) ? DEV_URL : PROD_URL;
const CLIENT_ID = '572236995712-oodp2kqsob1l7qbt5cpiq2pcmpa5cua1.apps.googleusercontent.com';

const AUTH_FLOW = {
  NONE: 'none',
  OAUTH2: 'oauth2'
}

const AUTHORIZE_TYPE = {
  AUTH0: 'auth0',
  IDENTITY_SERVER: 'indentity-server'
}

export default {
  URL,
  CLIENT_ID,
  AUTHORIZE_TYPE,
  AUTH_FLOW
}