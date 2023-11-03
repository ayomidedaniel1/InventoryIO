import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet } from "react-native";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Login Screen
      </Text>

      <StatusBar style={'auto'} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red'
  },
  text: {
    color: 'red'
  }
});
