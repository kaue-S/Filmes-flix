import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  Alert,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import SafeContainer from "../components/SafeContainer";

export default function BuscarFilmes() {
  
  const [campoBusca, setcampoBusca] = useState("");

  const handleChange = (event) => {
    setcampoBusca(event);
  };

  const submit = () =>{
    if(campoBusca === ""){
      Alert.alert("Ops!", "Você precisa digitar o título!",);
      return;
    }
  };

  return (
    <SafeContainer>
      <View>
        <Text style={estilos.texto}>
          Star Trek? O poderoso Chefão? A trilogia Senhos dos Anéis?
        </Text>
        <Text style={estilos.texto}>
          Localize um filme que você viu ou gostaria de ver!
        </Text>
      </View>
      <View style={estilos.campoBusca}>
        <Feather name="film" size={48} color="#5451a6" />
        <TextInput
          style={estilos.input}
          placeholder="  Digite o título"
          placeholderTextColor={"white"}
          onChange={handleChange}
        />
      </View>
      
      <Pressable style={estilos.botao} onPress={submit} android_ripple={{ color: 'rgba(0, 0, 0, 0.1)'}}>
        <Text style={estilos.textoBotao}>PROCURAR</Text>
      </Pressable>
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
  container: {
    paddingVertical: 8,
  },

  campoBusca: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
    marginVertical: 13,
    marginHorizontal: 8,
  },

  input: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#5451a6",
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 10,
    color: "white",
  },

  texto: {
    marginVertical: 15,
    color: "white",
    marginHorizontal: 8,
  },

  botao: {
    borderWidth: 1,
    alignItems: "center",
    paddingVertical: 10,
    marginHorizontal: 8,
    borderColor: "#5451a6",
    backgroundColor: "#5451a6",
    color: "#fffff",
    borderRadius: 8,
  },

  textoBotao: {
    color: "white",
    fontWeight: "bold",
  },
});
