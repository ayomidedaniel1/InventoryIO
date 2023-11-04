import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet } from "react-native";

const EditInventoryScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>
        Edit Inventory Screen
      </Text>

      <StatusBar style={'dark'} />
    </View>
  );
};

export default EditInventoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
