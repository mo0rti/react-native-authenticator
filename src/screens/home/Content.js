import React from "react";
import { Text, View } from 'react-native';
import styles from "./style";

const Content = () =>
  <View style={styles.container}>
    <Text style={styles.welcome}>Welcome to Two way hash!</Text>
    <Text style={styles.instructions}>To get started, edit App.js</Text>
    <Text style={styles.instructions}>Instructions</Text>
  </View>

export default Content;