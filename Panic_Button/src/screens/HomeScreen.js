import React from "react"
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native"
import { Feather } from '@expo/vector-icons' // Ícones compatíveis com Expo
import CustomButton from "../components/Button_Panic"

function HomeScreen({ navigation }) {
  const handleContactsClick = () => {
    navigation.navigate('Gerenciamento De Contatos')
  }

  const handleLocationClick = () => {
    console.log("Navigate to Location")
  }

  const handleSettingsClick = () => {
    console.log("Navigate to Settings")
  }

  const handleEmergencyClick = () => {
    console.log("Emergency button pressed!")
  }

  return (
    <ImageBackground
      backgroundColor="rgb(12, 7, 63)"
      style={styles.container}
    >
      {/* Header */}
      <View style={styles.header}>
        <Feather name="shield" size={40} color="white" />
        <Text style={styles.title}>DBV Security</Text>
        <Text style={styles.subtitle}>Sua segurança em primeiro lugar</Text>
      </View>

      {/* Ações rápidas */}
      <View style={styles.actionsRow}>
        <TouchableOpacity style={styles.card} onPress={handleContactsClick}>
          <Feather name="users" size={24} color="white" />
          <Text style={styles.cardText}>Contatos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={handleLocationClick}>
          <Feather name="map-pin" size={24} color="white" />
          <Text style={styles.cardText}>Localização</Text>
        </TouchableOpacity>
      </View>

      {/* Botão de emergência */}
      <View style={styles.emergencyContainer}>
        <CustomButton onPress={handleEmergencyClick} />
      </View>

      {/* Ações secundárias */}
      <View style={styles.secondaryActions}>
        <TouchableOpacity style={styles.secondaryCard} onPress={handleSettingsClick}>
          <Feather name="settings" size={20} color="white" />
          <Text style={styles.secondaryText}>Configurações</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryCard}>
          <Feather name="phone" size={20} color="white" />
          <Text style={styles.secondaryText}>Linha Direta</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
    paddingHorizontal: 24,
    paddingTop: 60,
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#cbd5e1',
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 40,
  },
  card: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 8,
    alignItems: 'center',
  },
  cardText: {
    color: 'white',
    marginTop: 8,
    fontSize: 14,
  },
  emergencyContainer: {
    marginBottom: 40,
  },
  secondaryActions: {
    width: '100%',
    marginTop: 'auto',
    marginBottom: 20,
  },
  secondaryCard: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: 16,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  secondaryText: {
    color: 'white',
    marginLeft: 10,
    fontSize: 16,
  },
})

export default HomeScreen
