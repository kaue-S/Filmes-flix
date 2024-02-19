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
import { Ionicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import SafeContainer from "./src/components/SafeContainer";

/* manter a tela splash visível enquanto não programarmos a ação de ocultar */

export default function App() {
  /*Função atrelada ao hook usaCallback. Quando uma função está conectada ao useCallBack, garantimos que a referência dela é armazenada somente uma vez. */

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeContainer>
        <View style={estilos.viewLogo}>
          <Image source={logo} style={estilos.logo} />
          <Text style={estilos.titulo}> Filmes Flix</Text>
        </View>

        <View style={estilos.viewBotoes}>
          <Pressable style={estilos.botao}>
            <Text style={estilos.textoBotao}>
              <Ionicons name="search" size={18} color="white" /> Buscar Filmes
            </Text>
          </Pressable>
          <Pressable style={estilos.botao}>
            <Text style={estilos.textoBotao}>
              <Fontisto name="favorite" size={16} color="white" /> Favoritos
            </Text>
          </Pressable>
        </View>

        <View style={estilos.viewRodape}>
          <Pressable style={estilos.botaoRodape}>
            <Text style={estilos.textoBotao}>
              <Ionicons name="lock-closed" size={16} color={"white"} />{" "}
              Privacidade
            </Text>
          </Pressable>
          <Pressable style={estilos.botaoRodape}>
            <Text style={estilos.textoBotao}>
              <Ionicons name="information-circle" size={16} color={"white"} />{" "}
              Sobre
            </Text>
          </Pressable>
        </View>
      </SafeContainer>
    </>
  );
}

const estilos = StyleSheet.create({
  viewLogo: {
    flex: 2,
    backgroundColor: "rgb(31,30,27)",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 15,
  },

  logo: {
    width: 250,
    height: 250,
  },

  titulo: {
    color: "white",
    fontFamily: "Monoton-Regular",
    fontSize: 36,
  },

  viewBotoes: {
    flex: 1,
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
  },

  botao: {
    borderRadius: 5,
    padding: 16,
    backgroundColor: "purple",
    justifyContent: "space-between",
  },

  textoBotao: {
    alignItems: "center",
    display: "flex",
    fontFamily: "Mulish",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  viewRodape: {
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "purple",
    flex: 0.2,
  },

  botaoRodape: {},
});
