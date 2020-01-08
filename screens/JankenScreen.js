import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


class JankenScreen extends React.Component {

  jankenFunc(jankenID) {
    this.props.navigation.navigate('result', {jankenID, jankenID})
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 40}}>じゃーんけーん...</Text>

        <TouchableOpacity style={{backgroundColor: 'blue', width: 150, borderRadius: 75, marginBottom: 10}} onPress={() => this.jankenFunc(0)}>
          <Text style={{fontSize: 40, alignSelf: 'center', color: 'white'}}>ぐー</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{backgroundColor: 'blue', width: 150, borderRadius: 75, marginBottom: 10}} onPress={() => this.jankenFunc(1)}>
          <Text style={{fontSize: 40, alignSelf: 'center', color: 'white'}}>ちょき</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{backgroundColor: 'blue', width: 150, borderRadius: 75,  marginBottom: 10}} onPress={() => this.jankenFunc(2)}>
          <Text style={{fontSize: 40, alignSelf: 'center', color: 'white'}}>ぱー</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


export default JankenScreen;