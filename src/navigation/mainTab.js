import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../component/screen/home'
import DetailScreen from '../component/screen/detail'
import ProfileScreen from '../component/screen/profile'
import ExploreScreen from '../component/screen/explore'

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();


const HomeStackScreen = ({ navigation }) => (
    <HomeStack.Navigator>
        <HomeStack.Screen
            name="Home"
            component={HomeScreen}
            options={{
                title: 'Home',
                headerTitleAlign: "center",
                headerLeft: () => (
                    <Icon name="menu-outline" size={30} color="#900"
                        onPress={() => { navigation.openDrawer() }}
                    >
                    </Icon>
                )
            }}


        />

    </HomeStack.Navigator>
);


const DetailsStackScreen = ({ navigation }) => (
    <DetailsStack.Navigator>
        <DetailsStack.Screen
            name="Details"
            component={DetailScreen}
            options={{
                title: 'Details',
                headerTitleAlign: "center",
                headerLeft: () => (
                    <Icon name="menu-outline" size={30} color="#900"
                        onPress={() => { navigation.openDrawer() }}
                    >
                    </Icon>
                )
            }} />
    </DetailsStack.Navigator>
);



const MainTabScreen = () => (
    <Tab.Navigator
        initialRouteName="Feed"
        activeColor="#e91e63"
        style={{ backgroundColor: 'tomato' }}
    >
        <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Details"
            component={DetailsStackScreen}
            options={{
                tabBarLabel: 'Details',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="bell" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="account" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Explore"
            component={ExploreScreen}
            options={{
                tabBarLabel: 'Explore',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="account" color={color} size={26} />
                ),
            }}
        />
    </Tab.Navigator>
)

export default MainTabScreen;