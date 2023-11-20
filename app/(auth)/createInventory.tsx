import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet } from "react-native";

const CreateInventoryScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>
        Create Inventory Screen
      </Text>

      <StatusBar style={'dark'} />
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
