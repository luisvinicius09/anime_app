import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";
import { incrementValue, decrementValue } from "../config/reducers/usersReducer";
import { useDispatch, useSelector } from "react-redux";

const Main = (): JSX.Element => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  return (
    <View style={styles.container}>
      <View>
        <Text>Test Main Screen</Text>
        <Text>COUNT: {state.counter}</Text>
        <TouchableOpacity onPress={() => dispatch(incrementValue({}))}>
          <Text>
            CLICK ME TO INCREMENT
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => dispatch(decrementValue({}))}>
          <Text>
            CLICK ME TO DECREMENT
          </Text>
        </TouchableOpacity>
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
