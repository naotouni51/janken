import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


class JankenScreen extends React.Component {
  state = {
    jankenID: 0
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 40}}>じゃーんけーん...</Text>

        <TouchableOpacity style={{backgroundColor: 'greenyellow', width: '50%', marginBottom: 10}} onPress={() => this.props.navigation.navigate('result')}>
          <Text style={{fontSize: 40, alignSelf: 'center'}}>ぐー</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{backgroundColor: 'greenyellow', width: '50%', marginBottom: 10}} onPress={() => this.props.navigation.navigate('result')}>
          <Text style={{fontSize: 40, alignSelf: 'center'}}>ちょき</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{backgroundColor: 'greenyellow', width: '50%', marginBottom: 10}} onPress={() => this.props.navigation.navigate('result')}>
          <Text style={{fontSize: 40, alignSelf: 'center'}}>ぱー</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


export default JankenScreen;