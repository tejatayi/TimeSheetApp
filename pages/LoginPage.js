import {
  TextInput,
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { SignupPage } from "./SignupPage";
import StripedBackground from "./Stripedbackgroundsvg";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { SignIn } from "./FirebaseAuth";
export default function LoginPage({ navigation }) {
  const [email, setID] = useState("");
  const [password, setpassword] = useState("");

  return (
    <View style={styles.MainContainer}>
      <StripedBackground stripeWidth={90}></StripedBackground>
      <View style={styles.intro_container}>
        <Text style={styles.introduction}>
          Welcome to Timesheets KFC Porirua
        </Text>
      </View>
      <View style={styles.FormContainer}>
        <TextInput
          placeholder="User Id"
          style={styles.input}
          onChangeText={setID}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={styles.input}
          onChangeText={setpassword}
        />

        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={async () => {
              const role = await SignIn(email, password);
              console.log("Role : ", role);
              if (role === "ADMIN") {
                navigation.navigate("AdminHomePage");
              } else if (role === "USER") {
                navigation.navigate("UserHomePage");
              } else {
                alert("User Not Found");
              }
            }}
          >
            <Text style={styles.buttonText}>Signin</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signupContainer}>
          <Text>NewUser ?</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("SignupPage")}
          >
            <Text style={styles.buttonText}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  intro_container: {
    paddingBottom: 20,
  },
  MainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  FormContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  introduction: {
    border: "black",
    textAlign: "center",
  },

  FormContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
  signupContainer: {
    flexDirection: "row",
  },
});
