import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, FlatList } from 'react-native';

function ContactScreen({ navigation }) {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [contacts, setContacts] = useState([]);
  
  // Função para criar um novo contato
  const handleCreateContact = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, phoneNumber }),
      });

      if (response.ok) {
        // Se o contato for criado com sucesso, atualize a lista de contatos
        loadContacts();
        setName('');
        setPhoneNumber('');
      } else {
        // Lidar com erros aqui, por exemplo, exibir uma mensagem de erro
        console.error('Erro ao criar o contato.');
      }
    } catch (error) {
      console.error('Erro ao criar o contato:', error);
    }
  };

  // Função para excluir um contato
  const handleDeleteContact = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/contacts/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Se o contato for excluído com sucesso, atualize a lista de contatos
        loadContacts();
      } else {
        // Lidar com erros aqui, por exemplo, exibir uma mensagem de erro
        console.error('Erro ao excluir o contato.');
      }
    } catch (error) {
      console.error('Erro ao excluir o contato:', error);
    }
  };

  // Função para carregar a lista de contatos
  const loadContacts = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/contacts');
      if (response.ok) {
        const data = await response.json();
        setContacts(data);
      } else {
        // Lidar com erros aqui, por exemplo, exibir uma mensagem de erro
        console.error('Erro ao carregar a lista de contatos.');
      }
    } catch (error) {
      console.error('Erro ao carregar a lista de contatos:', error);
    }
  };

  useEffect(() => {
    // Carregar a lista de contatos quando a tela for carregada
    loadContacts();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Nome:</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setName(text)}
        value={name}
        placeholder="Digite o nome do contato"
      />

      <Text>Número de Telefone:</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setPhoneNumber(text)}
        value={phoneNumber}
        placeholder="Digite o número de telefone"
      />

      <TouchableOpacity style={styles.button} onPress={handleCreateContact}>
        <Text>Salvar Contato</Text>
      </TouchableOpacity>

      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.contactItem}>
            <Text>{item.name}</Text>
            <Text>{item.phoneNumber}</Text>
            <TouchableOpacity onPress={() => handleDeleteContact(item.id)}>
              <Text style={styles.deleteButton}>Excluir</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'black',
  },
  input: {
    backgroundColor: 'white',
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
  button: {
    backgroundColor: 'red',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  contactItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'gray',
    paddingVertical: 8,
  },
  deleteButton: {
    color: 'red',
    fontWeight: 'bold',
  },
});

export default ContactScreen;
