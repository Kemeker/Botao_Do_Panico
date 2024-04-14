import React from "react";
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';

function ListarContatos({ contatos, onExcluir, onEditar }) {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.nome}</Text>
      <Text style={styles.itemText}>{item.telefone}</Text>
      <TouchableOpacity onPress={() => onEditar(item)}>
        <Text style={styles.buttonText}>Editar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onExcluir(item.id)}>
        <Text style={styles.buttonText}>Excluir</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={contatos}
      keyExtractor={item => item.id.toString()}
      renderItem={renderItem}
      style={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  itemText: {
    flex: 1,
  },
  buttonText: {
    color: 'red',
  }
});

export default ListarContatos;


/*
Lista (FlatList ou ScrollView) que exibe os contatos.
Cada item da lista deve ter botões ou opções para editar e excluir.
*/
