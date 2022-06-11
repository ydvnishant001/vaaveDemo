import React, {useEffect, useState} from 'react'
import {StyleSheet, ScrollView, KeyboardAvoidingView, SafeAreaView, Text,
TouchableOpacity, View, Button, Platform, Dimensions, TextInput, FlatList} from 'react-native'
import {getPosts} from '../actions/postActions'
import { useDispatch, useSelector } from 'react-redux'

const PostListScreen = ({navigation}) => {
    const dispatch = useDispatch()
    const { width, height } = Dimensions.get("window");
    const {posts} = useSelector(state => state.postReducers)
    const [searchText, setSearchText] = useState("")

    const postTouchHandler = (title, userId, id) => {
        navigation.navigate("PostScreen", {title, userId, id})
    }

    const userNameTouchHandler = (userId) => {
        navigation.navigate("UserScreen", {userId})
    }
    
    navigation.setOptions({
        headerShown: false
    })

    useEffect(() => {
        dispatch(getPosts())
    }, [])

    return ( 
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : null}>
    <SafeAreaView style={{ flex: 1 }}>
    <ScrollView style={{ backgroundColor: "white" }} keyboardShouldPersistTaps="handled">
    <View style={{flex: 1}}>
    <Text style={styles.header}>All Posts</Text>
    <TextInput style={styles.searchInput(width)} value={searchText} onChangeText={setSearchText}
    placeholder="Search Title" placeholderTextColor={"#8B8B8B"}/>
    {posts && posts.length > 0 ? 
    <FlatList
    data={searchText ? posts.filter(item => item.title.toUpperCase().includes(searchText.toUpperCase())) :
    posts}
    renderItem={({item}) => {
    return(
        <TouchableOpacity activeOpacity={.7} style={styles.postTouch(width)}
        onPress={() => postTouchHandler(item.title, item.userId, item.id)}>
        <View style={{flexDirection: 'row'}}>
        <Text style={styles.postTitleLabel}>{"Title -"}</Text>
        <Text style={styles.postTitle(width)}>
        {item.title}</Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
        <Text style={styles.userLabel}>{"User -"}</Text>
        <TouchableOpacity activeOpacity={.7} onPress={() => userNameTouchHandler(item.userId)}>
        <Text style={styles.userTouchText(width)}>{"User  " + item.userId}</Text>
        </TouchableOpacity></View></TouchableOpacity>
        )
    }}
    /> : <Text style={styles.loadingText}>
    Loading ...</Text>}
    </View></ScrollView></SafeAreaView></KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    header: {color: '#004053', fontFamily: "Poppins-SemiBold", alignSelf: 'center', margin: 20, fontSize: 25},
    postTouch: (width) => ({width: width * 0.89, marginBottom: 25, marginLeft: 20, padding: 20, elevation: 4,
    shadowColor: "grey", borderRadius: 23, backgroundColor: 'white'}),
    userTouchText: (width) => ({color: 'white', backgroundColor: "#0066BF", paddingVertical: 5,
    fontFamily: "Poppins-Regular", width: width *0.22, marginLeft: 25, borderRadius: 23, paddingLeft: 20,
    paddingRight: 15}),
    postTitleLabel: {color: 'black', fontFamily: "Poppins-Medium"},
    postTitle: (width) => ({color: 'black', fontFamily: "Poppins-Regular", width: width *0.6, marginLeft: 25}),
    userLabel: {color: 'black', fontFamily: "Poppins-Medium"},
    loadingText: {fontFamily: "Poppins-Medium", marginTop: 25, color: 'black', alignSelf: 'center'},
    searchInput: (width) => ({marginLeft: 20, marginBottom: 30, backgroundColor: "#ddd",
    width: width/2, borderRadius: 23, paddingLeft: 20, fontFamily: "Poppins-Regular", color: 'black'}),
})

export default PostListScreen