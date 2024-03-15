import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import SafeContainer from "../components/SafeContainer";

import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";

export default function Favoritos({ navigation }) {
  /* State para registrar os dados carregados do storage */
  const [listaFavoritos, setListaFavoritos] = useState([]);

  /* useEffect será disparado assim que o usuário entrar
    na tela Favoritos (portanto, somente uma vez) */
  useEffect(() => {
    const carregarFavoritos = async () => {
      try {
        /* Acessamos o storage criado previamente e guardamos
          as strings de dados. */
        const dados = await AsyncStorage.getItem("@favoritosdahora");

        /* Se houver dados, transformamos em objetos (JSON.parse)
          e atualizamos o state com a lista de favoritos */
        if (dados) {
          setListaFavoritos(JSON.parse(dados));
        }
      } catch (error) {
        console.error("Erro ao carregar os dados: " + error);
        Alert.alert("Erro", "Erro ao carregar os dados.");
      }
    };
    carregarFavoritos();
  }, []);

  const excluirTodosFavoritos = async () => {
    Alert.alert(
      "Excluir todos?",
      "Tem certeza que deseja excluir TODOS os favoritos",
      [
        { text: "Cancelar", style: "red" },
        {
          text: "Continuar",
          style: "destructive",
          onPress: async () => {
            //Remover o storage de favoritos
            await AsyncStorage.removeItem("@favoritosdahora");

            //Atualizando o state para que sejam removidos da tela
            setListaFavoritos([]);
          },
        },
      ]
    );
  };

  const excluir = async (filmeId) => {
    Alert.alert("Excluir", "Tem certeza que deseja excluir este filme? ", [
      { text: "cancelar", style: "red" },
      {
        Text: "Excluir",
        style: "destructive",
        onPress: async () => {
          const novaListaFavoritos = listaFavoritos.filter(
            (filme) => filme.id !== filmeId
          );

          setListaFavoritos(novaListaFavoritos);

          await AsyncStorage.setItem(
            "@favoritosdahora",
            JSON.stringify(novaListaFavoritos)
          );
        },
      },
    ]);
  };

  return (
    <SafeContainer>
      <View style={estilos.subContainer}>
        <View style={estilos.viewFavoritos}>
          <Text style={estilos.texto}>Quantidade: {listaFavoritos.length}</Text>

          {listaFavoritos.length > 0 ? (
            <Pressable
              onPress={excluirTodosFavoritos}
              style={estilos.botaoExcluirFavoritos}
            >
              <Text style={estilos.textoBotao}>
                <Ionicons name="trash-outline" size={16} /> Excluir favoritos
              </Text>
            </Pressable>
          ) : (
            <Text>Lista Vazia</Text>
          )}
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {listaFavoritos.map((filme) => {
            return (
              <View key={filme.id} style={estilos.item}>
                <Pressable
                  onPress={() => {
                    navigation.navigate("Detalhes", { filme });
                  }}
                  style={estilos.botaoFilme}
                >
                  <Text style={estilos.titulo}>{filme.title}</Text>
                </Pressable>
                <Pressable
                  onPress={() => excluir(filme.id)}
                  style={estilos.botaoExcluir}
                >
                  <Ionicons name="trash" color="white" size={16} />
                </Pressable>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
  subContainer: {
    flex: 1,
    padding: 16,
    width: "100%",
    backgroundColor: "white",
  },

  viewFavoritos: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },

  texto: { marginVertical: 8 },

  botaoExcluirFavoritos: {
    borderWidth: 1,
    borderColor: "red",
    padding: 8,
    borderRadius: 4,
  },

  botaoFilme: { flex: 0.9 },

  textoBotao: { color: "red" },

  item: {
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#eee8fc",
    marginBottom: 8,
    borderRadius: 4,
    alignItems: "center",
  },

  botaoExcluir: {
    backgroundColor: "darkred",
    padding: 4,
    borderRadius: 4,
  },
});
