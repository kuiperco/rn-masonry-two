import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import Pin from './app/components/Pin'

export default class practicalFlexLayout extends Component {
  constructor(props){
    super(props)
    this.state = {
      columns: 2,
      pin: {
        harley: {
          imagesource: require('./app/assets/images/harley.jpg'),
          originalWidth: 800,
          originalHeight: 1199
        },
        ange: {
          imagesource: require('./app/assets/images/ange.png'),
          originalWidth: 1000,
          originalHeight: 667
        }
      }
    }
  }

  // grab all of our pins
  // loop over them based on index
  // assign a key
  // two arrays, one for each column
  // %2 == 0 that will dictate which array the pin lives in
  // render the arrays into columns that scrollview can utilize

  render() {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.pincontainer}>
          <Pin pinsource={this.state.pin.harley} columns={this.state.columns}/>
          <Pin pinsource={this.state.pin.ange} columns={this.state.columns}/>
        </View>
        <View style={styles.pincontainer}>
          <Pin pinsource={this.state.pin.ange} columns={this.state.columns}/>
          <Pin pinsource={this.state.pin.harley} columns={this.state.columns}/>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  contentContainer: {
    flexDirection: 'row'
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
  pincontainer: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'flex-start',
    alignItems: 'flex-start'
  }
});

AppRegistry.registerComponent('practicalFlexLayout', () => practicalFlexLayout);
