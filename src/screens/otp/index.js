import React, { Component } from "react";
import Content from "./Content";
import OTP from "@Lib/otp";
import settings from "@Lib/settings";
import { retrieveData } from "@Lib/storage";

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      authCode: 0,
      secretKey: ''
    };
  }

  componentDidMount() {
    retrieveData().then((data) => {
      console.log(data);
      this.setState({ secretKey: data.secret }, () => {
        this.startTheTimer();
      });
    });
  }

  _generateNewCode = () => {
    let options = { ...settings.otp.options, secret: this.state.secretKey };
    console.log(options);
    let otp = OTP(options);
    // HOTP: let newAuthCode = otp.hotp(`pas the counter here`);
    let newAuthCode = otp.totp();
    this.setState({ ...this.state, authCode: newAuthCode });
  }

  startTheTimer() {
    this._generateNewCode();
    let remainingTime = settings.otp.options.timeSlice;
    setInterval(() => {
      remainingTime -= 1;
      if (remainingTime <= 0) {
        this._generateNewCode();
        remainingTime = settings.otp.options.timeSlice;
      }

      this.setState({ progress: 100 - (100 * remainingTime / settings.otp.options.timeSlice) });
    }, 1000);
  }

  render() {
    let { progress, authCode } = this.state;
    return (
      <Content progress={progress} authCode={authCode} />
    );
  }
}

export default Home;