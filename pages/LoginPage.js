import {
  TextInput,
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import { SignupPage } from "./SignupPage";

export default function LoginPage({ navigation }) {
  return (
    <View style={styles.container}>
      <TextInput placeholder="User Email" style={styles.input} />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        style={styles.input}
      />

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Signin</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("SignupPage")}
        >
          <Text style={styles.buttonText}>SignUp</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },

  input: {
    width: 250,
    height: 40,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#ff1f1f",
    paddingHorizontal: 10,
    borderRadius: 8,
    marginBottom: 10,
    color: "black", // Ensure text is visible in input field
  },
  buttonsContainer: {
    backgroundColor: "white",
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "black",
  },
  button: {
    borderRadius: 18,
    padding: 2,
    marginLeft: 10,
    marginRight: 10,
  },
  buttonText: {
    color: "white",
  },
});
