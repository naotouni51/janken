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

  handFunc(id) {
    if (id == 0) {
      return <Text>ぐー</Text>
    } else if (id == 1) {
      return <Text>ちょき</Text>
    } else if (id == 2) {
      return <Text>ぱー</Text>
    }
  }

  resultFunc(jankenID, opponentJankenID) {
    let resultNumber = (opponentJankenID - jankenID + 3) % 3
    if (resultNumber == 0) {
      return <Text style={{fontSize: 60, marginTop: 20, backgroundColor: 'greenyellow', color: 'gray'}}>引き分け</Text>
    } else if (resultNumber == 1) {
      return <Text style={{fontSize: 60, marginTop: 20, backgroundColor: 'red', color: 'white'}}>勝ち</Text>
    } else if (resultNumber == 2) {
      return <Text style={{fontSize: 60, marginTop: 20, backgroundColor: 'skyblue', color: 'gray'}}>負け</Text>
    }
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 40}}>ぽい！</Text>
        <Text style={{fontSize: 40}}>自分 : {this.handFunc(this.state.jankenID)}</Text>
        <Text style={{fontSize: 40}}>相手 : {this.handFunc(this.state.opponentJankenID)}</Text>
        {this.resultFunc(this.state.jankenID, this.state.opponentJankenID)}
      </View>
    );
  }
}


export default ResultScreen;