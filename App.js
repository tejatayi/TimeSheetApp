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

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginPage">
          <Stack.Screen
            name="LoginPage"
            component={LoginPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignupPage"
            component={SignupPage}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
