import { Link } from 'expo-router';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const EmptyInventory = ({ }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.content}>
        You currently don’t have any item in your inventory.
      </Text>

      <Link href={'/(public)/createInventory'} asChild>
        <TouchableOpacity style={styles.ctaBtn} activeOpacity={0.8}>
          <Text style={styles.ctaText}>Add item to inventory</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default EmptyInventory;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 52,
  },
  content: {
    color: '#000',
    textAlign: 'center',
    fontSize: 13,
    width: 202,
  },
  ctaBtn: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: '#0386D0',
    alignSelf: 'center',
    marginTop: 24,
  },
  ctaText: {
    color: '#fff',
    fontSize: 12,
  },
});