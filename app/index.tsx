import { useEffect } from "react";
import { useRootNavigationState } from "expo-router";
import { useRouter, useSegments } from "expo-router";
import { useAuthContext } from "../contexts/authContext";
import { View, Text } from 'react-native';
import { Apploader } from "../components/AppLoader";

const Index = () => {
  const { loading, isLoggedIn } = useAuthContext();
  const segments = useSegments();
  const router = useRouter();
  const navigationState = useRootNavigationState();

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text>Hello</Text>
    </View>
  );
};

export default Index;