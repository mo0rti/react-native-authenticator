import React from "react";
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import styles from "./style";

const ProvidedKeyLayout = ({ secretKey, onChangeText, onAddKeyButtonClick }) =>
  <View style={styles.providerKeyContainer}>
    <TextInputMask
      style={styles.providerKeyInput}
      type={'custom'}
      options={{
        mask: 'SSSS-SSSS-SSSS-SSSS-SSSS-SSSS-SSSS-SSSS'
      }}
      value={secretKey}
      placeholder="Enter your secret key"
      onChangeText={onChangeText}
    />
    <TouchableOpacity onPress={onAddKeyButtonClick} style={styles.addKeyButton}>
      <Text style={styles.addKeyButtonCaption}>
        Add Key
      </Text>
    </TouchableOpacity>
  </View>


const Content = ({ type, onItemClicked, secretKey, onChangeText, onAddKeyButtonClick }) =>
  <View style={styles.container}>
    <Text style={styles.caption}>You can add an account selecting one of the following options:</Text>
    <TouchableOpacity onPress={() => onItemClicked('barcode')}>
      <Text style={styles.itemCaption}>Scan a barcode</Text>
    </TouchableOpacity>
    {}
    <TouchableOpacity onPress={() => onItemClicked('key')}>
      <Text style={styles.itemCaption}>Enter a provided key</Text>
    </TouchableOpacity>
    {
      (type == "key") ? <ProvidedKeyLayout secretKey={secretKey} onChangeText={onChangeText} onAddKeyButtonClick={onAddKeyButtonClick} /> : null
    }
  </View>

export default Content;