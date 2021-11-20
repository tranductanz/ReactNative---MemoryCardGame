import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewGame from './NewGame';
import MagicMemory from './MagicMemory';


const Stack = createNativeStackNavigator();
export const ScreenStack = {
    MagicMemory: 'MagicMemoryScreen',
    NewGame: 'NewGame',
}
export function HomeScreen({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name={ScreenStack.NewGame} component={NewGame} />
            <Stack.Screen options={{ headerShown: false }} name={ScreenStack.MagicMemory} component={MagicMemory} />
        </Stack.Navigator>
    );
}