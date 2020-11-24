import React from 'react';
import { Button, View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { color, bg} from '../../style/global'
const ExploreScreen = ({ navigation }) => {
    return (
        <>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={color.primary}> Explore Screen </Text>
                <Icon name="home" size={30} />
                <Text style={bg.primary}>Submit</Text>
            </View>
        </>
    );
};

export default ExploreScreen;

