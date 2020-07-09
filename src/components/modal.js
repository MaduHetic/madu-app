import React, { useState } from "react";
import {
  ScrollView,
  View,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Color } from "@glossy/colors";

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  modalView: {
    marginVertical: 120,
    marginHorizontal: 30,
    backgroundColor: Color.white,
    borderRadius: 6,
    elevation: 5,
  },
  modalHeader: {
    padding: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modalBody: {
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  modalFooter: {
    padding: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    width: 42,
    height: 42,
    backgroundColor: Color.lightGrey,
    borderRadius: 100,
  },
  iconClose: {
    color: Color.darkGrey,
  },
});

const CustomModal = ({ title, children, groupBtn }) => {
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {/* <ScrollView> */}
          <View style={styles.modalHeader}>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity
              style={styles.icon}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Icon style={styles.iconClose} name="close" size={22} />
            </TouchableOpacity>
          </View>

          <View style={styles.modalBody}>{children}</View>

          <View style={styles.modalFooter}>{groupBtn}</View>
          {/* </ScrollView> */}
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
