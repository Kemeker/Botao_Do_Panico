import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native'
import { Linking } from 'react-native'
import tw from 'tailwind-react-native-classnames'

function CustomButton({ contatos }) {

  const enviarMensagemSOS = () => {
    contatos.forEach(contato => {
      const mensagem = "Este é um alerta de SOS. Estou em perigo e preciso de ajuda imediatamente. ( APENAS UM TESTE DO APLICATIVO) ";
      const FormatarNumeroParaCodigoPais = `+55${contato.phoneNumber.replace(/[^0-9]/g, '')}`
      const url = `https://api.whatsapp.com/send/?phone=${FormatarNumeroParaCodigoPais}&text=${encodeURIComponent(mensagem)}&type=phone_number&app_absent=0`
  

    


      Linking.canOpenURL(url)
      .then((supported) => {
        if (!supported) {
          console.log('Nao e possivel enviar mensagem para o contato: ', FormatarNumeroParaCodigoPais)
        }else {
          return Linking.openURL(url)
        }
      })
      .catch((err) => console.error('Ocorreu um erro ao abrir o WhatsApp para o número:', FormatarNumeroParaCodigoPais, err))
    })
  } 

  return (
   

   
      <View>
          <Text style={tw`text-lg text-white`}>Precione para pedir ajuda</Text>
        
          <TouchableOpacity
            
            onPress={enviarMensagemSOS}
            style={tw`bg-red-500 px-10 py-3 rounded-full items-center justify-center shadow-lg`}
            activeOpacity={0.7}
          >
          
          <Text style={tw`text-white text-lg uppercase tracking-wide font-bold`}>S.O.S</Text>
          
        </TouchableOpacity>
      </View>
   
  

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


