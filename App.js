import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import MainScreen from "./src/screens/MainScreen";
import LabelsScreen from "./src/screens/LabelsScreen";
import BandsScreen from "./src/screens/BandsScreen";
import FestivalsScreen from "./src/screens/FestivalsScreen";
import { Provider as DataProvider } from "./src/context/DataContext";
import { setNavigator } from "./src/utils/navigationRef";

const screenFlow = createStackNavigator({
  Main: MainScreen,
  Labels: LabelsScreen,
  Bands: BandsScreen,
  Festivals: FestivalsScreen,
});

const App = createAppContainer(screenFlow);

export default () => {
  return (
    <DataProvider>
      <App
        ref={(navigation) => {
          setNavigator(navigation);
        }}
      />
    </DataProvider>
  );
};

