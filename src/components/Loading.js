import { StyleSheet, View, ActivityIndicator } from "react-native";
import React from "react";

export default function Loading() {
  return (
    <View style={estilos.viewLoading}>
      <ActivityIndicator size="large" color="#fad540" />
    </View>
  );
}

const estilos = StyleSheet.create({
  viewLoading: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});
