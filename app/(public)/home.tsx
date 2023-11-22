import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet } from "react-native";
import TopHeader from "../../components/TopHeader";

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <TopHeader />

      <Text>
        Home Screen
      </Text>

      <StatusBar style={'auto'} backgroundColor='#6c47ff' />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
});
