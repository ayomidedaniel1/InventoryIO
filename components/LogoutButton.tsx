import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Pressable } from 'react-native';

import { useAuthContext } from "../contexts/authContext";

export const LogoutButton = () => {
  const { logout } = useAuthContext();
  const router = useRouter();

  const doLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <Pressable onPress={doLogout} style={{ marginRight: 10 }}>
      <Ionicons name="log-out-outline" size={32} color={'#fff'} />
    </Pressable>
  );
};