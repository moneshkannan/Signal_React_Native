import React, {useState} from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native'
import {Button, Input, Image} from 'react-native-elements'
import { StatusBar } from 'expo-status-bar'

const Loginscreen = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const signIn = () => {
        console.log("pressed")
    }
    return (
        <KeyboardAvoidingView 
        behavior="padding"
        style={styles.container}>
            <StatusBar style="auto" />
            <Image source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Signal-Logo.svg/1200px-Signal-Logo.svg.png"
            }}
            style={{
                height:200,
                width:200
            }}
            />
            <View style={styles.inputContainer}>
                <Input 
                placeholder = "Email"
                autoFocus
                type="email"
                value = {email}
                onChangeText = {(text) =>setEmail(text)}
                />
                <Input 
                placeholder = "Password"
                secureTextEntry
                type="password"
                value={password}
                onChangeText = {(text)=>{setPassword(text)}}
                />
            </View>
            <Button 
            containerStyle = {styles.button}
            title = "Login"
            onPress = {signIn}
            />
            <Button 
            containerStyle = {styles.button}
            onPress = {() => navigation.navigate("Register")}
            title = "Register"
            type = "outline"
            />
            <View style={{height:"100"}}/>
        </KeyboardAvoidingView>
    )
}

export default Loginscreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor:"white"
    },
    inputContainer:{
        width: 300,
        marginTop:10
    },
    button: {
        width: 200,
        marginTop: 10,
    }
})
