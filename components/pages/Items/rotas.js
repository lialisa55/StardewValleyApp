import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Cozinha from './cozinha';
import Ferramentas from './ferramentas';
import Items from './items';
import Pesca from './pesca';

const Stack = createStackNavigator();

export default function Rotas() {
  return (
   
      <Stack.Navigator>
        <Stack.Screen name="items" component={Items} />
        <Stack.Screen name="Cozinha" component={Cozinha} />
        <Stack.Screen name="Pesca" component={Pesca} />       
        <Stack.Screen name="Ferramentas" component={Ferramentas} />    
      </Stack.Navigator>

  );
}