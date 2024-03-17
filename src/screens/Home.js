import { StyleSheet, Text, View, Image, Pressable } from "react-native";

import SafeContainer from "../components/SafeContainer";
import logo from "../../assets/images/logo.png";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Destaques from "./Destaques";

export default function Home({ navigation }) {
  return (
    <SafeContainer>
      <View style={estilos.header}>
        <Text style={estilos.search}>
          <Ionicons name="menu" size={30} color="white" />
        </Text>
        <Image source={logo} style={estilos.logo} />
        
        <Pressable
          style={estilos.botao}
          onPress={() => navigation.navigate("Buscar Filmes")}
        >
          <Text style={estilos.textoBotao}>
            <Ionicons name="search" size={30} color="white" />
          </Text>
        </Pressable>
      </View>

      <View>
        <Destaques />
      </View>

      <View style={estilos.viewBotoes}>
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
          <Text>
            <Ionicons name="information-circle" size={16} color={"white"} />{" "}
            Sobre
          </Text>
        </Pressable>
      </View>
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
  header: {
  height: 60,
  backgroundColor: "#252525",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  borderColor: "white",
  }, 

  logo: {
    marginTop: 16,
    width: 120,
    height: 60,
  },

  viewBotoes: {
    flex: 1,
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
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
