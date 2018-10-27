import React from "react";
import { Text, View, TouchableOpacity } from 'react-native';
import styles from "./style";

const Content = () =>
  <View style={styles.container}>
    <TouchableOpacity>
      <Text style={styles.error}>You are not Authorized</Text>
    </TouchableOpacity>
  </View>

export default Content;