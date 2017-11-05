import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';


export default class TeldeScreen extends Component {
  render() {
    return (
        <View style={{flex: 1}}>
            <Image source={require('../../img/telde.jpg')} 
                style={styles.imagen}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    imagen: {
        flex: 1,
        resizeMode: 'cover',
        padding: 0
    }
});