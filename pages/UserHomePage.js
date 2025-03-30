// Page1.js
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { signOut } from "firebase/auth";
import { auth } from "./FirebaseAuth"; // Adjust import based on your Firebase setup

export default function UserHomePage({ navigation }) {
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      // The global auth listener in App.js will detect the sign-out and switch stacks
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to User HomePage</Text>
      <Button title="Sign Out" onPress={handleSignOut} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
