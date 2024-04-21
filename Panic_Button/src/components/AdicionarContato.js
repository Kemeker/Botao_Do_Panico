import React, { useState } from "react"
import { View, TextInput, Button, StyleSheet } from 'react-native'

function AdicionarContato({ onAdicionar }) { // onAdicionar precisa ser passado como prop
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    
    const handleAdicionar = () => {
        if (name && phoneNumber) {
          const novoContato = { id: Date.now(), name, phoneNumber };
          onAdicionar(novoContato);
          setName('');
          setPhoneNumber('');
        }
    }    

    return(
        
        
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