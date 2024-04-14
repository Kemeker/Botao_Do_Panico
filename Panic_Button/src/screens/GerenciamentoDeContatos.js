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

  // funçao para excluir contatos
  const excluirContato = (id) => {
    //logica para excluir
    const novosContatos = contatos.filter(contato => contato.id !== id )
    setContatos(novosContatos)
    // adicionar chamada para API se necessario 
  }

  // funçao para editar contato
  const editarContato = (contato) => {
    navigation.navigate('EditarContato', {contato})
  }

  return (
    

      <View style={styles.container}> 
        <AdicionarContato onAdicionar={atualizarContatos} />
        <ListarContatos contatos={contatos} onExcluir={excluirContato} onEditar={editarContato} />
        
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
