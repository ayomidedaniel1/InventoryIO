import { MaterialIcons } from '@expo/vector-icons';
import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View
} from "react-native";

import EmptyInventory from "../../components/EmptyInventory";
import { LogoutButton } from "../../components/LogoutButton";
import TopHeader from "../../components/TopHeader";
import { InventoryItem, useInventoryContext } from "../../contexts/inventoryContext";

const { width } = Dimensions.get('screen');

const HomeScreen: React.FC = () => {
  const { inventory } = useInventoryContext();

  const navigateToEditScreen = (data: InventoryItem) => {
    router.push({
      pathname: '/(public)/editInventory', params: {
        userId: data.userId,
        name: data.name,
        price: data.price,
        totalStock: data.totalStock,
        description: data.description,
      }
    });
  };

  return (
    <View style={styles.container}>
      <TopHeader />

      <View style={styles.topHeader}>
        <View style={styles.topContent}>
          <Text style={styles.io}>InventoryIO</Text>

          <LogoutButton />
        </View>
      </View>

      <View style={styles.scrollview}>
        {(inventory && inventory.length > 0) && (
          <Link href={'/(public)/createInventory'} asChild>
            <Pressable style={styles.ctaAdd}>
              <Text style={styles.ctaText}>Add item to inventory</Text>
              <MaterialIcons name="keyboard-arrow-right" size={18} color="#000" />
            </Pressable>
          </Link>
        )}

        {(inventory && inventory.length > 0) ? (
          <FlatList
            alwaysBounceVertical
            showsVerticalScrollIndicator={false}
            data={inventory}
            keyExtractor={(item, index) => item.name + index}
            renderItem={({ item, index }) => (
              <Pressable onPress={() => navigateToEditScreen(item)}>
                <View key={item.name + index} style={styles.listBox}>
                  <Text style={styles.listName}>{item.name}</Text>
                  <Text style={styles.listDesc}>{item.description}</Text>
                  <View style={styles.numbers}>
                    <View style={styles.numbersView}>
                      <Text style={styles.numbersTitle}>Price:</Text>
                      <Text style={styles.listPrice}>${item.price}</Text>
                    </View>
                    <View style={styles.numbersView}>
                      <Text style={styles.numbersTitle}>Total stock:</Text>
                      <Text style={styles.listStock}>{item.totalStock}</Text>
                    </View>
                  </View>
                </View>
              </Pressable>
            )}
          />
        ) : (
          <EmptyInventory />
        )}
      </View>

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
    flex: 1,
  },
  ctaAdd: {
    width: width,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 20,
  },
  ctaText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6B5E5E',
    textDecorationLine: 'underline',
    marginRight: 3,
  },
  listBox: {
    backgroundColor: '#F9F9F9',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  listName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 18,
  },
  listDesc: {
    fontSize: 16,
    color: '#666',
    marginBottom: 12,
  },
  numbersTitle: {
    fontSize: 14,
    fontWeight: '600',
  },
  listPrice: {
    fontSize: 16,
    fontWeight: '500',
    color: '#4CAF50',
  },
  listStock: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2196F3',
  },
  numbers: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  numbersView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
});
