import React from 'react'; 
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";


function ContactScreen({ navigation }) {
    const [name, setName] = React.useState('');
    const [phoneNumber, setPhoneNumber] = React.useState('');
  
    const handleSaveContact = () => {
      // Implemente a lógica para salvar o contato aqui, por exemplo, enviar para o backend
      // Reset os campos de entrada após salvar
      setName('');
      setPhoneNumber('');
    };
  
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
  
        <TouchableOpacity style={styles.button} onPress={handleSaveContact}>
          <Text>Salvar Contato</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor:'#1D84FA'
      
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
  });
  
  export default ContactScreen;