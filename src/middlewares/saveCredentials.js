import AsyncStorage from "@react-native-community/async-storage";

export const saveCredentialsInStorage = async (creds) => {
  console.debug("[saveCredentialsInStorage]");
  try {
    await AsyncStorage.setItem("token", JSON.stringify(creds)); // save to device
  } catch (error) {
    console.error("AsyncStorage error: ", error);
  }
};

export const getCredsFromStorage = async () => {
  console.debug("[getCredsFromStorage]");
  try {
    const creds = await AsyncStorage.getItem("token");
    console.debug("[getCredsFromStorage]", creds);

    return JSON.parse(creds);
  } catch (error) {
    console.error("Get credentials error: ", error);
  }
};

export const removeCredsFromStorage = async () => {
  console.debug("[removeCredsFromStorage]");

  try {
    await AsyncStorage.removeItem("token");
  } catch (error) {
    console.error("Get credentials error: ", error);
  }
};
