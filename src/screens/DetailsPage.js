import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

import axios from "axios";

import { useNavigation, useRoute } from "@react-navigation/native";

const DetailsScreen = () => {

    const [data, setData] = useState([]);
    const navigation = useNavigation()
    const route = useRoute()

    useEffect(() => {
        axios.get("https://api.tvmaze.com/shows")
            .then(response => setData(response.data))
            .catch(error => console.log(error))
    }, [])


    return (
        <View style={style.background}>
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    if (route.params.id == item.id) {
                        return (
                            <View>
                                <Image source={{ uri: item.image.original }} style={style.imageBackground} />
                                <Text style={style.textBackground}>{item.name}</Text>
                                <Text style={style.detailsBackground}>{item.summary}</Text>
                            </View>
                        );
                    }
                }}
            />
        </View>

    )
}

const style = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'black',

    },
    imageBackground: {
        width: 400,
        height: 300,
        resizeMode: 'stretch'
    },
    textBackground: {
        fontWeight: 'bold',
        fontSize: 30,
        marginTop:15,
        marginHorizontal:10,
        textAlign:'center',
        color: 'white',
    },
    detailsBackground: {
        fontSize: 16,
        marginVertical: 20,
        marginHorizontal: 10,
        paddingBottom: 30,
        color: 'white'
    }
})

export default DetailsScreen;
