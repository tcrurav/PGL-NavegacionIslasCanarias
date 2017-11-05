import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';


export default class TenerifeScreen extends Component {
  render() {
    return (
        <View style={{flex: 1}}>
            <TouchableHighlight style={{flex: 1}}
                               onPress={() => this.props.navigation.navigate('TenerifeDesdeArriba')}>
                <Image source={require('../../img/tenerife.jpg')} 
                    style={styles.imagen}/>
            </TouchableHighlight>
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