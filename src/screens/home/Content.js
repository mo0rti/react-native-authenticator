import React from "react";
import { Text, View, TouchableOpacity } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import styles from "./style";

const Content = ({ authCode, progress }) =>
  <View style={styles.container}>
    <TouchableOpacity>
      <Text style={styles.welcome}>{authCode}</Text>
      <AnimatedCircularProgress
        size={120}
        width={15}
        duration={1000}
        fill={progress}
        tintColor="#00e0ff"
        backgroundColor="#3d5875"/>
    </TouchableOpacity>
  </View>

export default Content;