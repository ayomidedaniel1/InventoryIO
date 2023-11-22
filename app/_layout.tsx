import { SplashScreen, Stack } from "expo-router";
import { useEffect } from 'react';

import {
  EncodeSansSemiCondensed_100Thin,
  EncodeSansSemiCondensed_200ExtraLight,
  EncodeSansSemiCondensed_300Light,
  EncodeSansSemiCondensed_400Regular,
  EncodeSansSemiCondensed_500Medium,
  EncodeSansSemiCondensed_600SemiBold,
  EncodeSansSemiCondensed_700Bold,
  EncodeSansSemiCondensed_800ExtraBold,
  EncodeSansSemiCondensed_900Black,
  useFonts,
} from '@expo-google-fonts/encode-sans-semi-condensed';
import { AuthProvider } from "../contexts/authContext";
import { RootSiblingParent } from "react-native-root-siblings";

export default function Layout() {

  const [loaded, error] = useFonts({
    EncodeSansSemiCondensed_100Thin,
    EncodeSansSemiCondensed_200ExtraLight,
    EncodeSansSemiCondensed_300Light,
    EncodeSansSemiCondensed_400Regular,
    EncodeSansSemiCondensed_500Medium,
    EncodeSansSemiCondensed_600SemiBold,
    EncodeSansSemiCondensed_700Bold,
    EncodeSansSemiCondensed_800ExtraBold,
    EncodeSansSemiCondensed_900Black,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <RootSiblingParent>
      <AuthProvider>
        <Stack screenOptions={{ headerStyle: { backgroundColor: '#6c47ff', }, headerTitle: '', }} />
      </AuthProvider>
    </RootSiblingParent>
  );
}
