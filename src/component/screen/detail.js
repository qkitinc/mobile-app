import React from 'react';
import { Button, View, Text } from 'react-native'

const DetailScreen = ({ navigation }) => {
    return (
        <>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Detail Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => navigation.navigate('Home')}
                    // onPress={() => navigation.push('Details')}
                />
            </View>
        </>
    );
};

export default DetailScreen;