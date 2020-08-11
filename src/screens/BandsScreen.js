import React from "react";
import { FlatList } from "react-native";
import { ListItem } from "react-native-elements";

const BandsScreen = ({ navigation }) => {
  const labelSelected = navigation.getParam("labelSelected");

  return (
    <FlatList
      data={labelSelected.bands.sort((a, b) => a.name.localeCompare(b.name))}
      keyExtractor={(band) => band.name}
      renderItem={({ item }) => {
        return (
          <ListItem
            bottomDivider
            title={item.name}
            key={item.name}
            onPress={() => {
              navigation.navigate("Festivals", {
                festivalsData: item.festivals,
              });
            }}
          />
        );
      }}
    />
  );
};

export default BandsScreen;
