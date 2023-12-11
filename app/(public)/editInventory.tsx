import { MaterialIcons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Toast from 'react-native-simple-toast';

import TopHeader from "../../components/TopHeader";
import { useAuthContext } from "../../contexts/authContext";
import { InventoryItem, useInventoryContext } from "../../contexts/inventoryContext";
import DeleteInventory from '../../components/DeleteInventory';

const { width } = Dimensions.get('screen');

const EditInventoryScreen: React.FC = () => {
  const { editInventory, inventory, deleteInventory } = useInventoryContext();
  const { user } = useAuthContext();

  const local = useLocalSearchParams();
  const initialName = local.name ? local.name.toString() : '';
  const initialTotalStock = local.totalStock ? parseInt(local.totalStock.toString(), 10) : undefined;
  const initialPrice = local.price ? parseInt(local.price.toString(), 10) : undefined;
  const initialDescription = local.description ? local.description.toString() : '';

  const [name, setName] = useState<string>(initialName);
  const [totalStock, setTotalStock] = useState<number | undefined>(initialTotalStock);
  const [price, setPrice] = useState<number | undefined>(initialPrice);
  const [description, setDescription] = useState<string>(initialDescription);

  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const handleEditInventory = () => {
    if (name && totalStock && price && description) {
      const payload: InventoryItem = {
        userId: user?.email || '',
        name: name,
        totalStock: totalStock || 0,
        price: price || 0,
        description: description,
      };

      const tempInventory = inventory.find(item => item.name === local.name);

      if (tempInventory) {
        editInventory(tempInventory.name, payload);
        Toast.show('You have edited this item successfully', Toast.SHORT);
        router.push('/home');
      } else {
        Toast.show('Item not found in inventory', Toast.SHORT);
      }
    } else {
      Toast.show('You have to fill the form in order to save the item to inventory', Toast.SHORT);
    }
  };

  const handleDeleteInventory = () => {
    const tempInventory = inventory.find(item => item.name === local.name);
    if (tempInventory) {
      const itemName = Array.isArray(local.name) ? local.name[0] : local.name;
      deleteInventory(itemName);
      Toast.show('Item deleted successfully', Toast.SHORT);
      setModalVisible(!modalVisible);
      router.push('/home');
    } else {
      Toast.show('Item not found in inventory', Toast.SHORT);
    }
  };

  return (
    <View style={styles.container}>
      <TopHeader />

      <View style={styles.topHeader}>
        <View style={styles.topContent}>
          <Pressable onPress={() => router.back()} style={styles.pressable}>
            <MaterialIcons name="keyboard-backspace" size={24} color="#FFF" style={{ marginLeft: 20, }} />
          </Pressable>

          <Text style={styles.io}>Edit Inventory</Text>
        </View>
      </View>

      <Text style={styles.header}>Edit this item in your inventory</Text>

      <View style={styles.formContainer}>

        <View style={styles.inputContainer}>
          <Text style={styles.inputContainerContent}>Item Name</Text>

          <TextInput
            style={styles.textInput}
            selectionColor={'#A6A6A6'}
            onChangeText={setName}
            placeholder={'Your item name'}
            keyboardType="default"
            placeholderTextColor="#A6A6A6"
            defaultValue={local?.name?.toString() || ''}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputContainerContent}>Total Stock</Text>

          <TextInput
            style={styles.textInput}
            selectionColor={'#A6A6A6'}
            onChangeText={(text) => setTotalStock(text === '' ? undefined : parseInt(text, 10))}
            placeholder={"Your item's total stock"}
            keyboardType="numeric"
            placeholderTextColor="#A6A6A6"
            defaultValue={local.totalStock ? local.totalStock.toString() : ''}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputContainerContent}>Item Price</Text>

          <TextInput
            style={styles.textInput}
            selectionColor={'#A6A6A6'}
            onChangeText={(text) => setPrice(text === '' ? undefined : parseInt(text, 10))}
            placeholder={"Your item's price"}
            keyboardType="numeric"
            placeholderTextColor="#A6A6A6"
            defaultValue={local.price ? local.price.toString() : ''}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputContainerContent}>Item Description</Text>

          <TextInput
            style={styles.textInput}
            selectionColor={'#A6A6A6'}
            onChangeText={setDescription}
            placeholder={"Describe your item"}
            keyboardType="default"
            placeholderTextColor="#A6A6A6"
            defaultValue={local?.description?.toString() || ''}
          />
        </View>

        <TouchableOpacity style={styles.addInventory} activeOpacity={0.8} onPress={handleEditInventory}>
          <Text style={styles.ctaText}>Save</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.deleteInventory} activeOpacity={0.8} onPress={() => setModalVisible(true)}>
          <Text style={styles.deleteText}>Delete Item</Text>
        </TouchableOpacity>
      </View>

      <DeleteInventory
        title={'Delete Item'}
        content={'Are you sure you want to delete this item from your inventory?'}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        onDelete={handleDeleteInventory}
      />

      <StatusBar style={'auto'} backgroundColor='#6c47ff' />
    </View>
  );
};

export default EditInventoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: 60,
  },
  pressable: {
    height: '100%',
    width: 100,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  topHeader: {
    position: 'absolute',
    top: 50,
    width: width,
  },
  topContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  io: {
    fontSize: 24,
    marginRight: 20,
    fontWeight: "800",
    color: '#FFF',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  header: {
    color: '#606060',
    fontSize: 16,
    textAlign: 'center',
    marginTop: -20,
    marginBottom: 10,
    fontWeight: '600',
  },
  formContainer: {
    flexDirection: 'column',
  },
  inputContainer: {
    marginHorizontal: 20,
    marginTop: 14,
    marginBottom: 8
  },
  inputContainerContent: {
    fontWeight: '600',
    color: '#000',
    paddingBottom: 8,
  },
  textInput: {
    color: '#A6A6A6',
    fontWeight: '500',
    backgroundColor: '#F9F9F9',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#CCC9C9',
    fontSize: 15,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  addInventory: {
    backgroundColor: '#0386D0',
    borderRadius: 27,
    width: 151,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 52,
    alignSelf: 'center',
  },
  ctaText: {
    color: '#FFF',
    fontSize: 14,
  },
  deleteInventory: {
    backgroundColor: 'red',
    borderRadius: 6,
    width: 112,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
    alignSelf: 'center',
  },
  deleteText: {
    color: '#FFF',
    fontSize: 14,
  },
});
