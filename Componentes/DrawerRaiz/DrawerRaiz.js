import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { DrawerNavigator, StackNavigator, TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import GranCanariaScreen from '../GranCanariaScreen/GranCanariaScreen';
import TenerifeScreen from '../TenerifeScreen/TenerifeScreen';
import TenerifeDesdeArribaScreen from '../TenerifeDesdeArribaScreen/TenerifeDesdeArribaScreen';
import IglesiasTabPage from '../IglesiasTabPage/IglesiasTabPage';

const GranCanariaStack = StackNavigator({
    GranCanaria: {
        screen: GranCanariaScreen,
        navigationOptions: ({navigation}) => ({
            title: "Gran Canaria",
            headerLeft: <Text>    <Icon name="md-menu"
                                        size={35}
                                        color="#FFF"
                                        onPress={ () => navigation.navigate('DrawerOpen')}/>
                        </Text>,
            headerStyle: {backgroundColor: '#E73536'},
            headerTintColor: 'white'
        })
    },
    Iglesias: {
        screen: ({ navigation }) => <IglesiasTabPage screenProps={{ rootNavigation: navigation }}/>,
        navigationOptions: ({navigation}) => ({
            title: "Iglesias",
            headerStyle: {backgroundColor: '#E73536'},
            headerTintColor: 'white'
        })
    }
});

const TenerifeStack = StackNavigator({
    Tenerife: {
        screen: TenerifeScreen,
        navigationOptions: ({navigation}) => ({
            title: "Tenerife",
            headerLeft: <Text>    <Icon name="md-menu"
                                        size={35}
                                        color="#FFF"
                                        onPress={ () => navigation.navigate('DrawerOpen')}/>
                        </Text>,
            headerStyle: {backgroundColor: '#E73536'},
            headerTintColor: 'white'
        })
    },
    TenerifeDesdeArriba: {
        screen: TenerifeDesdeArribaScreen,
        navigationOptions: ({navigation}) => ({
            title: "Tenerife desde arriba",
            headerStyle: {backgroundColor: '#E73536'},
            headerTintColor: 'white'
        })

    }
});

const DrawerRaiz = DrawerNavigator({
    GranCanariaDrawer: {
        screen: GranCanariaStack
    },
    TenerifeDrawer: {
        screen: TenerifeStack
    }
}, {
    drawerBackgroundColor: '#E73536',
    contentOptions: {
        activeTintColor: 'white'
    }
});

export default DrawerRaiz;