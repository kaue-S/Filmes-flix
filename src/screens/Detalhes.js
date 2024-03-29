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

export default function Detalhes({ route }) {
  const { filme } = route.params;
  const { title, backdrop_path, overview, vote_average, release_date } = filme;

  const formataData = (data) => {
    const [ano, mes, dia] = data.split("-");
    return `${dia}/${mes}/${ano}`;
  };

  return (
    <SafeContainer>
      <View style={estilos.subContainer}>
        <ImageBackground
          style={estilos.imagemFundo}
          source={{ uri: `https://image.tmdb.org/t/p/w500/${backdrop_path}` }}
        >
          <Text style={estilos.titulo}>{title}</Text>
        </ImageBackground>

        <View style={estilos.conteudo}>
          <ScrollView>
            <View style={estilos.infos}>
              <Text style={[estilos.texto, estilos.borda]}>
                ⭐ {vote_average.toFixed(1)}
              </Text>
              <Text style={[estilos.texto, estilos.borda]}>
                📅 {formataData(release_date)}
              </Text>
            </View>
            <View style={estilos.sinopse}>
              <Text style={estilos.subtitulo}>Sinopse:</Text>
              <Text style={estilos.descricao}>
                {overview || "Descrição indisponível"}
              </Text>
            </View>
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
    height: 250,
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

  subtitulo: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 15,
  },

  descricao: {
    textAlign: "justify",
    paddingRight: 16,
    fontSize: 16,
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
    paddingLeft: 16,
  },

  borda: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 4,
  },
});
