import React, { useState } from "react";
import { Text, View, TextInput } from "react-native";
import Estilo from "./estilo";

export default (props) => {
  const [nome, setNome] = useState("");

  return (
    <View>
      <Text style={Estilo.txtG}>Ola: {nome}</Text>
      <TextInput
        placeholder="Digite seu nome:"
        value={nome}
        onChangeText={(e) => setNome(e)}
      />
    </View>
  );
};
