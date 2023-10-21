import { View, Text } from 'react-native'
import { useStyles } from './styles'

export default function Login() {

    const styles = useStyles()

    const validate = (text: string) => {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/
        return reg.test(text)
    }

    return (
        <View>
            <Text>Welcome</Text>
            <Text>
                QuickReader aims to provide easy access to your downloaded books.
            </Text>
            <View style={styles.cardView}>
                <Text>
                    Please login to continue!
                </Text>
            </View>
        </View>
    )
}