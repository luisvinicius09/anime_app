import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";
import { fetchAnimes } from "../config/reducers/animesReducer";
import { useDispatch, useSelector } from "react-redux";
import { FlatList } from "react-native-gesture-handler";

const Main = (): JSX.Element => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  React.useEffect(() => {
    dispatch(fetchAnimes());
  }, [dispatch]);

  const Item = ({ name }: any) => (
    <View style={styles.item}>
      <Text>{name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View>
        <Text>Test Main Screen</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={state.animes.data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Item name={item.attributes.canonicalTitle} />
          )}
          onEndReached={() => console.log('this is the end')}
          onEndReachedThreshold={0.01}
        />
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
  item: {
    borderColor: "#000",
    borderWidth: 1,
    height: 180,
  }
});

export default Main;
