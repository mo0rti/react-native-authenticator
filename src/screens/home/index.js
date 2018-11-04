import React, { Component } from "react";
import Content from "./Content";
import { storeData } from "@Lib/storage";

class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      type: 'none',
      secretKey: ''
    };
  }

  _onItemClicked = (type) => {
    this.setState({ type });

    if (type == 'barcode')
      this.props.navigation.navigate('Barcode');
    else {
      //this.setState({ enter });
    }
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
    }).then(() => this.props.navigation.navigate('Otp'));
  }

  render() {
    let { type, secretKey } = this.state;
    return (
      <Content
        type={type}
        onItemClicked={this._onItemClicked}
        secretKey={secretKey}
        onChangeText={this._onChangeText}
        onAddKeyButtonClick={this._onAddKeyButtonClick} />
    );
  }
}

export default HomeScreen;