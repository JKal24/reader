import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { useStyles } from "./styles";
import { Controller, useForm } from "react-hook-form";


export default function Register() {

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
                <Controller 
                    control={control}
                    rules={{required: true}}
                    render={({ field: { onChange, value } }) => (
                        <TextInput
                          placeholder="Email"
                          onChangeText={onChange}
                          value={value}
                        />
                    )}
                    name="Email" />
            </View>
        </View>
    )
}