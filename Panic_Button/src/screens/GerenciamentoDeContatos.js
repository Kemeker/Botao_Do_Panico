import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput, FlatList } from 'react-native'
import AdicionarContato from '../components/AdicionarContato'
import ListarContatos from '../components/ListarContatos'

function GerenciamentoDeContatos ({ navigation }) {
  const [contatos, setContatos]  = useState([])

  // funçao para atualizar a lista de contatos apos uma adiçao ou exclusao
  const atualizarContatos = (novosContatos) => {
    setContatos(novosContatos)
  }

  return (
    <View style={styles.container}>
      <AdicionarContato onAdicionar={atualizarContatos} />
      <ListarContatos contatos={contatos} onAtualizar={atualizarContatos} />
      

    </View>
    
  );
}

// estilos do componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  }
})

export default GerenciamentoDeContatos
