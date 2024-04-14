import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native'
import tw from 'tailwind-react-native-classnames'

function CustomButton({ onPress, title }) {

  return (
    <>

    
    <View>
      <Text style={tw`text-lg text-white`}>Precione para pedir ajuda</Text>
    </View>
    <TouchableOpacity
        
      onPress={onPress}
      style={tw`bg-red-500 px-10 py-3 rounded-full items-center justify-center shadow-lg`}
      activeOpacity={0.7}
    >
      
      <Text style={tw`text-white text-lg uppercase tracking-wide font-bold`}>S.O.S
        {title}
      </Text>
      
    </TouchableOpacity>
    
   
  </>

   );
}

const styles_1 = StyleSheet.create({
  button: {
    width: 200,
    height: 200,
    borderRadius: 100,
    position: 'relative',
    backgroundColor: 'transparent', 
    borderWidth: 18, 
    borderColor: 'red'
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
  }

})


export default CustomButton


