import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
} from "react-native";
import TopHeader from "../../components/TopHeader";
import { useState } from "react";

const CreateInventoryScreen: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [totalStock, setTotalStock] = useState<number>();
  const [price, setPrice] = useState<number>();
  const [description, setDescription] = useState<string>('');

  return (
    <View style={styles.container}>
      <TopHeader />

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputContainerContent}>Email</Text>

          <TextInput
            style={styles.textInput}
            selectionColor={'#C4C4C4'}
            onChangeText={setName}
            placeholder={'Enter your Email'}
            keyboardType="default"
            placeholderTextColor="#C4C4C4"
          />
        </View>
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
    paddingHorizontal: 20,
  },
  formContainer: {
    flexDirection: 'column',
  },
  inputContainer: {
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 8
  },
  inputContainerContent: {
    fontFamily: 'Poppins_600SemiBold',
    color: '#FFFFFF',
    paddingBottom: 8,
  },
  textInput: {
    fontFamily: 'Poppins_500Medium',
    color: '#FFFFFF',
    backgroundColor: '#292E36',
    borderRadius: 6,
    fontSize: 15,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
