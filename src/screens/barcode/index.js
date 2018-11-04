import React, { Component } from "react";
import Content from "./Content";
import { Dimensions } from "react-native";
import { RNCamera } from "react-native-camera";

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
    if (scanResult.data != null) {
      if (!this.barcodeCodes.includes(scanResult.data)) {
        this.barcodeCodes.push(scanResult.data);
        console.warn('onBarCodeRead call');
      }
    }
    return;
  }

  _setCameraRef = ref => this.camera = ref;

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
      />
    );
  }
}

export default BarcodeScreen;