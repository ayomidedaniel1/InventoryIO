import { StatusBar } from "expo-status-bar";
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  TextInput,
  Dimensions,
  Pressable,
  ToastAndroid,
} from "react-native";
import { useState } from "react";
import { MaterialIcons } from '@expo/vector-icons';
import { router } from "expo-router";

import TopHeader from "../../components/TopHeader";
import { InventoryItem, useInventoryContext } from "../../contexts/inventoryContext";
import { useAuthContext } from "../../contexts/authContext";

const { width } = Dimensions.get('screen');

const CreateInventoryScreen: React.FC = () => {
  const { addInventory } = useInventoryContext();
  const { user } = useAuthContext();

  const [name, setName] = useState<string>('');
  const [totalStock, setTotalStock] = useState<number>();
  const [price, setPrice] = useState<number>();
  const [description, setDescription] = useState<string>('');

  const handleAddInventory = () => {
    if (name && totalStock && price && description) {
      const payload: InventoryItem = {
        userId: user?.email || '',
        name: name,
        totalStock: totalStock || 0,
        price: price || 0,
        description: description,
      };

      addInventory(payload);
      ToastAndroid.show('You have successfully added an item to your inventory', ToastAndroid.SHORT);
      router.push('/home');
    } else {
      ToastAndroid.show('You have to fill the form in order to add item to inventory', ToastAndroid.SHORT);
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

          <Text style={styles.io}>Create Inventory</Text>
        </View>
      </View>

      <Text style={styles.header}>Add items to your inventory</Text>

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
          />
        </View>

        <TouchableOpacity style={styles.addInventory} activeOpacity={0.8} onPress={handleAddInventory}>
          <Text style={styles.ctaText}>Login</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style={'auto'} backgroundColor='#6c47ff' />
    </View>
  );
};

export default CreateInventoryScreen;

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
  }
});
