import React from "react"
import { View, FlatList } from 'react-native'


function ListarContatos({contatos, onAtualizar}){
    return(
        <View>
            <FlatList />
        </View>

    )
}

export default ListarContatos

/*
Lista (FlatList ou ScrollView) que exibe os contatos.
Cada item da lista deve ter botões ou opções para editar e excluir.
*/