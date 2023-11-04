import Checkbox from 'expo-checkbox';
import { Image } from "expo-image";
import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet, TextInput, Pressable, TouchableOpacity } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import { Link } from 'expo-router';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string | number>();
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const [isChecked, setChecked] = useState<boolean>(false);

  const managePasswordVisibility = () => {
    setHidePassword(!hidePassword);
  };

  return (
    <View style={styles.container}>

      <Image
        style={styles.image}
        source={require('../assets/images/img/login.png')}
        contentFit="cover"
        transition={1000}
      />

      <View style={styles.contentContainer}>
        <Text style={styles.welcome}>Welcome</Text>

        <Text style={styles.welcomeDetails}>
          By signing in you are agreeing our
        </Text>

        <Text style={styles.welcomeTerms}>
          Term and privacy policy
        </Text>

        <View style={styles.textInput}>
          <TextInput
            placeholder="Email Address"
            placeholderTextColor={'#C4C4C4'}
            style={styles.input}
            keyboardType="email-address"
            selectionColor={'#CCC9C9'}
            onChangeText={setEmail}
          />

          <AntDesign name="mail" color={'#C4C4C4'} size={24} />
        </View>

        <View style={styles.textInput}>
          <TextInput
            placeholder="Email Address"
            placeholderTextColor={'#C4C4C4'}
            style={styles.input}
            keyboardType="default"
            selectionColor={'#CCC9C9'}
            secureTextEntry={hidePassword}
            autoComplete="password"
            returnKeyType="send"
            onChangeText={setPassword}
          />

          <Pressable onPress={managePasswordVisibility}>
            <FontAwesome name={hidePassword ? "lock" : "unlock"} color={'#C4C4C4'} size={24} />
          </Pressable>
        </View>

        <View style={styles.remember}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? '#4630EB' : undefined}
          />

          <Text style={styles.rememberPassword}>Remember Password</Text>
        </View>

        <Link href={"/"} asChild>
          <TouchableOpacity style={styles.login} activeOpacity={0.7}>
            <Text style={styles.textLogin}>Login</Text>
          </TouchableOpacity></Link>
      </View>

      <StatusBar style={'dark'} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  image: {
    width: '100%',
    height: 147,
    marginBottom: 20,
  },
  contentContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  welcome: {
    color: '#000',
    textAlign: 'center',
    fontSize: 21,
    marginVertical: 10,
  },
  welcomeDetails: {
    color: '#000',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 29,
  },
  welcomeTerms: {
    color: '#0386D0',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 29,
    marginBottom: 12,
  },
  textInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 40,
    marginHorizontal: 20,
    marginTop: 20,
    height: 47,
    backgroundColor: '#F9F9F9',
    borderRadius: 9,
    borderWidth: 1,
    borderColor: '#CCC9C9',
  },
  input: {
    color: '#000',
    fontSize: 15,
    width: '100%',
  },
  remember: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  checkbox: {
    marginRight: 8,
  },
  rememberPassword: {
    color: '#6B5E5E',
    fontSize: 14,
    textAlign: 'left',
  },
  login: {
    backgroundColor: '#0386D0',
    borderRadius: 27,
    width: 151,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 52,
    alignSelf: 'center',
  },
  textLogin: {
    color: '#FFF',
    fontSize: 14,
  }
});
