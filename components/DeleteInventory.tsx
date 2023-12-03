import React from 'react';
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type deleteInventoryProps = {
  title: string;
  content: string;
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  onDelete: () => void;
};

const DeleteInventory = ({ title, content, modalVisible, setModalVisible, onDelete }: deleteInventoryProps) => {
  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible} onRequestClose={() => { setModalVisible(!modalVisible); }}>
      <Pressable onPress={() => setModalVisible(!modalVisible)} style={styles.pressable} />

      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{title}</Text>

          <Text style={styles.content}>{content}</Text>

          <View style={styles.ctaContainer}>
            <TouchableOpacity style={styles.nothanks} activeOpacity={0.9} onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.nothanksText}>No thanks</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.discard} activeOpacity={0.9} onPress={onDelete}>
              <Text style={styles.discardText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DeleteInventory;

const styles = StyleSheet.create({
  pressable: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#000000',
    opacity: 0.5,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  contentContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 36,
    paddingBottom: 40,
    paddingHorizontal: 40,
  },
  title: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 24,
    lineHeight: 32,
    color: '#20242A',
  },
  content: {
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 14,
    color: '#20242A',
    marginTop: 7,
  },
  ctaContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  nothanks: {
    backgroundColor: '#0386D0',
    borderRadius: 8,
    paddingHorizontal: 32,
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nothanksText: {
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 16,
    color: '#fff',
  },
  discard: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    paddingHorizontal: 32,
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  discardText: {
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 16,
    color: '#FA507E',
  },
});