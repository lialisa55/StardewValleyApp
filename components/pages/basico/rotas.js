import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Saude from './saude';
import Basico from './basico';
import Player from './player';
import Energia from './Energia';
import Npcs from './npcs';

const Stack = createStackNavigator();

export default function Rotas() {
  return (
   
      <Stack.Navigator>
        <Stack.Screen name="Basico" component={Basico} />
        <Stack.Screen name="Saude" component={Saude} />
        <Stack.Screen name="Player" component={Player} />        
        <Stack.Screen name="Npcs" component={Npcs} />     
        <Stack.Screen name="Energia" component={Energia} />
      </Stack.Navigator>

  );
}