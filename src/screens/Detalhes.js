import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import SafeContainer from "../components/SafeContainer";
import imagemAlternativa from "../../assets/images/foto-alternativa.jpg";

export default function Detalhes() {
  return (
    <SafeContainer>
      <View style={estilos.subContainer}>
        <ImageBackground style={estilos.imagemFundo} source={imagemAlternativa}>
          <Text style={estilos.titulo}>Título do filme...</Text>
        </ImageBackground>

        <View style={estilos.conteudo}>
          <ScrollView>
            <View style={estilos.infos}>
              <Text style={estilos.texto}>Nota: </Text>
              <Text style={estilos.texto}>Lançamento: </Text>
            </View>
            <Text style={[estilos.texto, estilos.sinopse]}>Sinopse: </Text>
          </ScrollView>
        </View>
      </View>
      <Text>Detalhes</Text>
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
  subContainer: {
    backgroundColor: "white",
    flex: 1,
    width: "100%",
  },

  imagemFundo: {
    height: 200,
    width: "100%",
    justifyContent: "center",
  },

  titulo: {
    backgroundColor: "rgba(0,0,0,0.75)",
    color: "white",
    fontFamily: "Mulish",
    padding: 16,
    fontSize: 16,
    fontWeight: "bold",
  },

  conteudo: {
    flex: 1,
  },

  infos: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 15,
  },

  texto: {
    paddingVertical: 4,
    fontSize: 16,
  },

  sinopse: {
    marginVertical: 15,
    fontWeight: "bold",
    paddingLeft: 16,
  },
});
