import { FlatList, StyleSheet, Text, View } from "react-native";
import CardFilme from "../components/CardFilme";
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

        setResultados(resposta.data.results);
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

        <View style={estilos.viewFilmes}>
          <FlatList
            //prop data apontando para o state contendo os dados para a FlatList
            data={resultados}
            //extraindo cada registro único
            keyExtractor={(item) => item.id}
            //prop que renderiza cada filme em um componente
            renderItem={({ item }) => {
              return <CardFilme filme={item} />;
            }}
          />
        </View>
      </View>
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
  viewFilmes: { marginVertical: 8 },
  subContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: "white",
  },

  texto: {
    marginVertical: 8,
  },
});
