import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";
import usersActions from "../config/actions";
import { useDispatch, useSelector } from "react-redux";

const Main = (): JSX.Element => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const increment = () => {
    dispatch(usersActions.incrementValue);
  }

  const decrement = () => {
    dispatch(usersActions.decrementValue);
  }

  return (
    <View style={styles.container}>
      <View>
        <Text>Test Main Screen</Text>
        <Text>COUNT: {state.value}</Text>
        <TouchableOpacity onPress={() => increment()  }>
          <Text>
            CLICK ME TO INCREMENT
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={decrement}>
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
