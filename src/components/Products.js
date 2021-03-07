import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import Button from "./Button";

class Products extends Component {
  render() {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{this.props.nome}</Text>
        <View style={styles.alinhamento}>
          <Text style={styles.textos}>
            <strong>Preço:</strong> {this.props.preco}
          </Text>
          <Text style={styles.textos}>
            <strong>Qtd.:</strong> {this.props.quantidade}
          </Text>
        </View>
        <View style={styles.alinhamento}>
          <Text style={styles.textos}>
            <strong>Marca:</strong> {this.props.marca}
          </Text>
          <Text style={styles.textos}>
            <strong>Referência:</strong> {this.props.referencia}
          </Text>
        </View>
        <Button />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  item: {
    backgroundColor: "gray",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 25,
  },
  title: {
    fontSize: 32,
    color: "#FFFF",
    fontWeight: 600,
  },
  textos: {
    color: "#FFFF",
    padding: 5,
    marginRight: 5,
  },
  alinhamento: {
    flex: 1,
    flexDirection: "row",
  },
});

export default Products;
