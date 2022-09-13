import React, { useEffect, useState } from "react";
import { StyleSheet, View, SafeAreaView, FlatList, Image, Text, ScrollView, TouchableHighlight } from "react-native";

import { useNavigation } from "@react-navigation/native";

import axios from "axios";



const HomeScreen = () => {
    const navigation = useNavigation()
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://api.tvmaze.com/shows")
            .then(response => setData(response.data))
            .catch(error => console.log(error))
    }, [])

    const ListCategories = ({ category }) => {
        return (
            <View style={{paddingBottom:50}}>
                <Text style={{ fontSize: 20, color: 'white', padding: 10 }}>{category} Movies</Text>
                <FlatList

                    data={data}
                    keyExtractor={item => item.id}
                    horizontal
                    renderItem={({ item }) => {
                        if (item.genres.indexOf(category) != -1) {
                            return (
                                <TouchableHighlight onPress={() => navigation.navigate('Details', {id : item.id})}>
                                    <Image source={{ uri: item.image.medium, width: 200, height: 200 }} resizeMode='contain' />
                                </TouchableHighlight>
                            );
                        }
                    }}
                />
            </View>
        )
    }


    return (
        <SafeAreaView style={style.background}>
            <ScrollView>
                <ListCategories category='Drama' />
                <ListCategories category='Mystery' />
                <ListCategories category='Horror' />
                <ListCategories category='Action' />
            </ScrollView>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'black',

    }
})

export default HomeScreen;