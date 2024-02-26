import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  Alert,
} from "react-native";
import SafeContainer from "../components/SafeContainer";
import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";

export default function BuscarFilmes() {
  const [filme, setFilme] = useState("");

  const handleChangeText = (novoFilme) => {
    setFilme(novoFilme);
  };

  return (
    <SafeContainer>
      <View>
        <Text style={estilos.texto}>
          Star Trek? O poderoso Chefão? A trilogia Senhos dos Anéis?
        </Text>
        <Text style={estilos.texto}>
          Localiza um filme que você viu ou gostaria de ver!
        </Text>
      </View>
      <View style={estilos.campoBusca}>
        <Feather name="film" size={24} color="#5451a6" />
        <TextInput
          style={estilos.input}
          onChange={handleChangeText}
          placeholder=" Digite o título"
          value={filme}
        />
      </View>
      c
      <Pressable style={estilos.botao} onPress={buscarFilme}>
        <Text style={estilos.textoBotao}>PROCURAR</Text>
      </Pressable>
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
  campoBusca: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
    marginVertical: 13,
  },

  input: {
    borderWidth: 1,
    borderColor: "#5451a6",
    width: 300,
  },

  texto: {
    marginVertical: 8,
  },

  botao: {
    borderWidth: 1,
    alignItems: "center",
    paddingVertical: 5,
    borderColor: "#5451a6",
    backgroundColor: "#5451a6",
    color: "#fffff",
  },

  textoBotao: {
    color: "white",
    fontWeight: "bold",
  },
});
