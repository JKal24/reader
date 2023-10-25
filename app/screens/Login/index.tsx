import { View, Text, ActivityIndicator, Button, Image, TextInput, TouchableOpacity } from 'react-native'
import { useStyles } from './styles'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Controller, useForm } from 'react-hook-form'
import { useNavigation } from '@react-navigation/native'
import navigation from '../../navigation'

export default function Login() {

    const [secure, setSecure] = useState<boolean>(true)
    
    const navigation = useNavigation()
    const styles = useStyles()
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const validate = (text: string) => {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/
        return reg.test(text)
    }

    const onSubmit = (data: any) => {
        
    }

    return (
        <View style={styles.container}>
            <View style={styles.cardView}>
                <Text style={styles.logInText}>Log In</Text>
                <View>
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                testID={'email'}
                                placeholder={'Enter your email address'}
                                autoCapitalize="none"
                                textContentType="emailAddress"
                                keyboardType="email-address"
                                autoCorrect={false}
                                style={styles.emailInput}
                                value={value}
                                onChangeText={(text) => onChange(text)}
                            />
                        )}
                        name="email"
                        defaultValue=""
                    />
                    {errors.email ? (
                        <Text style={{ alignSelf: 'center', color: 'red' }}>
                            Email is required
                        </Text>
                    ) : null}

                    <View style={styles.passwordView}>
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { onChange, value } }) => (
                                <TextInput
                                    testID={'password'}
                                    placeholder={'Enter your password'}
                                    autoCapitalize="none"
                                    secureTextEntry={secure}
                                    autoCorrect={false}
                                    style={styles.passwordInput}
                                    value={value}
                                    onChangeText={(text) => onChange(text)}
                                />
                            )}
                            name="password"
                            defaultValue=""
                        />
                    </View>
                    {errors.password ? (
                        <Text style={styles.errorMessage}>Password is required</Text>
                    ) : null}
                </View>

                <View style={styles.submitButton}>
                    <Button
                        title='Log in'
                        onPress={handleSubmit(onSubmit)}
                    />
                </View>

                <View style={styles.basicText}>
                    <Text>Do not have an account? </Text>
                    <Text
                        testID={'signup'}
                        style={styles.status}
                        onPress={() => {
                            navigation.navigate('Signup' as never)
                        }}>
                        Sign up
                    </Text>
                </View>
                
                <Text 
                    style={styles.status}
                    onPress={() => navigation.navigate('ForgotPassword' as never)}>
                    Forgot Password
                </Text>
            </View>
        </View>
    )
}