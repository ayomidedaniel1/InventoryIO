import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  FC,
  ReactNode,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuthContext } from "./authContext";

type InventoryItem = {
  name: string;
  totalStock: number;
  price: number;
  description: string;
};

type InventoryContextType = {
  inventory: InventoryItem[];
  addInventory: (item: InventoryItem) => void;
  editInventory: (name: string, newItem: InventoryItem) => void;
  deleteInventory: (name: string) => void;
};

type InventoryProviderProps = {
  children: ReactNode;
};

export const InventoryContext = createContext<InventoryContextType | null>(null);

export const InventoryProvider: FC<InventoryProviderProps> = ({ children }) => {
  const authContext = useAuthContext();
  const [inventory, setInventory] = useState<InventoryItem[]>([]);

  useEffect(() => {
    const loadInventory = async () => {
      try {
        const storedInventory = await AsyncStorage.getItem('inventory');

        if (storedInventory) {
          setInventory(JSON.parse(storedInventory));
        }
      } catch (error) {
        console.error("Error loading inventory ", error);
      }
    };

    loadInventory();
  }, []);

  const addInventory = async (item: InventoryItem) => {
    const newInventory = [...inventory, item];
    setInventory(newInventory);
    await AsyncStorage.setItem('inventory', JSON.stringify(newInventory));
  };

  const editInventory = async (name: string, newItem: InventoryItem) => {
    const tempInventory = [...inventory];

    const updatedInventory = tempInventory.map(item => {
      return item.name === name ? newItem : item;
    });
    setInventory(updatedInventory);
    await AsyncStorage.setItem('inventory', JSON.stringify(updatedInventory));
  };

  const deleteInventory = async (name: string) => {
    const updatedInventory = inventory.filter(item => item.name !== name);
    setInventory(updatedInventory);
    await AsyncStorage.setItem('inventory', JSON.stringify(updatedInventory));
  };

  if (!authContext.isLoggedIn) {
    return null;
  }

  const contextValue: InventoryContextType = {
    inventory,
    addInventory,
    editInventory,
    deleteInventory,
  };

  return (
    <InventoryContext.Provider value={contextValue}>
      {children}
    </InventoryContext.Provider>
  );
};

export function useInventoryContext(): InventoryContextType {
  const context = useContext(InventoryContext);
  if (!context) {
    throw new Error("Some error occurred");
  }
  return context;
}