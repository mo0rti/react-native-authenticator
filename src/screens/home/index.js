import React, { Component } from "react";
import Content from "./Content";
import OTP from "../lib/otp";

const validTimeInSeconds = 60;

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      authCode: 0
    };
  }

  componentDidMount() {
    this.startTheTimer();
  }

  _generateNewCode = () => {

    let options = {
      name: 'Google',
      keySize: 32,
      codeLength: 6,
      secret: 'ewtnertuifdgdfhgjurterthj',
      epoch: 0,
      timeSlice: 60
    };
    let otp = OTP(options);
    let newAuthCode = otp.totp();

    //let newAuthCode = (Math.random() * 1000000).toFixed();
    this.setState({ ...this.state, authCode: newAuthCode });
  }

  startTheTimer() {
    this._generateNewCode();
    let remainingTime = validTimeInSeconds;
    setInterval(() => {
      remainingTime -= 1;
      if (remainingTime <= 0) {
        this._generateNewCode();
        remainingTime = validTimeInSeconds;
      }

      this.setState({ progress: 100 - (100 * remainingTime / validTimeInSeconds) });
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