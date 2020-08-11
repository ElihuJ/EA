import React from "react";
import { Text, StyleSheet } from "react-native";

const FestivalsScreen = ({ navigation }) => {
  const festivalsData = navigation.getParam("festivalsData");

  return <Text style={styles.title}>{festivalsData}</Text>;
};

const styles = StyleSheet.create({
  title: {
    flex: 1,
    fontSize: 35,
    fontWeight: "bold",
    textAlignVertical: "center",
    alignSelf: "center",
  },
});

export default FestivalsScreen;
