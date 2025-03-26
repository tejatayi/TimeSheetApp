import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_BASE_URL = "http://10.0.2.2:8080";

////-------------API config--------------------------------------------------------
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000, // Request timeout in milliseconds.
  headers: {
    "Content-Type": "application/json",
  },
});
////---------------------------Interceptor to add JWT-----------------------------------------------------

apiClient.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem("firebase_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

////------------------------------------------------------------------
export const createUser = async (userData) => {
  try {
    console.log("User Data set : ", userData);
    const response = await apiClient.post("/users/create", userData);
    console.log(response.data);
    return response.data; // Returns the created user data from the backend.
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};
