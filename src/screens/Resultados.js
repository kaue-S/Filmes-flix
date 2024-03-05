import { StyleSheet, Text, View } from "react-native";
import SafeContainer from "../components/SafeContainer";
import { api, apiKey } from "../services/api-moviedb";
import { useEffect, useState } from "react";

export default function Resultados({ route }) {
  const [resultados, setResultados] = useState([]);

  const { filme } = route.params;

  useEffect(() => {
    async function buscarfilmes() {
      try {
        const resposta = await api.get(`/search/movie`, {
          params: {
            include_adult: false,
            language: "pt-BR",
            query: filme,
            api_key: apiKey,
          },
        });
        console.log(resposta.data.results);
      } catch (error) {
        console.error("Deu ruim: " + error.message);
      }
    }
    buscarfilmes();
  }, []);

  return (
    <SafeContainer>
      <View style={estilos.subContainer}>
        <Text style={estilos.texto}>Você buscou por: {filme}</Text>
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

  texto: {
    marginVertical: 8,
  },
});
