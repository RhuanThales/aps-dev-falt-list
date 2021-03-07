import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

class Footer extends Component {
  render() {
    return (
      <View style={styles.rodap}>
        <Text>Products Bela vista - 2021</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  rodap: {
    backgroundColor: "#2546",
    height: 50,
    textAlign: "center",
  },
});

export default Footer;
