import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";
// import { icons } from "../constants";

const Main = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Test Main Screen</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flexRowCenter: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Main;
