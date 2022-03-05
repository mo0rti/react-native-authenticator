import React, { Component } from "react";
import RootNavigation from "@Navigations/Root-Navigation";
import CONSTANTS from "@Lib/constants";
import settings from "@Lib/settings";
import { authorize, checkIfAuthorizedBefore } from "@Lib/authorize-service";
import UnAuthorizedScreen from '@Screens/unauthorized';

export default class Root extends Component {

      constructor(props) {
        super(props);
        this.state = {
          isAuthorized: false,
          needAuthorizeFlow: settings.authFlowType != CONSTANTS.AUTH_FLOW.NONE
        }
      }

      async componentDidMount() {
        if (settings.authFlowType == CONSTANTS.AUTHORIZE_TYPE.OAUTH2) {
          let isAuthorizedBefore = await checkIfAuthorizedBefore();
          if (!isAuthorizedBefore) {
            authorize(CONSTANTS.AUTHORIZE_TYPE.IDENTITY_SERVER)
              .then(credentials => {
                this.setState({ isAuthorized: true });
                this.setState({ token: JSON.stringify(credentials) });
              })
              .catch(error => {
                console.log(error);
              })
          } else {
            this.setState({ isAuthorized: true });
          }
        }    
      }

    render() {
        const { isAuthorized, needAuthorizeFlow } = this.state;
        return (
            (needAuthorizeFlow && !isAuthorized) ?
                <UnAuthorizedScreen />
                :
                <RootNavigation />
        );
    }
}
