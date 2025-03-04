import {
  TextInput,
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";

export default function SignupPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.tex}>KFC TIMESHEETS</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
  },
});
