import { AsyncStorage } from "react-native"

class LocalStorage {
  setItem(key, data) = async () => {
    try {
      await AsyncStorage.setItem(key, data);
      return { ok: true }
    } catch (error) {
      // Error saving data
      return { ok: false, error }
    }
  }
  getItem(key) = async () => {
    try {
      const data = await AsyncStorage.getItem(key);
      if (data !== null) {
        // We have data!!
        return { ok: true, data }
      }
     } catch (error) {
       // Error retrieving data
      return { ok: false, error}
     }
  }
}

export default new LocalStorage();
