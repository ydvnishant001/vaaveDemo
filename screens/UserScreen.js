import React from 'react'
import {StyleSheet, ScrollView, KeyboardAvoidingView, SafeAreaView, Text,
TouchableOpacity, View, Platform, Dimensions} from 'react-native'

const UserScreen = ({navigation, route}) => {
    const { width, height } = Dimensions.get("window");
    
    navigation.setOptions({
        title: ""
    })
    
    return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : null}>
    <SafeAreaView style={{ flex: 1 }}>
    <ScrollView style={{ backgroundColor: "white" }} keyboardShouldPersistTaps="handled">
    <View style={{flex: 1}}>
    <Text style={styles.header}>Profile</Text>
    <View style={styles.infoView}>
    <Text style={styles.label}>User Name : </Text>
    <Text style={styles.text}>
    User {route.params.userId}</Text>
    </View>
    <View style={styles.infoView}>
    <Text style={styles.label}>Email : </Text>
    <Text style={styles.text}>
    lorenIpsem@gmail.com</Text>
    </View>
    <View style={styles.infoView}>
    <Text style={styles.label}>Website : </Text>
    <Text style={styles.text}>
    lorenIpsem.com</Text>
    </View>
    <View>
    <Text style={[styles.label, {marginLeft: 25}]}>
    Company Details : </Text>
    <Text style={styles.details(width)}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
    </View>
    </View></ScrollView></SafeAreaView></KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    header: {color: '#004053', fontFamily: "Poppins-SemiBold", alignSelf: 'center', margin: 20, fontSize: 25},
    details: (width) => ({color: 'black', fontFamily: "Poppins-Regular", fontSize: 15, marginTop: 10,
    marginLeft: 25, width: width*0.8}),
    label: {color: 'black', fontFamily: "Poppins-Medium", fontSize: 15},
    infoView: {flexDirection: 'row', marginBottom: 20, marginLeft: 25},
    text: {color: 'black', fontFamily: "Poppins-Regular", fontSize: 15, marginLeft: 20},
})

export default UserScreen