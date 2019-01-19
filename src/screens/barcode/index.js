import React, { Component } from "react";
import Content from "./Content";
import { Dimensions } from "react-native";
import { RNCamera } from "react-native-camera";
import { storeData } from "@Lib/storage";

class BarcodeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      camera: {
        type: RNCamera.Constants.Type.back,
        flashMode: RNCamera.Constants.FlashMode.auto,
        barcodeFinderVisible: true
      }
    };
  }

  componentDidMount() {
  }

  _onBarCodeRead = (scanResult) => {
    if (scanResult.data != null && scanResult.type == RNCamera.Constants.BarCodeType.qr) {
      let secretKey = scanResult.data;
      if (secretKey.length < 32) {
        alert('The Secret Key must be 32 characters long');
        return;
      }
  
      storeData({
        secret: secretKey
      }).then(() => this.props.navigation.navigate('Otp'));
    }
  }

  _setCameraRef = ref => this.camera = ref;

  _back = ()=>{
    this.props.navigation.goBack();
  }

  render() {
    let { camera } = this.state;

    const { height, width } = Dimensions.get('window');
    const maskRowHeight = Math.round((height - 300) / 20);
    const maskColWidth = (width - 300) / 2;

    return (
      <Content
        onBarCodeRead={this._onBarCodeRead}
        setCameraRef={this._setCameraRef}
        camera={camera}
        maskRowHeight={maskRowHeight}
        maskColWidth={maskColWidth}
        back={this._back}
      />
    );
  }
}

export default BarcodeScreen;