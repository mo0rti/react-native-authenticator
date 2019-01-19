import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1    
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  overlay: {
    position: 'absolute',
    width:'100%',
    padding: 16,
    alignItems: 'center'
  },
  topOverlay: {
    top: 0,
    justifyContent: 'center'
  },
  scanScreenMessage: {
    fontSize: 14,
    paddingTop: Platform.OS === 'ios' ? 20 :0,
    color: 'white',
    textAlign: 'center'
  },
  maskOutter: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  maskInner: {
    width: 300,
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderWidth: 1,
  },
  maskFrame: {
    backgroundColor: 'rgba(1,1,1,0.6)',
  },
  maskRow: {
    width: '100%',
  },
  maskCenter: { flexDirection: 'row' },
  backButton:{
    position:'absolute',
    top:30,
    left:0,
  }
});

export default styles;
