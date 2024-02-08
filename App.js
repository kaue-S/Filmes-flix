import {
  Button,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import logo from "./assets/images/logotipo.png";

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={estilos.container}>
        <View style={estilos.viewLogo}>
          <Image source={logo} style={estilos.logo} />
          <Text>Filmes Flix</Text>
        </View>
        <View style={estilos.viewBotoes}>
          <Button title="Buscar Filmes" />
          <Button title="Favoritos" />
        </View>
        <View style={estilos.viewRodape}>
          <Button title="Privacidade" />
          <Button title="Sobre" />
        </View>
      </SafeAreaView>
    </>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingLeft: 10,
    paddingRight: 10,
  },

  viewLogo: {
    flex: 1,
    backgroundColor: "gray",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  logo: {
    width: 250,
    height: 250,
  },

  viewBotoes: {
    flex: 1,
    justifyContent: "space-around",
    flexDirection: "row",
    backgroundColor: "orange",
    alignItems: "baseline",
  },

  viewRodape: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "red",
    flex: 0.2,
  },
});
