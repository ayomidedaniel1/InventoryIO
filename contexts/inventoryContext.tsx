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

export type InventoryItem = {
  userId: string;
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
  const { user } = useAuthContext();
  const [inventory, setInventory] = useState<InventoryItem[]>([]);

  useEffect(() => {
    const loadInventory = async () => {
      try {
        const storedInventory = await AsyncStorage.getItem('inventory');

        if (storedInventory) {
          const parsedInventory: InventoryItem[] = JSON.parse(storedInventory);

          // Filter items based on the currently logged-in user
          const userInventory = parsedInventory.filter(
            (item) => item.userId === user?.email
          );

          setInventory(userInventory);
        }
      } catch (error) {
        console.error("Error loading inventory ", error);
      }
    };

    loadInventory();
  }, [user]);

  const addInventory = async (item: InventoryItem) => {
    const newInventoryItem: InventoryItem = {
      ...item,
      userId: user?.email || '',
    };

    const newInventory = [...inventory, newInventoryItem];
    setInventory(newInventory);
    await AsyncStorage.setItem('inventory', JSON.stringify(newInventory));
  };

  const editInventory = async (name: string, newItem: InventoryItem) => {
    const tempInventory = [...inventory];

    const updatedInventory = tempInventory.map(item => {
      return item.name === name && item.userId === user?.email
        ? { ...newItem, createdBy: user?.email || '' }
        : item;
    });
    setInventory(updatedInventory);
    await AsyncStorage.setItem('inventory', JSON.stringify(updatedInventory));
  };

  const deleteInventory = async (name: string) => {
    const updatedInventory = inventory.filter(
      (inventoryItem) => inventoryItem.name !== name && inventoryItem.userId === user?.email
    );
    setInventory(updatedInventory);
    await AsyncStorage.setItem('inventory', JSON.stringify(updatedInventory));
  };

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