import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator} from 'react-navigation'
import AuthScreen from './screens/AuthScreen'
import WelcomeScreen from './screens/WelcomeScreen'
import MapScreen from './screens/MapScreen';
import CardScreen from './screens/CardScreen';
import ReviewScreen from './screens/ReviewScreen';
import ResetScreen from './screens/ResetScreen';

export default class App extends React.Component {
  render() {
      const MainNavigator = createBottomTabNavigator({
        welcome: { screen: WelcomeScreen},
        auth: {screen: AuthScreen},
        main: {
          screen: createBottomTabNavigator({
            map: {screen: MapScreen},
            card: {screen: CardScreen},
            review: {
              screen : createStackNavigator({
                review: {screen: ReviewScreen},
                settings: {screen: ResetScreen}

              })
            }
          })
        }
      })

      const AppContainer = createAppContainer(MainNavigator)

    return (
        <AppContainer />
    );
  }
}

