import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import CustomButton from '../components/Button_Panic.js'



function HomeScreen({ navigation }) {
  function TelaDeContatos(){
    navigation.navigate('Contato');
  };
 

  return (
    
      <View style={styles.container} >
          <View style={styles.buttonFunc}>
            <TouchableOpacity onPress={TelaDeContatos} style={styles.button} >
              <Text style={styles.buttonText}>Cadastrar Contato</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={TelaDeContatos} style={styles.button} >
              <Text style={styles.buttonText}>Meus Contatos</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={TelaDeContatos} style={styles.button} >
              <Text style={styles.buttonText}>Excluir Contato</Text>
            </TouchableOpacity>
            
            
          </View>
          <View style={styles.buttonSOS}> 
            <CustomButton />
          </View>
        
      </View>
      
      
    
   
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 0,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'black',
    flexDirection: 'column',
    
    
    
  },
  button: {
    backgroundColor: '#007A78',
    alignItems: 'center',
    justifyContent: 'center', 
    padding: 10,
    width: 150,
    height:50,
    borderRadius: 8,
    margin: 8,
    
    
  },
  buttonText: {
    color: '#FFC745',
  },  

  buttonFunc: {
    
    marginBottom: 100,
  },
  buttonSOS: {
    marginBottom: 250

  }

})


export default HomeScreen;
