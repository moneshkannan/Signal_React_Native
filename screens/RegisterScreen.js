import { StatusBar } from 'expo-status-bar'
import React, {useState} from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native'
import {Button, Input} from 'react-native-elements'

const RegisterScreen = ({ navigation }) => {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [imageURL, setimageURL] = useState("")

    const register = () => {

    }
    return (
        <KeyboardAvoidingView
        behavior = "padding"
        style = {styles.container}
        >
            <StatusBar style="light"/>
            <Text
            style = {{marginBottom:50, fontSize: 25, fontWeight:"bold"}}
            >
                Create a Signal Account
            </Text>
            <View style={styles.inputContainer}>
                <Input
                placeholder="Full Name"
                autoFocus
                type="text"
                value={name}
                onChangeText = {(text) =>{setname(text)}}
                />
                <Input
                placeholder="Email"
                type="email"
                value={email}
                onChangeText = {(text) =>{setemail(text)}}
                />
                <Input
                placeholder="Password"
                secureTextEntry
                type="password"
                value={password}
                onChangeText = {(text) =>{setpassword(text)}}
                />
                <Input
                placeholder="Image URL"
                type="text"
                value={imageURL}
                onChangeText = {(text) =>{setimageURL(text)}}
                onSubmitEditing = {register}
                />
            </View>
            <Button
            containerStyle = {styles.button}
            onPress={register} 
            raised
            title="Register"
            />
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor:"white"
    },
    button: {
        width: 200,
        marginTop: 10
    }
})
