import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Linking,
  ScrollView,
} from "react-native";
import React from "react";
import SafeContainer from "../components/SafeContainer";
import tmdb from "../../assets/images/logo-tmdb.png";

export default function Sobre() {
  return (
    <SafeContainer>
      <View style={estilos.subContainer}>
        <ScrollView>
          <Text style={estilos.subtitulo}>Sobre o app Filmes Flix</Text>
          <Text>
            O <Text style={estilos.nomeApp}>Filmes Flix app</Text> é um
            aplicativo com a finalidade de permitir a busca por informações
            sobre filmes existentes na base de dados pública disponibilizada
            pelo site The Movie Database (TMDb).
          </Text>
          <View>
            <Pressable
              style={estilos.logoTmdb}
              onPress={() =>
                Linking.openURL("https://www.themoviedb.org/?language=pt-BR")
              }
            >
              <Image source={tmdb} />
            </Pressable>
          </View>

          <Text style={estilos.texto}>
            Ao localizar um filme, o usuário pode visualizar informações como
            título, data de lançamento, nota média de avaliação e uma breve
            descrição sobre o filme e, caso queira, salvar estas informações em
            uma lista no próprio aplicativo para visualização posterior.
          </Text>
          <Text style={estilos.texto}>
            O aplicativo poderá receber novos recursos conforme o feedback e
            demanda dos usuários.
          </Text>
          <Text style={estilos.copy}>Filmes Flix APP &copy; 2024</Text>
        </ScrollView>
      </View>
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
  subContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: "white",
  },

  subtitulo: {
    fontFamily: "Mulish",
    fontWeight: "bold",
    marginVertical: 30,
    fontSize: 18,
  },
  texto: {
    marginVertical: 8,
  },

  nomeApp: {
    fontWeight: "bold",
  },

  logoTmdb: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 30,
  },

  copy: {},
});
