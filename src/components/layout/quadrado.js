import React from "react";
import { Text, View } from "react-native";

export default (props) => {
  return (
    <View
      style={{
        height: props.lado,
        width: props.lado,
        backgroundColor: props.cor || "#000",
      }}
    ></View>
  );
};
