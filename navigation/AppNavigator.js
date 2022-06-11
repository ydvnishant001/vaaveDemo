import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PostListScreen from '../screens/PostListScreen';
import PostScreen from '../screens/PostScreen';
import UserScreen from '../screens/UserScreen';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="PostListScreen" component={PostListScreen} />
        <Stack.Screen name="PostScreen" component={PostScreen} />
        <Stack.Screen name="UserScreen" component={UserScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;