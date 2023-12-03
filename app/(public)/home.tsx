import { Image } from "expo-image";
import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  ScrollView,
} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { Link } from "expo-router";

import EmptyInventory from "../../components/EmptyInventory";
import { LogoutButton } from "../../components/LogoutButton";
import TopHeader from "../../components/TopHeader";
import { useInventoryContext } from "../../contexts/inventoryContext";

const { width } = Dimensions.get('screen');

const HomeScreen: React.FC = () => {
  const { inventory } = useInventoryContext();
  console.log(inventory);

  return (
    <View style={styles.container}>
      <TopHeader />

      <View style={styles.topHeader}>
        <View style={styles.topContent}>
          <Text style={styles.io}>InventoryIO</Text>

          <LogoutButton />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100, }} style={styles.scrollview}>
        {(inventory && inventory.length > 0) && (
          <Link href={'/(public)/createInventory'} asChild>
            <Pressable style={styles.ctaAdd}>
              <Text style={styles.ctaText}>Add item to inventory</Text>
              <MaterialIcons name="keyboard-arrow-right" size={18} color="#000" />
            </Pressable>
          </Link>
        )}

        {(inventory && inventory.length > 0) ? (
          <Text>Inventory Items</Text>
        ) : (
          <EmptyInventory />
        )}
      </ScrollView>

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
    paddingTop: 60,
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
    fontStyle: 'italic',
  },
  topHeader: {
    position: 'absolute',
    top: 50,
    width: width,
  },
  topContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  scrollview: {
    paddingHorizontal: 20,
  },
  ctaAdd: {
    width: width,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 20,
  },
  ctaText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#6B5E5E',
    textDecorationLine: 'underline',
  },
});
