import { Stack } from 'expo-router';
import { LogoutButton } from '../../components/LogoutButton';
import { useAuthContext } from '../../contexts/authContext';

const TabsPage = () => {
  const { isLoggedIn } = useAuthContext();

  return (
    <Stack screenOptions={{ headerShown: false, }}>
      <Stack.Screen name="home" redirect={!isLoggedIn} />
      <Stack.Screen name="createInventory" redirect={!isLoggedIn} options={{ animation: 'fade_from_bottom', presentation: 'modal', }} />
      <Stack.Screen name="editInventory" redirect={!isLoggedIn} options={{ animation: 'fade_from_bottom', presentation: 'modal', }} />
    </Stack>
  );
};

export default TabsPage;