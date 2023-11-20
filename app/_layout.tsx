import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { Slot, SplashScreen, useSegments, useRouter } from 'expo-router';
import { useEffect } from 'react';

import { useAuthContext } from '../contexts/authContext';

SplashScreen.preventAutoHideAsync();

const InitialLayout = () => {
  const { loading, isLoggedIn, } = useAuthContext();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) return;

    const inTabsGroup = segments[0] === '(auth)';

    console.log('User changed: ', isLoggedIn);

    if (isLoggedIn && !inTabsGroup) {
      router.replace('/home');
    } else if (!isLoggedIn) {
      router.replace('/login');
    }
  }, [isLoggedIn]);

  return <Slot />;
};

export const RootLayout = () => {
  return <InitialLayout />;
};
