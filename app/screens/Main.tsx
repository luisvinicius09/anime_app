import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
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
    <TouchableOpacity>
      <View style={styles.item}>
        <View style={{ flex: 0 }}>
          <Image source={{ uri: image }} style={styles.itemImage} />
        </View>
        <View style={{ flex: 1 }}>
          <Text>{name}</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => console.log('I liked this one!')}>
            <Text>
              Heart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
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
    backgroundColor: COLORS.lightGray,
    flex: 1,
    paddingTop: "10%",
  },
  item: {
    borderColor: COLORS.gray,
    borderWidth: 1,
    height: "16%",
    borderRadius: SIZES.radius,
    marginTop: SIZES.padding,
    marginHorizontal: SIZES.padding,
    flex: 1,
    flexDirection: "row",
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.padding - 4,
    paddingVertical: SIZES.padding - 8,
  },
  itemImage: {
    width: 70,
    height: 116,
    borderRadius: SIZES.radius,
    resizeMode: 'cover',
  },
});

export default Main;
