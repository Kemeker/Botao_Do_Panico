import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import HomeScreen from './screens/HomeScreen';
import ContactScreen from './screens/ContactScreens.js';

const Stack = createStackNavigator();

async function loadFonts() {
  await Font.loadAsync({
    'nome-da-fonte': require('./caminho-para-a-fonte.ttf'),
  });
}


export default function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setLoadingComplete(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Contato" component={ContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
