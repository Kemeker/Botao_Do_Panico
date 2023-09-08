import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import CustomButton from '../src/components/Button_Panic.js'

function HomeScreen({ navigation }) {
  const handleNavigateToContact = () => {
    navigation.navigate('Contato');
  };

  return (
    <View style={styles.container}>
      <Text>Botao de Emergencia</Text>
      <CustomButton />
      <TouchableOpacity
        style={styles.button}
        onPress={handleNavigateToContact}
      >
        <Text>Ir para a Tela de Contato</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#1D84FA'
  },
  button: {
    backgroundColor: 'blue',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
});

export default HomeScreen;
