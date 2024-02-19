import { StatusBar } from "react-native";
import Home from "./src/screens/Home";

/* manter a tela splash visível enquanto não programarmos a ação de ocultar */

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Home />
    </>
  );
}
