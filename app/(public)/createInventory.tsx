import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet } from "react-native";
import TopHeader from "../../components/TopHeader";

const CreateInventoryScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <TopHeader />

      <Text>
        Create Inventory Screen
      </Text>

      <StatusBar style={'auto'} backgroundColor='#6c47ff' />
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
