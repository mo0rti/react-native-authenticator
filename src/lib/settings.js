import CONSTANTS from "@Lib/constants";

export default {
  authFlowType: CONSTANTS.AUTH_FLOW.NONE,
  authorizeServersSetting: {
    auth0: {
      credential: { domain: 'mortitotti.auth0.com', clientId: 'ObQ5dKtrHSqTfaLD5ZKfJDR3mpEC7Bbc' },
      consent: { scope: 'openid profile email', audience: 'https://mortitotti.auth0.com/userinfo' }
    },
    indentityServer: { scope: 'openid profile email', audience: 'https://mortitotti.auth0.com/userinfo' }
  },
  otp: {
    options: {
      name: 'SSP',
      keySize: 32,    // secret key is 32 characters long
      codeLength: 6,  // authentication code is 6 digits long
      epoch: 0,
      timeSlice: 60   // each code is valid for 60 seconds
    }
  }
};
