import { StatusBar } from "react-native";
import Home from "./src/screens/Home";
import Sobre from "./src/screens/Sobre";
import Privacidade from "./src/screens/Privacidade";

/* manter a tela splash visível enquanto não programarmos a ação de ocultar */

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Home />
    </>
  );
}
