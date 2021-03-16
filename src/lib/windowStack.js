import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from 'src/screens/Splash/Splash';

const Stack = createStackNavigator();

export default WindowStack = () => {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator mode="card" headerMode="none" initialRouteName={"Splash"} screenOptions={{
                    animationEnabled: true,
                    cardOverlayEnabled: true,
                    cardShadowEnabled: true
                }}>
                    <Stack.Screen name="Splash" component={Splash} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}