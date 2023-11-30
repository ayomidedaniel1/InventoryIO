import { Image } from "expo-image";
import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  FlatList,
} from "react-native";
import EmptyInventory from "../../components/EmptyInventory";
import { LogoutButton } from "../../components/LogoutButton";
import TopHeader from "../../components/TopHeader";
import { useInventoryContext } from "../../contexts/inventoryContext";

const { width } = Dimensions.get('screen');

const HomeScreen: React.FC = () => {
  // const { inventory } = useInventoryContext();
  // console.log(inventory);

  return (
    <View style={styles.container}>
      <TopHeader />

      <View style={styles.topHeader}>
        <View style={styles.topContent}>
          <Text style={styles.io}>InventoryIO</Text>

          <LogoutButton />
        </View>
      </View>

      {/* {(inventory && inventory.length > 0) ? (
        <Text>Inventory Items</Text>
      ) : (
        <EmptyInventory />
      )} */}

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
    // paddingHorizontal: 20,
    paddingTop: 50,
    position: "relative",
  },
  image: {
    width: 40,
    height: 40,
  },
  io: {
    fontSize: 24,
    marginLeft: 20,
    fontWeight: "800",
    color: '#FFF',
  },
  topHeader: {
    position: 'absolute',
    top: 40,
    width: width,
  },
  topContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
