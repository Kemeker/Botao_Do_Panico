import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../Panic_Button/src/screens/HomeScreen.js'
import GerenciamentoDeContatos from './src/screens/GerenciamentoDeContatos.js'
import EditarContato from './src/components/EditarContato.js'


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Botao de Emergencia" component={HomeScreen}/>
        <Stack.Screen name="Gerenciamento De Contatos" component={GerenciamentoDeContatos}/>
        <Stack.Screen name="Editar Contato" component={EditarContato}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
