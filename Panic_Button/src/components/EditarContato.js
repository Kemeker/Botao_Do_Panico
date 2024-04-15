import React, { useState } from "react"
import { View, TextInput, Button, StyleSheet, ImageBackground } from 'react-native'

function EditarContato({ route, navigation }){
    const { contato } = route.params;
    const [nome, setNome] = useState(contato.nome);
    const [telefone, setTelefone] = useState(contato.telefone)
    
   
    

    const editarContato = () => {
        // logica para editar contato
        const contatoEditado = {...contato, nome, telefone} 

        // chama a API para atualizar contato
        navigation.navigate('Gerenciamento De Contatos',{ contatoEditado } )// voltar para a tela anterior apos ediçao
    }
    return(
            
        <ImageBackground source={{uri: 'https://itforum.com.br/wp-content/uploads/2021/05/confianc%CC%A7a-trabalho-2.png' }} style={styles.container}>   
            <View>
                
                <TextInput
                    style={styles.input}
                    placeholder="Nome"
                    value={nome}
                    onChangeText={setNome}
                />
                
                <TextInput
                    style={styles.input}
                    placeholder="Telefone"
                    value={telefone}
                    onChangeText={setTelefone}
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
    // Adicione mais estilos conforme necessário
});
    
export default EditarContato