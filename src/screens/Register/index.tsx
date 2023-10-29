import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { useStyles } from "./styles";
import { Controller, useForm } from "react-hook-form";
import { useNavigation } from '@react-navigation/native'

export default function Register() {

    const navigation = useNavigation()
    const styles = useStyles();

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return (
        <View style={styles.container}>
            <View style={styles.cardView}>
                <Text style={styles.title}>
                    Register
                </Text>

                <Text>
                    Email
                </Text>
                <Controller 
                    control={control}
                    rules={{required: true}}
                    render={({ field: { onChange, value } }) => (
                        <TextInput
                            style={styles.input}
                            textContentType="emailAddress"
                            keyboardType="email-address"
                            autoCorrect={false}
                            placeholder="Email@gmail.com"
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="Email" 
                />
                {errors.email ? (
                    <Text style={styles.errorMessage}>
                        Email is required
                    </Text>
                ) : null}

                <Text>
                    Password
                </Text>
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, value } }) => (
                        <TextInput
                            style={styles.input}
                            testID={'password'}
                            placeholder={'Enter your password'}
                            autoCapitalize="none"
                            autoCorrect={false}
                            value={value}
                            onChangeText={(text) => onChange(text)}
                        />
                    )}
                    name="password"
                    defaultValue=""
                />
                {errors.password ? (
                    <Text style={styles.errorMessage}>Password is required</Text>
                ) : null}
                
                <View style={styles.registerButton}>
                    <Button
                        title='Register'
                    />
                </View>

                <View style={styles.basicText}>
                    <Text>Already have an account? </Text>
                    <Text
                        testID={'signup'}
                        style={styles.status}
                        onPress={() => {
                            navigation.navigate('Login' as never)
                        }}>
                        Login
                    </Text>
                </View>
            </View>
        </View>
    )
}