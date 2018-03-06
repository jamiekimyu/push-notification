import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Image
} from 'react-native';
import OneSignal from 'react-native-onesignal';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      numOfPushNotifications: 0,
      latest: "push notification not received yet"
    }
  }

  componentDidMount() {
    OneSignal.configure({
      onNotificationOpened: this.handleNotification,
    });
  }

  handleNotification(message, data, isActive) {
    this.setState({
      numOfPushNotifications: this.state.numOfPushNotifications + 1,
      latest: message,
    })

  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{flex:1, height: undefined, width: undefined}}
          source={require('/images/logo.png')}
          resizeMode="contain"
        />
        <Text style={styles.text}>
          Created By: {"\n"}
          Jamie Yu
        </Text>
        <Text style={styles.text}>
          Date: {"\n"}
          March 5th, 2019
        </Text>
        <Text style={styles.text}>
          Number of Push Notifications: {"\n"}
          {this.state.numOfPushNotifications}
        </Text>
        <Text style={styles.text}>
          Latest Push Content: {"\n"}
          {this.state.latest}
        </Text>
 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 8,
    textAlign: 'center',
    margin: 10,
  },
});

export default App;
