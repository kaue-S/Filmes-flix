import { StyleSheet, Text, View, Image, Pressable } from "react-native";

import SafeContainer from "../components/SafeContainer";
import logo from "../../assets/images/logo.png";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function Home({ navigation }) {
  return (
    <SafeContainer>
      <View style={estilos.viewLogo}>
        <Text style={estilos.search}>
          <Ionicons name="menu" size={30} color="white" />
        </Text>
        <Image source={logo} style={estilos.logo} />
        <Text style={estilos.search}> <Ionicons name="search" size={30} color="white" /></Text>
      </View>

      <View style={estilos.viewBotoes}>
        <Pressable
          style={estilos.botao}
          onPress={() => navigation.navigate("Buscar Filmes")}
        >
          <Text style={estilos.textoBotao}>
            <Ionicons name="search" size={18} color="white" /> Buscar Filmes
          </Text>
        </Pressable>
        <Pressable style={estilos.botao}>
          <Text style={estilos.textoBotao} onPress={() => navigation.navigate("Favoritos")}>
            <AntDesign name="heart" size={16} color="white" /> Favoritos
          </Text>
        </Pressable>
      </View>

      <View style={estilos.viewRodape}>
        <Pressable
          style={estilos.botaoRodape}
          onPress={() => navigation.navigate("Privacidade")}
        >
          <Text style={estilos.textoBotao}>
            <Ionicons name="lock-closed" size={16} color={"white"} />{" "}
            Privacidade
          </Text>
        </Pressable>
        <Pressable
          style={estilos.botaoRodape}
          onPress={() => navigation.navigate("Sobre")}
        >
          <Text style={estilos.textoBotao}>
            <Ionicons name="information-circle" size={16} color={"white"} />{" "}
            Sobre
          </Text>
        </Pressable>
      </View>
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
  viewLogo: {
    flex: 1,
    backgroundColor: "#252525",
    justifyContent: "flex-end",
    alignItems: "start",
    paddingBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  search: {
    paddingTop: 4,
  },  

  logo: {
    width: 150,
    height: 60,
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
    backgroundColor: "#5451a6",
    justifyContent: "space-between",
  },

  textoBotao: {
    fontFamily: "Mulish",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  viewRodape: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#5451a6",
    flex: 0.2,
    paddingHorizontal: 20,
  },
});
