import { Tabs } from 'expo-router';
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
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: '#6c47ff',
        },
        headerTintColor: '#fff',
      }}>
      <Tabs.Screen
        name="home"
        options={{
          headerTitle: 'Home',
          tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" size={size} color={color} />,
          tabBarLabel: 'Home',
        }}
        redirect={!isLoggedIn}
      />
      <Tabs.Screen
        name="editInventory"
        options={{
          headerTitle: 'Edit inventory',
          tabBarIcon: ({ color, size }) => <Ionicons name="person-outline" size={size} color={color} />,
          tabBarLabel: 'My Profile',
          headerRight: () => <LogoutButton />,
        }}
        redirect={!isLoggedIn}
      />
    </Tabs>
  );
};

export default TabsPage;