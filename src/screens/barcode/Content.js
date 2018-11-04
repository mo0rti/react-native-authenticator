import React from "react";
import { Text, View, TouchableOpacity } from 'react-native';
import { RNCamera } from "react-native-camera";
import styles from "./style";

const PendingView = () =>
  <View
    style={{
      flex: 1,
      backgroundColor: 'lightgreen',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Text>Waiting</Text>
  </View>

const Content = ({ setCameraRef, onBarCodeRead, camera, maskColWidth, maskRowHeight }) =>

  <View style={styles.container}>
    <RNCamera
      ref={setCameraRef}
      barcodeFinderVisible={camera.barcodeFinderVisible}
      barcodeFinderWidth={280}
      barcodeFinderHeight={220}
      barcodeFinderBorderColor="white"
      barcodeFinderBorderWidth={2}
      defaultTouchToFocus
      flashMode={camera.flashMode}
      mirrorImage={false}
      onBarCodeRead={onBarCodeRead}
      onFocusChanged={() => { }}
      onZoomChanged={() => { }}
      permissionDialogTitle={'Permission to use camera'}
      permissionDialogMessage={'We need your permission to use your camera phone'}
      style={styles.preview}
      type={camera.type}
    />
    <View style={styles.maskOutter}>
      <View style={[{ flex: maskRowHeight }, styles.maskRow, styles.maskFrame]} />
      <View style={[{ flex: 30 }, styles.maskCenter]}>
        <View style={[{ width: maskColWidth }, styles.maskFrame]} />
        <View style={styles.maskInner} />
        <View style={[{ width: maskColWidth }, styles.maskFrame]} />
      </View>
      <View style={[{ flex: maskRowHeight }, styles.maskRow, styles.maskFrame]} />
    </View>

    <View style={[styles.overlay, styles.topOverlay]}>
      <Text style={styles.scanScreenMessage}>Please scan the barcode.</Text>
    </View>
  </View>

export default Content;
