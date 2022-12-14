import React from "react";
import { View, StyleSheet } from "react-native";
import Quadrado from "./quadrado";

export default (props) => {
  return (
    <View style={style.FlexV2}>
      <Quadrado cor="#ff801a" />
      <Quadrado cor="#50d1f6" />
      <Quadrado cor="#dd22c1" />
      <Quadrado cor="#8312ed" />
    </View>
  );
};

const style = StyleSheet.create({
  FlexV2: {
    flex: 1,
    width: "100%",
    alignItems: "flex-end",
    justifyContent: "space-evenly",
    backgroundColor: "#000",
  },
});
