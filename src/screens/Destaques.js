import { useEffect } from "react";
import { api, apiKey } from "../services/api-moviedb";
import { useState } from "react";
import SafeContainer from "../components/SafeContainer";
import { FlatList, View, Text, Image, StyleSheet, ScrollView } from "react-native";
import CardFilme from "../components/CardFilme";

export default function Destaques() {
  const [resultados, setResultados] = useState([]);

  useEffect(() => {
    async function destaqueSemana() {
      try {
        const resposta = await api.get(`/trending/movie/week`, {
          params: {
            include_adult: false,
            language: "pt-BR",
            api_key: apiKey,
          },
        });

        setResultados(resposta.data.results);
      } catch (error) {
        console.error("Deu ruim: " + error.message);
      }
    }

    destaqueSemana();
  }, []);

  return (
    <SafeContainer>
      {
        <View style={estilos.destaques}>
          <FlatList horizontal={true}
            
            data={resultados}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                
                <View style={estilos.cardDestaques}>
                  <Image style={estilos.imagem} source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}` }} />
                </View>

                );
            }}
        />
        </View>
      }
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
    destaques: {
        // borderColor: "red",
        // borderWidth: 4,
       width: "auto",
    },
    
    cardDestaques:{
        marginHorizontal: 15,
        borderRadius: 30,
    },

    imagem: {
        borderRadius: 30,
        height: 300,
        width: 200,
    },
});
