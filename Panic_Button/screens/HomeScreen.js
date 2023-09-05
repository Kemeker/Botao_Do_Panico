import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import CustomButton from '../src/components/Button_Panic.js'

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Botao do Panico</Text>
      <CustomButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;

