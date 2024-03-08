import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";

export default function Separador() {
  return (
    <View style={estilos.viewSeparador}>
      <MaterialCommunityIcons name="movie-roll" size={24} color="black" />
      <MaterialCommunityIcons name="movie-roll" size={24} color="black" />
      <MaterialCommunityIcons name="movie-roll" size={24} color="black" />
    </View>
  );
}

const estilos = StyleSheet.create({
  viewSeparador: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    opacity: 0.5,
    verticalAlign: 8,
  },
});
