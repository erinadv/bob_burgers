import React, { useState, useEffect } from 'react';
import { Text, Linking, View, StyleSheet, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function ProfileScreen({ route, navigation }) {
    const [githubData, setGithubData] = useState({});

    const getGithubData = async () => {
        const response = await fetch("https://api.github.com/users/erinadv");
        const data = await response.json();
        setGithubData(data);
    };

    useEffect(() => {
        getGithubData();
    }, []);

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Image
                source={{
                    uri: githubData.avatar_url
                }}
                style={{ borderRadius: 150, width: 200, height: 200 }}
            />
            <View style={{ margin: 10, alignItems: 'center' }}>
                <Text style={styles.txtP}>{githubData.name}</Text>
                <Text style={styles.txtP}>@{githubData.login}</Text>
                <Text style={styles.txtP}>Teknik Komputer - 2020</Text>
            </View>
            <View style={{flex:1, flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="logo-github" size={30} color="#e15f41" style={{ marginRight: 5 }}/>
                <Text style={{ marginRight: 20 }} onPress={() => {Linking.openURL('https://github.com/erinadv');
            }}>Github</Text>
            <Ionicons name="logo-instagram" size={30} color="#e15f41" style={{ marginRight: 5 }} />
                <Text onPress={() => {Linking.openURL('https://instagram.com/erinadv');
            }}>Instagram</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    txtP: {
        color: '#e15f41',
        fontSize: 18,
        fontWeight: '700',
    }
})