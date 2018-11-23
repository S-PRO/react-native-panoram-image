import React, { Component } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View
} from 'react-native';
import PanoramImage from "react-native-panoram-image";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

type Props = {};
export default class App extends Component<Props> {

  componentDidMount() {
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => PanoramImage.show("Porting library success", PanoramImage.SHORT)}
        >
          <Text style={styles.welcome}>For launch porting library just</Text>
          <Text style={styles.welcome}>CLICK ON ME</Text>
        </TouchableOpacity>
        <Text style={styles.instructions}>gjiazhe/PanoramaImageView</Text>
      </View>
    );
  }
}
