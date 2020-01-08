import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


class ResultScreen extends React.Component {
  state = {
    jankenID: 0,
    opponentJankenID: 0
  }

  componentDidMount() {
    let tempOpponentJankenID = Math.floor( Math.random() * (2 + 1 - 0) ) + 0 ;
    this.setState({jankenID: this.props.navigation.state.params.jankenID})
    this.setState({opponentJankenID: tempOpponentJankenID})
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 40}}>ぽい！</Text>
        <Text style={{fontSize: 40}}>{this.state.jankenID}</Text>
        <Text style={{fontSize: 40}}>{this.state.opponentJankenID}</Text>
      </View>
    );
  }
}


export default ResultScreen;