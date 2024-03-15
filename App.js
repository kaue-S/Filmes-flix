import { Button, StatusBar } from "react-native";
import Home from "./src/screens/Home";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Sobre from "./src/screens/Sobre";
import Privacidade from "./src/screens/Privacidade";
import BuscarFilmes from "./src/screens/BuscarFilmes";
import Resultados from "./src/screens/Resultados";
import Detalhes from "./src/screens/Detalhes";
import Favoritos from "./src/screens/Favoritos";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: { backgroundColor: "#5451a6" },
            headerTintColor: "white",
          }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Buscar Filmes"
            component={BuscarFilmes}
            options={{ title: "Qual filme deseja encontrar?" }}
          />

          <Stack.Screen name="Privacidade" component={Privacidade} />

          <Stack.Screen
            name="Sobre"
            component={Sobre}
            options={{ title: "Conheça nosso App" }}
          />

          <Stack.Screen name="Resultados" component={Resultados} />
          <Stack.Screen name="Favoritos" component={Favoritos} />

          <Stack.Screen
            name="Detalhes"
            component={Detalhes}
            options={({ navigation }) => {
              return {
                headerRight: () => (
                  <Button
                    color="#5451a6"
                    onPress={() => navigation.navigate("Home")}
                    title="Home"
                  />
                ),
              };
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
