import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";
import { fetchAnimes } from "../config/reducers/animesReducer";
import { useDispatch, useSelector } from "react-redux";
import { FlatList } from "react-native-gesture-handler";
import { RootState } from "../types";

const Main = (): JSX.Element => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state);

  React.useEffect(() => {
    dispatch(fetchAnimes());
  }, [dispatch]);

  const Item = ({ name, image }: any) => (
    <View style={styles.item}>
      <View>
        <Image source={{ uri: image }} style={styles.itemImage} />
      </View>
      <View>
        <Text>{name}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View>
        <Text>Test Main Screen</Text>
        <FlatList
          showsVerticalScrollIndicator
          data={state.animes.data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <Item
                key={item.id}
                name={item.attributes.canonicalTitle}
                image={item.attributes.posterImage.small}
              />
            );
          }}
          onEndReached={() => {
            dispatch(fetchAnimes(state.animes.next));
          }}
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
    paddingTop: "10%",
  },
  item: {
    borderColor: "#000",
    borderWidth: 1,
    height: 150,
    borderRadius: SIZES.radius,
    marginTop: SIZES.padding,
    marginHorizontal: SIZES.padding,
    flex: 1,
    flexDirection: "row",
  },
  itemImage: {
    width: 60,
    height: 110,
  },
});

export default Main;
