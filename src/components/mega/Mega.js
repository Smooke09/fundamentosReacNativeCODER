import React, { Component } from "react";
import { Button, Text, TextInput, View } from "react-native";
import Estilo from "../estilo";
import MegaNumero from "./MegaNumero";

class Mega extends Component {
  state = {
    qtdeNumeros: this.props.qtdeNumeros,
    numeros: [],
  };

  alterarQtdeNumero = (qtde) => {
    this.setState({ qtdeNumeros: +qtde });
  };

  gerarNumeroNaoContido = (nums) => {
    const novo = parseInt(Math.random() * 60) + 1;
    return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo;
  };

  gerarNumeros = () => {
    const numeros = Array(this.state.qtdeNumeros)
      .fill()
      .reduce((nums) => [...nums, this.gerarNumeroNaoContido(nums)], [])
      .sort((a, b) => a - b);
    this.setState({ numeros });
  };

  exibirNUmeros = () => {
    const nums = this.state.numeros;
    return nums.map((num) => {
      return <MegaNumero num={num} />;
    });
  };

  render() {
    return (
      <>
        <Text style={Estilo.txtG}>Gerador de Mega-Sena</Text>
        <TextInput
          style={{
            borderBottomWidth: 1,
            textAlign: "center",
          }}
          keyboardType={"numeric"}
          placeholder="Quantidade de numeros"
          value={this.state.qtdeNumeros}
          onChangeText={(e) => this.alterarQtdeNumero(e)}
        />
        <Button title="Gerar" onPress={this.gerarNumeros} />
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {this.exibirNUmeros()}
        </View>
      </>
    );
  }
}

export default Mega;
