import {
  TextInput,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { SignUp } from "./FirebaseAuth";

export default function SignupPage({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const signUp = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("sucessful");
    } catch (error) {
      console.error("failed", error.message);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.stripesContainer}>
        <View style={styles.stripe} />
        <View style={styles.stripe} />
      </View>
      <TextInput style={styles.inputFields} placeholder="Name"></TextInput>
      <TextInput
        style={styles.inputFields}
        placeholder="Email"
        onChangeText={setEmail}
      ></TextInput>
      <TextInput
        style={styles.inputFields}
        placeholder="Employee ID"
      ></TextInput>
      <TextInput
        style={styles.inputFields}
        placeholder="Password"
        onChangeText={setpassword}
        secureTextEntry={true}
        autoCapitalize="none"
        autoCorrect={false}
      ></TextInput>

      <TouchableOpacity
        style={styles.signupButton}
        onPress={() => SignUp(email, password)}
      >
        <Text style={styles.buttonText}>SignUp</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B22222",
    alignItems: "center",
    justifyContent: "center",
  },
  inputFields: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 35,
    width: "95%",
    borderWidth: 1.3,
    fontWeight: "bold",
  },
  signupButton: {
    alignItems: "center",
    marginTop: 30,
  },
  buttonText: {
    fontSize: 15,
  },
  stripesContainer: {
    position: "absolute",
    top: 0,
    right: 20,
    height: "100%",
    width: "20%", // Limit width for the stripes area
    flexDirection: "row",
    justifyContent: "space-between",
  },
  stripe: {
    width: "40%", // Stripes take the full width of the stripe container
    height: "100%", // Each stripe occupies 20% height
    backgroundColor: "white",
    marginBottom: 100, // Space between stripes
  },
});
