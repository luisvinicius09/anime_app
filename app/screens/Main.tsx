import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";
// import { icons } from "../constants";

const Main = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View
        style={{
          height: "30%",
          backgroundColor: COLORS.blue,
          paddingLeft: SIZES.padding,
          paddingRight: SIZES.padding,
          paddingTop: SIZES.padding + 20,
        }}
      >
        <View style={[styles.flexRowCenter, styles.headerTopContainer]}>
          <View>
            <TouchableOpacity>
              {/* <Image source={icons.menu} /> */}
            </TouchableOpacity>
          </View>
          <View>
            <View style={styles.flexRowCenter}>
              <Text style={{ color: COLORS.white }}>Olá, </Text>
              <Text style={[FONTS.h3, { color: COLORS.white }]}>
                Luis Vinicius
                {/* TODO: Handle big names (Luis Vinicius M...) or Just get the first two names*/}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.headerSellingsToday}>
          <Text style={[FONTS.h3, { color: COLORS.white }]}>Vendas hoje</Text>
          <Text style={[FONTS.h1, { color: COLORS.white }]}>R$ 8,420,00</Text>
        </View>
      </View>

      <View></View>
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
  },
  headerTopContainer: {
    justifyContent: "space-between",
  },
  headerSellingsToday: {
    flex: 1,
  },
});

export default Main;
