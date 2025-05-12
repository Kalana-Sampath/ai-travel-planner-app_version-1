import { useNavigation, useRouter } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Colors } from './../../../constants/Colors';

import Ionicons from '@expo/vector-icons/Ionicons';

export default function SignIn() {
    const navigation = useNavigation();

    const router = useRouter();

    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    return (
        <View style={{
            padding: 25,
            paddingTop: 20,
            backgroundColor: Colors.WHITE,
            height: '100%'
        }}>

            {/* Back Button */}
            <TouchableOpacity onPress={() => router.back()}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>

            <Text style={{
                fontFamily: 'outfit-bold',
                fontSize: 30,
                marginTop: 30
            }}>Let&apos;s Sign You In</Text>

            <Text style={{
                fontFamily: 'outfit',
                fontSize: 30,
                color: Colors.GRAY,
                marginTop: 20

            }}>Welcome Back</Text>
            <Text style={{
                fontFamily: 'outfit',
                fontSize: 30,
                color: Colors.GRAY,
                marginTop: 10
            }}>You&apos;ve been missed</Text>

            {/* Email */}
            <View style={{
                marginTop: 30
            }}>
                <Text style={{
                    fontFamily: 'outfit'
                }}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Enter Email' />
            </View>

            {/* Password */}
            <View style={{
                marginTop: 20
            }}>
                <Text style={{
                    fontFamily: 'outfit'
                }}>Password</Text>
                <TextInput
                    secureTextEntry={true}
                    style={styles.input}
                    placeholder='Enter password' />
            </View>

            {/* Sign In Button */}
            <TouchableOpacity style={{
                padding: 20,
                backgroundColor: Colors.PRIMARY,
                borderRadius: 15,
                marginTop: 50
            }}>
                <Text style={{
                    color: Colors.WHITE,
                    textAlign: 'center'
                }}>
                    Sign In
                </Text>
            </TouchableOpacity>

            {/* Create Account Button */}
            <TouchableOpacity
                onPress={() => router.replace('auth/sign-up')}
                style={{
                    padding: 20,
                    backgroundColor: Colors.WHITE,
                    borderRadius: 15,
                    marginTop: 20,
                    borderWidth: 1
                }}>
                <Text style={{
                    color: Colors.PRIMARY,
                    textAlign: 'center'
                }}>
                    Create Account
                </Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        padding: 15,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: Colors.GRAY,
        fontFamily: 'outfit'
    }
})