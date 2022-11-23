import React from "react";
import { View, StyleSheet } from "react-native";
import Quadrado from "./quadrado";

export default (props) => {
  return (
    <View style={style.FlexV3}>
      <Quadrado cor="#ff801a" lado={20} />
      <Quadrado cor="#50d1f6" lado={30} />
      <Quadrado cor="#dd22c1" lado={40} />
      <Quadrado cor="#8312ed" lado={50} />
      <Quadrado cor="#921" lado={60} />
    </View>
  );
};

const style = StyleSheet.create({
  FlexV3: {
    width: "100%",
    height: 300,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#000",
  },
});
