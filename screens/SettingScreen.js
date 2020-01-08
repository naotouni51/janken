import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements'; // ←追記部分


class SettingScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text>This is SettingScreen</Text>
      </View>
    );
  }
}


export default SettingScreen;