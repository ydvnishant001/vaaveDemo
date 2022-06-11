import React, {useEffect} from 'react'
import {StyleSheet, ScrollView, KeyboardAvoidingView, SafeAreaView, Text,
TouchableOpacity, View, Dimensions, Platform} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import { getPostComments } from '../actions/postActions'

const PostScreen = ({navigation, route}) => {
    const dispatch = useDispatch()
    const { width, height } = Dimensions.get("window");
    const {comments} = useSelector(state => state.postReducers)

    navigation.setOptions({
        title: "Post Details"
    })

    useEffect(() => {
        dispatch(getPostComments(route.params.id))
    },[])

    return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : null}>
    <SafeAreaView style={{ flex: 1 }}>
    <ScrollView style={{ backgroundColor: "white" }} keyboardShouldPersistTaps="handled">
    <View style={{flex: 1, marginLeft: 25, marginTop : 40}}>
    <View style={{flexDirection: 'row', marginBottom: 20}}>
    <Text style={styles.label}>Title : </Text>
    <Text style={[styles.text, {width: width*0.7}]}>
    {route.params.title}</Text>
    </View>
    <View style={{flexDirection: 'row', marginBottom: 20}}>
    <Text style={styles.label}>User : </Text>
    <Text style={styles.text}>
    User {route.params.userId}</Text>
    </View>
    <Text style={styles.commentLabel}>
    Comments : </Text>
    {comments && comments.length > 0 ? comments.map(item => {
        return(
            <View style={styles.commentView(width)}>
            <View style={styles.commentInfoView}>
            <Text style={styles.commentInnerLabel}>Subject: </Text>
            <Text style={styles.commentInnerText(width)}>{item.name}</Text>
            </View>
            <View style={styles.commentInfoView}>
            <Text style={styles.commentInnerLabel}>Body: </Text>
            <Text numberOfLines={2} style={[styles.commentInnerText(width), {marginLeft: 43}]}>
            {item.body}</Text>
            </View>
            <View style={styles.commentInfoView}>
            <Text style={styles.commentInnerLabel}>Email: </Text>
            <Text style={[styles.commentInnerText(width), {marginLeft: 40}]}>{item.email}</Text>
            </View>
            </View>
        )
    }) : <Text style={styles.loadingText}>
    Loading ...</Text>}
    </View></ScrollView></SafeAreaView></KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    label: {color: 'black', fontFamily: "Poppins-Medium", fontSize: 15},
    text: {color: 'black', fontFamily: "Poppins-Regular", fontSize: 15, marginLeft: 20},
    commentLabel: {color: 'black', fontFamily: "Poppins-Medium", fontSize: 15, marginTop: 10, marginBottom: 20},
    commentView: (width) => ({backgroundColor: '#F0EFFF', marginBottom: 10, width: width*0.89, padding: 10,
    borderRadius: 13, paddingHorizontal: 20}),
    commentInfoView: {flexDirection: 'row', marginBottom: 10},
    commentInnerLabel: {color: '#8B8B8B', fontFamily: "Poppins-Medium", fontSize: 11},
    commentInnerText: (width) => ({marginLeft: 30, color: 'black', fontFamily: "Poppins-Medium", fontSize: 11,
    width: width*0.6}),
    loadingText: {fontFamily: "Poppins-Medium", marginTop: 25, color: 'black', alignSelf: 'center'}
})

export default PostScreen