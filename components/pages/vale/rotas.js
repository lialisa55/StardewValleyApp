import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Deserto from './deserto';
import Floresta from './floresta';
import Montanha from './montanha';
import Pelicanos from './pelicanos';
import Vale from './vale';

const Stack = createStackNavigator();

export default function Rotas() {
  return (
   
      <Stack.Navigator>
        <Stack.Screen name="vale" component={Vale} />
        <Stack.Screen name="pelicanos" component={Pelicanos} />
        <Stack.Screen name="montanha" component={Montanha} />       
        <Stack.Screen name="deserto" component={Deserto} />         
        <Stack.Screen name="floresta" component={Floresta} />
      </Stack.Navigator>

  );
}