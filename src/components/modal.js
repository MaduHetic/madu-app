import React, { useState, useEffect } from "react";
import {
  ScrollView,
  View,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Color } from "@glossy/colors";

const height = Math.round(Dimensions.get("window").height);

const styles = StyleSheet.create({
  centeredView: {
    height: height,
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

const CustomModal = ({ isVisible, closeModal, title, children, groupBtn }) => {
  const [screenHeight, setScreenHeight] = useState();
  const [scrollEnabled, setScrollEnabled] = useState(false);

  useEffect(() => {
    setScrollEnabled(screenHeight > height);
  }, [screenHeight]);

  const onContentSizeChange = (contentWidth, contentHeight) => {
    // Save the content height in state
    setScreenHeight(contentHeight);
  };

  return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
      <View style={styles.centeredView}>
        <ScrollView
          style={[styles.modalView, { maxHeight: screenHeight }]}
          scrollEnabled={scrollEnabled}
          onContentSizeChange={onContentSizeChange}
        >
          <View style={styles.modalHeader}>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity style={styles.icon} onPress={closeModal}>
              <Icon style={styles.iconClose} name="close" size={22} />
            </TouchableOpacity>
          </View>

          <View style={styles.modalBody}>{children}</View>

          <View style={styles.modalFooter}>{groupBtn}</View>
        </ScrollView>
      </View>
    </Modal>
  );
};

export default CustomModal;
