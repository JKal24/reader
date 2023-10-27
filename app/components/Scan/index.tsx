import { Alert, Text, TouchableOpacity, View } from 'react-native';
import DocumentPicker from 'react-native-document-picker';

export default function Scan() {

    const pickDocument = async () => {
        try {
            const file = await DocumentPicker.pick({
                type: [DocumentPicker.types.allFiles]
            })
            console.log(file)
        } catch (err) {
            Alert.alert('Canceled');
        }
        
    }

    return (
        <View>
            <TouchableOpacity
            activeOpacity={0.5}
            onPress={pickDocument}>
                <Text>
                    Scan
                </Text>
            </TouchableOpacity>
        </View>
    )
}