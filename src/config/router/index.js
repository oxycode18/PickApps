import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  HomePage,
  NewsDetail,
  Orders,
  OrdersDetail,
  Inbox,
  Help,
  Account,
  MapComponent,
  Splash,
  Login,
  Register,
  WelcomeAuth,
  InputLokasi,
  PupOri,
  PupTernak,
  PupMaterial,
  PupTertutup,
} from '../../containers/pages';

const Stack = createStackNavigator();
const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="NewsDetail" component={NewsDetail} />
        <Stack.Screen name="Orders" component={Orders} />
        <Stack.Screen name="OrdersDetail" component={OrdersDetail} />
        <Stack.Screen name="Inbox" component={Inbox} />
        <Stack.Screen name="Help" component={Help} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="MapComponent" component={MapComponent} />
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="WelcomeAuth" component={WelcomeAuth} />
        <Stack.Screen name="InputLokasi" component={InputLokasi} />
        <Stack.Screen name="PupOri" component={PupOri} />
        <Stack.Screen name="PupTernak" component={PupTernak} />
        <Stack.Screen name="PupMaterial" component={PupMaterial} />
        <Stack.Screen name="PupTertutup" component={PupTertutup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;