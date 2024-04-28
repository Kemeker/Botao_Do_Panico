import axios from "axios";
import React, { useState } from "react"
import { View, TextInput, Button, StyleSheet, ImageBackground } from 'react-native'

function EditarContato({ route, navigation }){
    const { contato } = route.params;
    const [name, setName] = useState(contato.name)
    const [phoneNumber, setPhoneNumber] = useState(contato.phoneNumber)
    
   
    

    const editarContato = () => {
        // logica para editar contato
        const contatoEditado = { ...contato, name, phoneNumber } 

        // chama a API para atualizar contato
        axios.put(`http://192.168.2.110:3000/api/contacts/${contato.id}`, contatoEditado)
            .then(response => {
                // Atualização bem-sucedida, você pode querer atualizar o estado global ou navegar para outra tela
                alert('Contato atualizado com sucesso!');
                navigation.goBack(); // Volta para a tela anterior após edição
            })
            .catch(error => {
            // Houve um erro na atualização
                console.error('Erro ao atualizar o contato:', error);
                alert('Erro ao atualizar o contato.');
            });  
    }
    return(
            
        <ImageBackground source={{uri: 'https://itforum.com.br/wp-content/uploads/2021/05/confianc%CC%A7a-trabalho-2.png' }} style={styles.container}>   
            <View>
                
                <TextInput
                    style={styles.input}
                    placeholder="Nome"
                    value={name}
                    onChangeText={setName}
                />
                
                <TextInput
                    style={styles.input}
                    placeholder="Telefone"
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                    keyboardType="phone-pad" // Teclado numérico para telefone
                />
                <Button
                    title="Salvar"
                    onPress={editarContato}
                />
            </View>
        </ImageBackground>     
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,

    },
    
    
    input: {
        height: 40,
        margin: 12,
        borderWidth: 2,
        padding: 10,
    },
    
});
    
export default EditarContato