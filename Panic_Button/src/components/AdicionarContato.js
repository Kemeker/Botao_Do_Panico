import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from 'react-native';

function AdicionarContato({ onAdicionar }) { // onAdicionar precisa ser passado como prop
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    
    const handleAdicionar = () => {
        if (nome && telefone) {
          const novoContato = { id: Date.now(), nome, telefone };
          onAdicionar(novoContato);
          setNome('');
          setTelefone('');
        }
    }    

    return(
        
        
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
                title="Adicionar"
                onPress={handleAdicionar }
                
            />
        </View>
           



         
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 2,
        borderRadius: 8,
        padding: 10,
    },
   
});

export default AdicionarContato;




/*
Campo de entrada para o nome do contato.
Campo de entrada para o número de telefone.
Botão para salvar o novo contato.
Função para enviar o contato para a API ou adicionar à lista local
*/