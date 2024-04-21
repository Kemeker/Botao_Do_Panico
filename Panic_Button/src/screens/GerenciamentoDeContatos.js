import React, { useEffect, useState,  } from 'react'
import { View,  StyleSheet, Text, ImageBackground} from 'react-native'
import AdicionarContato from '../components/AdicionarContato'
import ListarContatos from '../components/ListarContatos'
import axios from 'axios'

function GerenciamentoDeContatos ({ navigation, route }) {
  const [contatos, setContatos]  = useState([])
  const [mensagem, setMensagem] = useState('')
  const contatoEditado = route.params?.contatoEditado

  useEffect(() => {
    axios.get('http://192.168.2.110:3000/api/contacts')
      .then(response => {
        setContatos(response.data); // Atualiza o estado com os contatos recebidos
      })
      .catch(error => {
        console.error('Erro ao buscar contatos:', error);
        setMensagem('Erro ao buscar contatos.');
      });
  }, [contatoEditado]);

  // funçao para atualizar a lista de contatos apos uma adiçao ou exclusao
  const atualizarContatos = (novoContato) => {
    axios.post('http://192.168.2.110:3000/api/contacts', novoContato)
      .then(response => {
        setContatos([...contatos, response.data]); // Adiciona o novo contato à lista
        setMensagem('Contato adicionado!');
        setTimeout(() => setMensagem(''), 2000); // Limpa a mensagem após 2 segundos
      })
      .catch(error => {
        console.error('Erro ao adicionar o contato:', error);
        setMensagem('Erro ao adicionar o contato.');
      });
  }; 

  // funçao para excluir contatos
  const excluirContato = (id) => {
    axios.delete(`http://192.168.2.110:3000/api/contacts/${id}`)
    .then(() => {
      const filtrados = contatos.filter(contato => contato.id !== id);
      setContatos(filtrados);
      setMensagem('Contato excluído!');
      setTimeout(() => setMensagem(''), 2000); // Limpa a mensagem após 2 segundos
    })

    .catch(error => {
      console.error('Erro ao excluir o contato:', error);
      setMensagem('Erro ao excluir o contato.');
    })
    
  }

  // funçao para editar contato
  const editarContato = (contato) => {
    navigation.navigate('Editar Contato', {contato})
  }

 

  return (
    
      <ImageBackground source={{uri: 'https://itforum.com.br/wp-content/uploads/2021/05/confianc%CC%A7a-trabalho-2.png' }} style={styles.container}>
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
