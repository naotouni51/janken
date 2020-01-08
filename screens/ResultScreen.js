import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


class ResultScreen extends React.Component {
  state = {
    jankenID: 0
  }

  componentDidMount() {
    this.setState({jankenID: this.props.navigation.state.params.jankenID})
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text>ぽい！</Text>
        <Text>{this.state.jankenID}</Text>
      </View>
    );
  }
}


export default ResultScreen;