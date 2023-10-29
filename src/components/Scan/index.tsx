import { Alert, FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import { images } from '../../assets/images';
import { useStyles } from './styles';

export default function Scan() {

    const styles = useStyles();

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
            onPress={pickDocument}
            style={styles.book_container}>
                <Image 
                source={images.book}
                style={styles.book_img}
                />
                <Text>
                    Scan Book
                </Text>
            </TouchableOpacity>
        </View>
    )
}