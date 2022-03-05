import React from "react";
import { Text, View, TouchableOpacity } from 'react-native';
import { RNCamera } from "react-native-camera";
import { IconText } from '@Components';
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

const Layout = ({ setCameraRef, onBarCodeRead, camera, maskColWidth, maskRowHeight, back }) =>

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
      androidCameraPermissionOptions={{
        title: 'Permission to use camera',
        message: 'We need your permission to use your camera phone',
        buttonPositive: 'Ok',
        buttonNegative: 'Cancel',
      }}

      style={styles.preview}
      type={camera.type}
      captureAudio={false}
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
    <TouchableOpacity onPress={back} style={styles.backButton}>
      <IconText textColor="white" title='Back' iconName='log-out' />
    </TouchableOpacity>
  </View>

export default Layout;
