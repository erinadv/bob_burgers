import React, { Component } from 'react';
import { Text, TextInput, FlatList, View, Image, TouchableOpacity } from 'react-native';


class SearchScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchData: '',
            dataCharacters: []
        };
    }

    getData = () => {
        fetch('https://bobsburgers-api.herokuapp.com/characters/?name=' + this.state.searchData, {
            method: 'get',
            headers: {
                'Accept': 'application/json, text/plain, */*',  // It can be used to overcome cors errors
                'Content-Type': 'application/json'
            },
        })
            .then((response) => response.json())
            .then((json) => this.setState({ dataCharacters: json }, () => console.log(json)))
            .catch((err) => console.log(err));
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 3 }}>
                    <View style={{ height: 90, backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <View >
                            <TextInput placeholder='Search name for a single character'
                                onChangeText={(value) => this.setState({ searchData: value })}
                                style={{
                                    width: 250,
                                    borderBottomColor: '#e15f41',
                                    marginVertical: 8,
                                    marginHorizontal: 20,
                                    paddingHorizontal: 10,
                                    borderBottomWidth: 1,
                                }}
                            />

                        </View>
                        <View >
                            <TouchableOpacity style={{ backgroundColor: '#e15f41', paddingHorizontal: 15, paddingVertical: 13, borderRadius: 10, elevation: 5 }}
                                onPress={() => this.getData()}>
                                <Text style={{ color: '#fff', fontWeight: '600' }}>Search</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <FlatList horizontal
                        showsVerticalScrollIndicator={false}
                        data={this.state.dataCharacters} keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => (
                            <View
                                style={{ width: 160, height: 220, marginHorizontal: 5, marginBottom: 10, backgroundColor: '#e15f41', borderWidth: 1,  borderRadius: 18, paddingHorizontal: 20, alignItems: 'center', justifyContent: 'center' }}>
                                <Image source={{ uri: item.image }} style={{ width: 150, height: 150, resizeMode: 'contain' }} />
                                <Text style={{ color: '#fff', textAlign: 'center' }}>{item.name}</Text>
                                <Text style={{ color: '#fff', textAlign: 'center' }}>{item.gender}</Text>
                                <Text style={{ color: '#fff', textAlign: 'center' }}>{item.hairColor}</Text>
                            </View >
                        )}>

                    </FlatList>
                </View>

            </View>
        );
    }
}


export default SearchScreen;
