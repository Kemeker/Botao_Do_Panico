import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Linking, Animated, Easing } from 'react-native'
import { Feather } from '@expo/vector-icons'

function CustomButton({ contatos = [] }) {
  const pulse = new Animated.Value(1)

  const startPulseAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulse, {
          toValue: 1.3,
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true
        }),
        Animated.timing(pulse, {
          toValue: 1,
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true
        })
      ])
    ).start()
  }

  React.useEffect(() => {
    startPulseAnimation()
  }, [])

  const enviarMensagemSOS = () => {
    contatos.forEach(contato => {
      const mensagem = "🚨 Este é um alerta de SOS. Estou em perigo e preciso de ajuda imediatamente. (APENAS UM TESTE DO APLICATIVO)"
      const numero = `+55${contato.phoneNumber.replace(/[^0-9]/g, '')}`
      const url = `https://api.whatsapp.com/send/?phone=${numero}&text=${encodeURIComponent(mensagem)}&type=phone_number&app_absent=0`

      Linking.canOpenURL(url)
        .then(supported => {
          if (supported) {
            Linking.openURL(url)
          } else {
            console.log('Não foi possível abrir o WhatsApp para o número:', numero)
          }
        })
        .catch(err => console.error('Erro ao abrir o WhatsApp:', numero, err))
    })
  }

  return (
    <View style={styles.container}>
      {/* efeito de anel pulsante */}
      <Animated.View
        style={[
          styles.pulseRing,
          {
            transform: [{ scale: pulse }]
          }
        ]}
      />

      {/* botão de emergência */}
      <TouchableOpacity style={styles.button} onPress={enviarMensagemSOS} activeOpacity={0.8}>
        <Feather name="alert-triangle" size={28} color="white" />
        <Text style={styles.sosText}>SOS</Text>
        <Text style={styles.subText}>EMERGÊNCIA</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pulseRing: {
    position: 'absolute',
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: 'rgba(239, 68, 68, 0.2)', // red-500 transparente
  },
  button: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#ef4444', // from-red-500
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#ef4444',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    borderWidth: 4,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  sosText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 4,
  },
  subText: {
    fontSize: 12,
    color: 'white',
    opacity: 0.9,
    marginTop: 2,
  },
})

export default CustomButton
