import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  FC,
  ReactNode,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type User = {
  username: string;
};

type AuthContextType = {
  user: User | null;
  loading: boolean;
  login: (user: User) => void;
  logout: () => void;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const authContext = createContext<AuthContextType | null>(null);

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('user');

        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error("Error retrieving user ", error);
      } finally {
        setLoading(false);
      }
    };

    checkUser();
  }, []);

  const login = (newUser: User) => {
    setUser(newUser);
    AsyncStorage.setItem("user", JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    AsyncStorage.removeItem("user");
  };

  const contextValue: AuthContextType = {
    user,
    loading,
    login,
    logout,
  };

  return (
    <authContext.Provider value={contextValue}>
      {children}
    </authContext.Provider>
  );
};