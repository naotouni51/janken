import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from "react-navigation-tabs";

import JankenScreen from './screens/JankenScreen';
import ResultScreen from './screens/ResultScreen';
import SettingScreen from './screens/SettingScreen';


export default class App extends React.Component {
  render() {

    const JankenStack = createStackNavigator({
      janken: {
        screen: JankenScreen,
        navigationOptions: {
          headerTitle: 'じゃんけん'
        }
      },
      detail: { screen: ResultScreen }
    });

    JankenStack.navigationOptions = ({ navigation }) => {
      return {
        tabBarVisible: (navigation.state.index === 0)
      };
    };
    
    const SettingStack = createStackNavigator({
      setting: { 
        screen: SettingScreen,
        navigationOptions: {
          headerTitle: '設定'
        }
      },
    });
    
    const MainTab = createBottomTabNavigator({
      JankenStack: { screen: JankenStack },
      SettingStack: { screen: SettingStack }
    });

    const NavigatorTab = createAppContainer(MainTab);

    return (
      <View style={styles.container}>
        <NavigatorTab />  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center"
  }
});
