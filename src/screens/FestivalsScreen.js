import React from "react";
import { Text, StyleSheet } from "react-native";

const FestivalsScreen = ({ navigation }) => {
  const festivalsData = navigation.getParam("festivalsData");

  if (Array.isArray(festivalsData)) {
    console.log("Is array");
    const festivalsList = festivalsData.map((festival) => {
      <Text>{festival}</Text>;
    });
    return festivalsList;
  }

  return festivalsData ? (
    <Text style={styles.title}>{festivalsData}</Text>
  ) : (
    <Text style={styles.title}>Not played on a festival</Text>
  );
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
