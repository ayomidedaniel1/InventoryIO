import { useEffect } from "react";
import { useRootNavigationState } from "expo-router";
import { useRouter, useSegments } from "expo-router";
import { useAuthContext } from "../contexts/authContext";
import { View } from 'react-native';
import { Apploader } from "../components/AppLoader";

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
    <View>
      {!navigationState?.key ? <Apploader /> : <></>}
    </View>
  );
};

export default Index;