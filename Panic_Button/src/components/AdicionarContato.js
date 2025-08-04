import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator
} from 'react-native'
import { Feather } from '@expo/vector-icons'

function AdicionarContato({ onAdicionar }) {
  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleAdicionar = async () => {
    if (!name.trim() || !phoneNumber.trim()) {
      alert('Por favor, preencha todos os campos.')
      return
    }

    setIsLoading(true)

    try {
      const novoContato = { id: Date.now(), name: name.trim(), phoneNumber: phoneNumber.trim() }
      await onAdicionar(novoContato)
      setName('')
      setPhoneNumber('')
    } catch (error) {
      console.error('Erro ao adicionar contato:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <View style={styles.card}>
      <Text style={styles.title}>
        <Feather name="plus" size={18} color={darkTheme.text} /> Adicionar Novo Contato
      </Text>

      {/* Nome */}
      <View style={styles.field}>
        <Text style={styles.label}>
          <Feather name="user" size={14} color={darkTheme.text} /> Nome
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome"
          placeholderTextColor={darkTheme.textMuted}
          value={name}
          onChangeText={setName}
        />
      </View>

      {/* Telefone */}
      <View style={styles.field}>
        <Text style={styles.label}>
          <Feather name="phone" size={14} color={darkTheme.text} /> Telefone
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o telefone"
          placeholderTextColor={darkTheme.textMuted}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
        />
      </View>

      {/* Botão */}
      <TouchableOpacity style={styles.button} onPress={handleAdicionar} disabled={isLoading}>
        {isLoading ? (
          <View style={styles.buttonContent}>
            <ActivityIndicator size="small" color={darkTheme.text} />
            <Text style={styles.buttonText}> Adicionando...</Text>
          </View>
        ) : (
          <View style={styles.buttonContent}>
            <Feather name="plus" size={16} color={darkTheme.text} />
            <Text style={styles.buttonText}> Adicionar Contato</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: darkTheme.card,
    borderColor: darkTheme.cardBorder,
    borderWidth: 1,
    borderRadius: 12,
    padding: 20,
    marginHorizontal: 20,
    marginTop: 30,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: darkTheme.text,
    marginBottom: 20,
  },
  field: {
    marginBottom: 16,
  },
  label: {
    color: darkTheme.text,
    marginBottom: 6,
    fontSize: 13,
    fontWeight: '500',
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: darkTheme.inputBorder,
    borderRadius: 8,
    paddingHorizontal: 12,
    color: darkTheme.text,
    backgroundColor: darkTheme.inputBg,
  },
  button: {
    backgroundColor: darkTheme.accent,
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    flexDirection: 'row',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: darkTheme.text,
    fontWeight: '600',
    fontSize: 14,
    marginLeft: 6,
  },
})

export default AdicionarContato
