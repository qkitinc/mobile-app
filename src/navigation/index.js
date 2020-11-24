import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './mainTab'
import DrawerContent from './drawerContent'
import SupportScreen from '../component/screen/support'
import SettingScreen from '../component/screen/setting'
import BookmarkScreen from '../component/screen/bookmark'


const Drawer = createDrawerNavigator();



const Navigation = () => {
    return (
        <>
            <NavigationContainer>
                <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
                    <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
                    <Drawer.Screen name="SupportScreen" component={SupportScreen} />
                    <Drawer.Screen name="SettingScreen" component={SettingScreen} />
                    <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
                </Drawer.Navigator>
            </NavigationContainer>
        </>
    );
};

export default Navigation;