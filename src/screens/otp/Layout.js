
import React from "react";
import { Text, View, TouchableOpacity } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { IconText } from '@Components';
import styles from "./style";

const Layout = ({ authCode, progress, remainingTime, logout }) =>
  <View style={styles.container}>
    <TouchableOpacity>
      <Text>Authentication Code</Text>
      <Text style={styles.welcome}>{authCode}</Text>
      <View style={styles.progressPanel}>
        <Text style={styles.remainingTime}>{remainingTime}</Text>
        <AnimatedCircularProgress
          size={120}
          width={15}
          duration={1000}
          fill={progress}
          tintColor="#ffffff"
          backgroundColor="#5892ef" />
      </View>
    </TouchableOpacity>
    <View style={styles.logout}>
      <TouchableOpacity onPress={logout}>
        <IconText title='Logout' iconName='log-out' />
      </TouchableOpacity>
    </View>
  </View>

export default Layout;