import { StatusBar } from "expo-status-bar";
import { Text, View, Platform, StyleSheet } from "react-native";

const CreateInventoryScreen = () => {
  return (
    <View style={styles.container}>
      <Text>
        Login Screen
      </Text>

      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
};

export default CreateInventoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
