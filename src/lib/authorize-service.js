import Auth0 from 'react-native-auth0';
import CONSTANTS from "@Lib/constants";
import settings from "@Lib/settings";
import { storeData, retrieveData } from "@Lib/storage";

export const authorize = (authorizeType) => {
  switch (authorizeType) {
    case CONSTANTS.AUTHORIZE_TYPE.AUTH0: {
      return new Promise((resolve, reject) => {
        _auth0().then(credentials => {
          resolve(credentials);
        }, error => {
          reject(error);
        })
      });
    }
    case CONSTANTS.AUTHORIZE_TYPE.IDENTITY_SERVER: {
      return new Promise((resolve, reject) => {
        _identityServer().then(credentials => {
          resolve(credentials);
        }, error => {
          reject(error);
        })
      });
    }
    default: return Promise.reject("AUTHORIZE_TYPE is unknown");
  }
}

export const checkIfAuthorizedBefore = async () => {
  let data = await retrieveData();
  return Promise.resolve(data.token != "");
}

const auth0 = new Auth0(settings.authorizeServersSetting.auth0.credential);
const _auth0 = () => auth0.webAuth.authorize(settings.authorizeServersSetting.auth0.consent);

const _identityServer = () => auth0.webAuth.authorize(settings.authorizeServersSetting.auth0.consent); 
