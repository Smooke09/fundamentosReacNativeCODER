import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import Estilo from "../estilo";
import produtos from "./Produtos";

export default (props) => {
  return (
    <>
      <Text style={Estilo.txtG}>Lista de produtos:</Text>
      <FlatList
        data={produtos}
        keyExtractor={(i) => `${i.id}`}
        renderItem={({ item: p }) => {
          return (
            <Text>
              {p.id}) {p.nome} tem preço R$ {p.preco}
            </Text>
          );
        }}
      />
    </>
  );
};
