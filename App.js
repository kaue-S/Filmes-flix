import {
  Button,
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import logo from "./assets/images/logotipo.png";
import { Ionicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

/* manter a tela splash visível enquanto não programarmos a ação de ocultar */
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "Monoton-Regular": require("./assets/fonts/Monoton-Regular.ttf"),
  });

  /*Função atrelada ao hook usaCallback. Quando uma função está conectada ao useCallBack, garantimos que a referência dela é armazenada somente uma vez. */
  const aoAtualizarLayout = useCallback(async () => {
    /*Se estiver tudo ok com o carregamento */
    if (fontsLoaded || fontError) {
      /*Escondemos a splashscreen */
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={estilos.container} onLayout={aoAtualizarLayout}>
        <View style={estilos.viewLogo}>
          <Image source={logo} style={estilos.logo} />
          <Text style={estilos.titulo}> Filmes Flix</Text>
        </View>

        <View style={estilos.viewBotoes}>
          <Pressable style={estilos.botao}>
            <Text style={estilos.textoBotao}>
              <Ionicons name="search" size={24} color="black" />
              Buscar Filmes
            </Text>
          </Pressable>
          <Pressable style={estilos.botao}>
            <Text style={estilos.textoBotao}>
              <Fontisto name="favorite" size={24} color="black" />
              Favoritos
            </Text>
          </Pressable>
        </View>

        <View style={estilos.viewRodape}>
          <Button title="Privacidade" />
          <Button title="Sobre" />
        </View>
      </SafeAreaView>
    </>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(31,30,27)",
    paddingLeft: 10,
    paddingRight: 10,
  },

  viewLogo: {
    flex: 1,
    backgroundColor: "rgb(31,30,27)",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 15,
  },

  logo: {
    width: 250,
    height: 250,
  },

  titulo: {
    color: "white",
    fontFamily: "Monoton-Regular",
    fontSize: 36,
  },

  viewBotoes: {
    flex: 1,
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
  },

  botao: {
    borderRadius: 5,
    padding: 16,
    backgroundColor: "gold",
    alignItems: "center",
  },

  textoBotao: {},

  viewRodape: {
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "red",
    flex: 0.2,
  },
});
