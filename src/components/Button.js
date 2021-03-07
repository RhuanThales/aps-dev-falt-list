import React, { Component } from "react";
import { View, Button, StyleSheet } from "react-native";

class Button extends Component {
  render() {
    return (
      <View style={styles.but}>
        <Button title="10% de desconto" color="green"></Button>
        <Button title="Leve 5 pague 4" color="orange"></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  but: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Button;
