import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import { useAuthContext } from '../../contexts/authContext';

export const LogoutButton = () => {
  const { logout } = useAuthContext();

  const doLogout = () => {
    logout();
  };

  return (
    <Pressable onPress={doLogout} style={{ marginRight: 10 }}>
      <Ionicons name="log-out-outline" size={24} color={'#000'} />
    </Pressable>
  );
};

const TabsPage = () => {
  const { isLoggedIn } = useAuthContext();

  return (
    <Stack screenOptions={{ headerShown: false, }}>
      <Stack.Screen name="home" options={{ headerRight: () => <LogoutButton />, }} redirect={!isLoggedIn} />
      <Stack.Screen name="createInventory" options={{ headerRight: () => <LogoutButton />, }} redirect={!isLoggedIn} />
      <Stack.Screen name="editInventory" redirect={!isLoggedIn} />
    </Stack>
  );
};

export default TabsPage;