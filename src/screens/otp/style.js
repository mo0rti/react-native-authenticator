import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  logout: {
    width: '100%',
    height: 50,
    position: 'absolute',
    alignItems: 'center',
    bottom: 0,
    backgroundColor: 'transparent',
  },
  remainingTime: {
    position: 'absolute',
    alignSelf: 'center'
  },
  progressPanel: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  circles: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progress: {
    margin: 10,
  },
});

export default styles;
