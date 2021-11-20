import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from './src/MagicMemory/HomeScreen';
export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider >
        <HomeScreen />
      </SafeAreaProvider>
    </NavigationContainer>
  )
}
