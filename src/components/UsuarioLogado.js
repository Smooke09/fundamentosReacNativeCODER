import React from "react";
import { View, Text } from "react-native";
import Estilo from "./estilo";
import If from "./if";

export default (props) => {
  const usuario = props.usuario || {};

  console.warn(usuario);

  return (
    <>
      <If teste={usuario && usuario.nome && usuario.email}>
        <Text style={Estilo.txtG}>Usuário Logado:</Text>
        <Text style={Estilo.txtG}>
          {usuario.nome} - {usuario.email}
        </Text>
      </If>
    </>
  );
};
