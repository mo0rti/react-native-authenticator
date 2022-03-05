import React, { Component } from "react";
import Layout from "./Layout";
import { retrieveData, storeData } from "@Lib/storage";

class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      type: 'none',
      secretKey: ''
    };
  }

  componentDidMount() {
    retrieveData().then((data) => {
      if (data.secret)
        this.props.navigation.navigate('Otp');
    });
  }

  _onItemClicked = (type) => {
    this.setState({ type });
    if (type == 'barcode')
      this.props.navigation.navigate('Barcode');
  }

  _onChangeText = (secretKey) => {
    this.setState({ secretKey });
  }

  _onAddKeyButtonClick = () => {
    let secretKey = this.state.secretKey.split('-').join('');
    if (secretKey.length < 32) {
      alert('The Secret Key must be 32 characters long');
      return;
    }

    storeData({
      secret: secretKey
    }).then(() => this.setState({ type: 'none', secretKey: '' }, () => this.props.navigation.navigate('Otp')));
  }

  render() {
    const { type, secretKey } = this.state;

    return (
      <Layout
        type={type}
        onItemClicked={this._onItemClicked}
        secretKey={secretKey}
        onChangeText={this._onChangeText}
        onAddKeyButtonClick={this._onAddKeyButtonClick}
      />
    );
  }
}

export default HomeScreen;