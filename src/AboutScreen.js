import React from 'react';
import { View, Text, Image , Button, Linking} from 'react-native';

export default function AboutScreen({navigation}) {
    return (

        <View style={{ flex: 1, }}>
            <View style={{ height: 900, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#fff' }}>
                <Image source={{ uri: 'https://a.foxdcg.com/dpp-uploaded/images/bobs-burgers/bobs-burgers_13/logo-tab_s14.png?fit=inside%7C*:129' }} 
                style={{ height: 95, width: 400, margin: 15}}/>
                <Text style={{ color: '#e15f41', fontSize: 28, fontWeight: 'bold' }}>Bob's Burgers App</Text>
                <Text style={{ color: '#e15f41', marginVertical: 15, marginHorizontal: 30, textAlign: 'justify' }}>
                    Get to know the hundreds of characters, episodes, running gags, and images from the show Bob's Burgers.
                </Text>
                
                <View style={{ margin: 30 }}>
                    {/* <Button title="Go to Home" onPress={() => navigation.navigate('Home')} /> */}
                    <Button title="Go to My Profile" onPress={() => navigation.navigate('Profile')} color='#e15f41' />
                </View>
                <Text style={{ color: '#e15f41', margin: 15 }}>©Copyright 2022</Text>
                <Text style={{ color: '#e15f41'}} >Developed by Erina Devianti</Text>
                <Text style={{ color: '#e15f41' }} 
                onPress={() => {Linking.openURL('https://bobsburgers-api.herokuapp.com/');
                }} >Bob's Burgers API by Zachary </Text>
            </View>

        </View>

    );
}