import React from "react";
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';

function ListarContatos({ contatos, onExcluir, onEditar }) {
  const renderItem = ({ item }) => (
    
    
    <View style={styles.itemContainer}>
      <View style={styles.contactInfo}>
        <Text style={styles.itemText}>{item.name}</Text>
        <Text style={styles.itemText}>{item.phoneNumber}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.buttonEditar} onPress={() => onEditar(item)}>
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonExcluir} onPress={() => onExcluir(item.id)}>
          <Text style={styles.buttonText}>Excluir</Text>
        </TouchableOpacity>
      </View>
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
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  contactInfo: {
    flex: 1,
    marginRight: 10, // Add space between contact info and buttons
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonEditar: {
    backgroundColor: '#007BFF', // Blue color for buttons
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginHorizontal: 5, // Space between buttons
  },
  buttonExcluir: {
    backgroundColor: 'red', // Blue color for buttons
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  itemText: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
  }
});

export default ListarContatos;



