import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import { Provider } from "react-redux";
import store from "./app/config/configureStore";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const fetchFonts = () => {
  return Font.loadAsync({
    "Roboto-Bold": require("./app/assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Black": require("./app/assets/fonts/Roboto-Black.ttf"),
    "Roboto-Regular": require("./app/assets/fonts/Roboto-Regular.ttf"),
  });
};

// Screens

// Tabs
import Tabs from "./app/navigation/tabs";

const Stack = createStackNavigator();

let persistor = persistStore(store);

const App = () => {
  const [loaded, setLoaded] = React.useState(false);

  // if (!loaded) {
  //   return (
  //     <AppLoading
  //       startAsync={fetchFonts}
  //       onFinish={() => setLoaded(true)}
  //       onError={console.warn}
  //     />
  //   );
  // }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={"Main"}
          >
            {/* Tabs */}
            <Stack.Screen name="Tabs" component={Tabs} />

            {/* Screens */}
            {/* <Stack.Screen name="" component={} /> */}
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default () => {
  return <App />;
};
