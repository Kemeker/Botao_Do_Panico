import React, { useEffect, useState,  } from 'react'
import { View,  StyleSheet, Text, ImageBackground} from 'react-native'
import AdicionarContato from '../components/AdicionarContato'
import ListarContatos from '../components/ListarContatos'

function GerenciamentoDeContatos ({ navigation, route }) {
  const [contatos, setContatos]  = useState([])
  const [mensagem, setMensagem] = useState('')
  const contatoEditado = route.params?.contatoEditado

  useEffect(() => {
    if (contatoEditado) {
        const novosContatos = contatos.map(cont => {
            if (cont.id === contatoEditado.id) {
                return contatoEditado;
            }
            return cont;
        });
        setContatos(novosContatos);
    }
}, [contatoEditado])

  // funçao para atualizar a lista de contatos apos uma adiçao ou exclusao
  const atualizarContatos = (novoContato) => {
    setContatos([...contatos, novoContato])
    setMensagem('Contato adicionado!')
    setTimeout(() => setMensagem(''), 2000)  // Limpa a mensagem após 2 segundos
  }  

  // funçao para excluir contatos
  const excluirContato = (id) => {
    //logica para excluir
    const filtrados = contatos.filter(contato => contato.id !== id )
    setContatos(filtrados)
    // adicionar chamada para API se necessario 
  }

  // funçao para editar contato
  const editarContato = (contato) => {
    navigation.navigate('Editar Contato', {contato})
  }

 

  return (
    
      <ImageBackground source={{uri: 'https://www.securityreport.com.br/wp-content/uploads/2016/11/shutterstock_266676590_Sashkin.jpg' }} style={styles.container}>
        <View style={styles.container}> 
          <AdicionarContato onAdicionar={atualizarContatos} />
          {mensagem ? <Text>{mensagem}</Text> : null}
          <ListarContatos 
            contatos={contatos} 
            onEditar={editarContato} 
            onExcluir={excluirContato} 
            />
          
        </View>
      </ImageBackground>
  );
}

// estilos do componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  }
})

export default GerenciamentoDeContatos
