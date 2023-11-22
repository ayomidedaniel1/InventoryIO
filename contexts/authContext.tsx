import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  FC,
  ReactNode,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type User = {
  email: string;
};

type AuthContextType = {
  user: User | null;
  isLoggedIn: boolean;
  loading: boolean;
  login: (user: User) => void;
  logout: () => void;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextType>(
  undefined as never
);

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    setLoading(true);
    try {
      const isUserLoggedIn = await AsyncStorage.getItem('isLoggedIn');
      const storedUser = await AsyncStorage.getItem('user');

      if (isUserLoggedIn !== null && storedUser) {
        setIsLoggedIn(true);
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Error retrieving user ", error);
    } finally {
      setLoading(false);
    }
  };

  const login = (newUser: User) => {
    AsyncStorage.setItem("isLoggedIn", 'true');
    AsyncStorage.setItem("user", JSON.stringify(newUser));
    setIsLoggedIn(true);
    setUser(newUser);
  };

  const logout = () => {
    setUser(null);
    AsyncStorage.removeItem("isLoggedIn");
    AsyncStorage.removeItem("user");
    setIsLoggedIn(false);
  };

  const contextValue: AuthContextType = {
    user,
    loading,
    isLoggedIn,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuthContext(): AuthContextType {
  return useContext(AuthContext);
}