import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { useState, useEffect } from "react";
import UserHomePage from "./pages/UserHomePage";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./pages/FirebaseAuth";
import AdminHomePage from "./pages/AdminHomePage";

const AuthStackNavigator = createNativeStackNavigator();

function SignedOutStack() {
  return (
    <AuthStackNavigator.Navigator initialRouteName="LoginPage">
      <AuthStackNavigator.Screen
        name="LoginPage"
        component={LoginPage}
        options={{ headerShown: false }}
      />
      <AuthStackNavigator.Screen
        name="SignupPage"
        component={SignupPage}
        options={{ headerShown: false }}
      />
    </AuthStackNavigator.Navigator>
  );
}

const AppStackNavigator = createNativeStackNavigator();
function SignedInStack() {
  return (
    <AppStackNavigator.Navigator>
      <AppStackNavigator.Screen
        name="UserHomePage"
        component={UserHomePage}
        options={{ headerShown: false }}
      />
      <AppStackNavigator.Screen
        name="AdminHomePage"
        component={AdminHomePage}
        options={{ headerShown: false }}
      />
    </AppStackNavigator.Navigator>
  );
}
export default function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Use the imported onAuthStateChanged from "firebase/auth"
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Auth state changed:", currentUser); // Debug log
      setUser(currentUser);
      if (initializing) {
        setInitializing(false);
      }
    });

    // Cleanup the listener on unmount
    return unsubscribe;
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer>
      {user ? <SignedInStack /> : <SignedOutStack />}
    </NavigationContainer>
  );
}
