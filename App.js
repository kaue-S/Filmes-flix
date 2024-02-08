import {
  Button,
  Image,
  Pressable,
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
          <Pressable style={estilos.botao}>
            <Text style={estilos.textoBotao}>Buscar Filmes</Text>
          </Pressable>

          <Pressable style={estilos.botao}>
            <Text style={estilos.textoBotao}>Favoritos</Text>
          </Pressable>
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
    backgroundColor: "rgb(31,30,27)",
    paddingLeft: 10,
    paddingRight: 10,
  },

  viewLogo: {
    flex: 1,
    backgroundColor: "rgb(31,30,27)",
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
    alignItems: "baseline",
  },

  botao: {
    padding: 16,
    backgroundColor: "linear-gradient(273deg, #966c3b, #d5c096)",
  },

  textoBotao: {},

  viewRodape: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "red",
    flex: 0.2,
  },
});
