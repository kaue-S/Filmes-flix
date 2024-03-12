import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import imagemAlternativa from "../../assets/images/foto-alternativa.jpg";
import { FontAwesome5 } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function CardFilme({ filme }) {
  const { title, poster_path, id } = filme;

  const navigation = useNavigation();

  return (
    <View style={estilos.card}>
      <Image
        style={estilos.imagem}
        source={
          poster_path
            ? { uri: `https://image.tmdb.org/t/p/w500/${poster_path}` }
            : imagemAlternativa
        }
      />
      <View style={estilos.corpo}>
        <Text style={estilos.titulo}> {title}</Text>
        <View style={estilos.botoes}>
          <Pressable
            style={estilos.botao}
            onPress={() => navigation.navigate("Detalhes", { filme })}
          >
            <Text style={estilos.textoBotao}>
              <FontAwesome5 name="book-open" size={12} color="black" /> Leia
              mais
            </Text>
          </Pressable>
          <Pressable style={estilos.botao}>
            <Text style={estilos.textoBotao}>
              {" "}
              <Fontisto name="favorite" size={12} color="black" /> Salvar
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  card: {
    marginVertical: 4,
    borderWidth: 2,
    borderColor: "#5451a6",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
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
