import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 30 :0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  caption: {
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
  itemCaption: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  providerKeyContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  providerKeyInput: {
    width: '70%',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    textAlign: 'center',
    fontSize: 17
  },
  addKeyButton: {
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    padding: 20,
    borderRadius: 15,
    margin: 10
  },
  addKeyButtonCaption: {
    color: 'white',
    fontWeight: 'bold'
  }
});

export default styles;
