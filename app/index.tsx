import { useEffect } from "react";
import { useRootNavigationState } from "expo-router";
import { useRouter, useSegments } from "expo-router";
import { useAuthContext } from "../contexts/authContext";
import { ActivityIndicator, View } from 'react-native';

const Index = () => {
  const { isLoggedIn } = useAuthContext();
  const segments = useSegments();
  const router = useRouter();
  const navigationState = useRootNavigationState();

  useEffect(() => {
    if (!navigationState?.key) return;

    const inAuthGroup = segments[0] === "(auth)";

    if (!isLoggedIn && !inAuthGroup) {
      router.replace("/login");
    } else if (isLoggedIn) {
      router.replace("/(public)/home");
    }
  }, [isLoggedIn, segments, navigationState?.key]);

  return (
    <View style={{ flex: 1 }}>
      {!navigationState?.key ? (
        <ActivityIndicator size={'large'} color={'#0000ff'} />
      ) : <></>}
    </View>
  );
};

export default Index;