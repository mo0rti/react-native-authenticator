import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (data) => {
  try {
    return await AsyncStorage.setItem('data', JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
}

export const retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem('data');
    if (value !== null) {
      return Promise.resolve(JSON.parse(value));
    } else
      return Promise.resolve({ token: '', secret: '' });
  } catch (error) {
    console.log(error);
  }
}
