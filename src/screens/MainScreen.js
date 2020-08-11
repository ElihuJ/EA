import { StatusBar } from "expo-status-bar";
import React, { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { navigate } from "../utils/navigationRef";
import { Context as DataContext } from "../context/DataContext";
import Spinner from "react-native-loading-spinner-overlay";

const MainScreen = () => {
  const { state: dataState, loadData } = useContext(DataContext);
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.container}>
      <Spinner
        visible={loading}
        textContent="Loading"
        textStyle={styles.spinnerTextStyle}
      />
      <Text style={styles.title}>Welcome to the EnergyAustralia API Test</Text>
      {dataState.data ? (
        <Button
          title="See API Results"
          buttonStyle={styles.button}
          onPress={() => navigate("Labels")}
        />
      ) : null}
      <Button
        title="Use API"
        buttonStyle={styles.button}
        onPress={async () => {
          setLoading(true);
          await loadData();
          setLoading(false);
        }}
      />
      {dataState.errorMessage ? (
        <Text style={styles.warning}>
          API Call failed{"\n"}
          {dataState.errorMessage}{" "}
        </Text>
      ) : null}
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
  },
  title: {
    alignSelf: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
  button: {
    alignSelf: "center",
    borderRadius: 15,
    height: 50,
    margin: 20,
    backgroundColor: "green",
  },
  warning: {
    color: "red",
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
  },
  spinnerTextStyle: {
    color: "white",
  },
});

export default MainScreen;
