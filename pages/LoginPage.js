import { TextInput, View, Text, StyleSheet } from "react-native";

export default function LoginPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        This page is working, make sure to do the remaining stuff **"Bitch"**!
      </Text>
      <TextInput placeholder="User Email" style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#060202",
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    color: "white", // Make text visible on dark background
    fontSize: 18,
    marginBottom: 20,
  },
  input: {
    width: 250,
    height: 40,
    borderWidth: 1,
    borderColor: "white",
    paddingHorizontal: 10,
    color: "white", // Ensure text is visible in input field
  },
});
