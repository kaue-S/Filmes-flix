import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import imagemAlternativa from "../../assets/images/foto-alternativa.jpg";
import React from "react";

export default function CardFilme({ filme }) {
  const { title, poster_path } = filme;

  return (
    <View style={estilos.card}>
      <Image
        style={estilos.imagem}
        source={{ uri: `https://image.tmdb.org/t/p/w500/${poster_path}` }}
      />
      <View style={estilos.corpo}>
        <Text style={estilos.titulo}> {title}</Text>
        <View style={estilos.botoes}>
          <Pressable style={estilos.botao}>
            <Text style={estilos.textoBotao}>Leia mais</Text>
          </Pressable>
          <Pressable style={estilos.botao}>
            <Text style={estilos.textoBotao}>Salvar</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
  r;
}

const estilos = StyleSheet.create({
  card: {
    marginVertical: 4,
    borderWidth: 2,
    borderColor: "#5451a6",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  imagem: {
    width: 100,
    height: 150,
    flex: 1,
  },

  corpo: {
    flex: 2,
  },

  titulo: {
    backgroundColor: "#5451a6",
    color: "white",
    textAlign: "center",
    paddingVertical: 8,
    fontSize: 16,
  },

  botoes: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 8,
  },

  botao: {
    borderColor: "#5451a6",
    borderWidth: 1,
    padding: 8,
  },

  textoBotao: {
    fontSize: 12,
    textTransform: "uppercase",
  },
});
