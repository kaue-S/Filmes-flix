import { StatusBar } from "react-native";
import Home from "./src/screens/Home";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Sobre from "./src/screens/Sobre";
import Privacidade from "./src/screens/Privacidade";
import BuscarFilmes from "./src/screens/BuscarFilmes";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: { backgroundColor: "5451a6" },
            headerTintColor: "white",
          }}
        >
          <Stack.Screen
            name="Buscar Filmes"
            component={BuscarFilmes}
            options={{ title: "Qual filme deseja encontrar?" }}
          />

          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Privacidade" component={Privacidade} />
          <Stack.Screen
            name="Sobre"
            component={Sobre}
            options={{ title: "Conheça nosso App" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
