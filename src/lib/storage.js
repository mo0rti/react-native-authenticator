import { AsyncStorage } from "react-native"

export const storeData = async (data) => {
  try {
    await AsyncStorage.setItem('data', JSON.stringify(data));
  } catch (error) {
    // Error saving data
  }
}

export const retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem('data');
    if (value !== null) {
      return Promise.resolve(JSON.parse(value));
    } else
      return Promise.resolve({ token: '', currentAuthCode: '', secret: '' });
  } catch (error) {
    // Error retrieving data
  }
}
