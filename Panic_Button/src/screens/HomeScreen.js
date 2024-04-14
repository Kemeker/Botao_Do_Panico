import React from "react"
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from "react-native"
import CustomButton from '../components/Button_Panic.js'



function HomeScreen({ navigation }) {
  function Adicionar_Contatos(){
    navigation.navigate('Contato')
  }
  function ListaDeContatos(){
    navigation.navigate('ListaDeContatos')
  }
  function ExcluirContato(){
    navigation.navigate('ExcluirContato')
  }
 

  return (
      <ImageBackground source={{uri: 'https://www.securityreport.com.br/wp-content/uploads/2016/11/shutterstock_266676590_Sashkin.jpg' }} style={styles.container} >
        <View style={styles.container} >
            <View style={styles.buttonFunc}>
              <TouchableOpacity onPress={Adicionar_Contatos} style={styles.button} >
                <Text style={styles.buttonText}>Cadastrar Contato</Text>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={ListaDeContatos} style={styles.button} >
                <Text style={styles.buttonText}>Lista de Contatos</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={ExcluirContato} style={styles.button} >
                <Text style={styles.buttonText}>Excluir Contato</Text>
              </TouchableOpacity>
              
              
            </View>
            <View style={styles.buttonSOS}> 
              <CustomButton />
            </View>
          
        </View>
      </ImageBackground>
      
    
   
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 0,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: 'column',
    
    
    
  },
  button: {
    backgroundColor: '#3326C7',
    alignItems: 'center',
    justifyContent: 'center', 
    padding: 10,
    width: 150,
    height:50,
    borderRadius: 8,
    margin: 8,
    
    
  },
  buttonText: {
    color: 'white',
  },  

  buttonFunc: {
    
    marginBottom: 100,
  },
  buttonSOS: {
    marginBottom: 250

  }

})


export default HomeScreen;
