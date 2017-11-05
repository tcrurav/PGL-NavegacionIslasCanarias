import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import ArucasScreen from '../ArucasScreen/ArucasScreen';
import CatedralScreen from '../CatedralScreen/CatedralScreen';
import TeldeScreen from '../TeldeScreen/TeldeScreen'; 

export default class IglesiasTabPage extends Component{
    render(){
        const MainTab = TabNavigator({
            Arucas: {
                screen: ArucasScreen,
                navigationOptions: ({navigation}) => ({
                    tabBarLabel: 'Arucas',
                    headerStyle: {backgroundColor: '#E73536'},
                    headerTintColor: 'white'
                })
            },
            Catedral: {
                screen: CatedralScreen,
                navigationOptions: ({navigation}) => ({
                    tabBarLabel: 'Catedral',
                    headerStyle: {backgroundColor: '#E73536'},
                    headerTintColor: 'white'
                })
            },
            Telde: {
                screen: TeldeScreen,
                navigationOptions: ({navigation}) => ({
                    tabBarLabel: 'Telde',
                    headerStyle: {backgroundColor: '#E73536'},
                    headerTintColor: 'white'
                })
            },
        }, {
            tabBarOptions: {
              style: {backgroundColor: '#E73536'}
            }
          });
        return (
            <MainTab screenProps={{rootNavigation: this.props.screenProps.navigation}} />
        );
    }
}