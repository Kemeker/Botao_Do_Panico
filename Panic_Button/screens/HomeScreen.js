import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function HomeScreen( {navigation}){
    return (
        <View style={StyleSheet.container}>
            <Text>Botao do Panico</Text>
            <TouchableOpacity
            style={Styles.button}
            onPress={()=> {
                //Adicionar a logica do botao
                }}
                >
                    <Text style={styles.buttonText}>Pressione Aqui</Text>
                </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      marginTop: 20,
      padding: 10,
      backgroundColor: 'blue',
      borderRadius: 5,
    },
    buttonText: {
      color: 'white',
    },
  });
  
  export default HomeScreen;