import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function CustomButton() {
  return (
    <TouchableOpacity style={styles.button}>
      <View style={styles.back}></View>
      <View style={styles.front}>
        
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 180,
    height: 180,
    borderRadius: 100,
    position: 'relative',
    backgroundColor: 'transparent', // Ajuste a cor de fundo aqui
    borderWidth: 1, // Ajuste a largura da borda aqui
    borderColor: 'rgb(150, 50, 60)', // Ajuste a cor da borda aqui
  },
  back: {
    backgroundColor: 'rgb(150, 50, 60)', // Cor de fundo do "back" do botão
    borderRadius: 100,
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
  },
  front: {
    backgroundColor: 'transparent', // Cor de fundo do "front" do botão
    borderRadius: 100,
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 12, // Ajuste o tamanho da fonte aqui
    fontWeight: '600',
    fontFamily: 'inherit',
    color: 'rgb(150, 50, 60)', // Cor do texto
    transform: [{ translateY: -15 }],
  },
  buttonText: {
    color: 'white', // Cor do texto
  },
});

export default CustomButton;