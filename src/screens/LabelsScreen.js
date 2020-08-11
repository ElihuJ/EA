import React, { useContext } from "react";
import { FlatList } from "react-native";
import { ListItem } from "react-native-elements";
import { Context as DataContext } from "../context/DataContext";

const LabelsScreen = ({ navigation }) => {
  const {
    state: { data },
  } = useContext(DataContext);

  return (
    <FlatList
      data={data}
      keyExtractor={(result) => result.name}
      renderItem={({ item }) => {
        return (
          <ListItem
            bottomDivider
            title={item.name}
            key={item.name}
            onPress={() =>
              navigation.navigate("Bands", {
                labelSelected: item,
              })
            }
          />
        );
      }}
    />
  );
};

export default LabelsScreen;
