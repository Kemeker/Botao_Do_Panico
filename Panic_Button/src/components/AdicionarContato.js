import React, { useState, useEffect }  from "react"
import { View, TextInput, Button } from 'react-native'


function AdicionarContato(){
    const [novoContato, setNovoContato] = useState({nome: '', telefone: ''})
    
    const adicionarContato = () => {
        // logica para adicionar contatos
        onAdicionnar([...ConstantSourceNode, novoContato])
        setNovoContato({nome: '', Telefone: '' }) // resetar o estado apos adicionar
    }

    return(
        <View>
            <TextInput>Nome</TextInput>
            <TextInput>telefone</TextInput>
            <Button>Adicionar</Button>
        </View>

    )
}
export default AdicionarContato



/*
Campo de entrada para o nome do contato.
Campo de entrada para o número de telefone.
Botão para salvar o novo contato.
Função para enviar o contato para a API ou adicionar à lista local
*/