import React, { Component } from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import Products from "./src/components/Products";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [
        {
          id: "1",
          nome: "Arroz",
          preco: "25.99",
          quantidade: "15",
          marca: "Lima",
          referencia: "001",
        },
        {
          id: "2",
          nome: "Feijão",
          preco: "8.99",
          quantidade: "20",
          marca: "Lima",
          referencia: "002",
        },
        {
          id: "3",
          nome: "Macarrão",
          preco: "4.99",
          quantidade: "45",
          marca: "St. Amália",
          referencia: "003",
        },
        {
          id: "4",
          nome: "Sardinha",
          preco: "3.99",
          quantidade: "90",
          marca: "Gomes",
          referencia: "004",
        },
        {
          id: "5",
          nome: "Detergente",
          preco: "1.29",
          quantidade: "120",
          marca: "Ypê",
          referencia: "005",
        },
        {
          id: "6",
          nome: "Sabão em Pó",
          preco: "10.00",
          quantidade: "10",
          marca: "Ômo",
          referencia: "006",
        },
      ],
    };
  }
  render() {
    return (
      <View style={{ flex: 1, height: 70 }}>
        <Header />
        <Text style={styles.titulo}>Lista de Produtos:</Text>
        <FlatList
          data={this.state.feed}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Products
              nome={item.nome}
              preco={item.preco}
              quantidade={item.quantidade}
              marca={item.marca}
              referencia={item.referencia}
            />
          )}
        />
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titulo: {
    color: "blue",
    fontSize: 26,
    fontWeight: 800,
    paddingLeft: 20,
    paddingBottom: 20,
    paddingTop: 15,
  },
  prodtxt: {
    textAlignVertical: "auto",
  },
});

export default App;
