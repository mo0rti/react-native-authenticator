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
      keySize: 32,
      codeLength: 6,
      secret: 'RLP2WJA7RXJVAZZX74LJUOIOFBFMMA6H',
      epoch: 0,
      timeSlice: 60
    }
  }
};
