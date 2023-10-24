import { View } from "react-native";
import { ActivityIndicator } from "react-native";
import { Text } from "react-native";
import { getHeight, getWidth } from '../utils/dimensions';

export function Loading() {

    const height = getHeight();
    const width = getWidth();

    return (
        <View style={{
            backgroundColor: 'white',
            width: width('100%'),
            height: height('100%'),
            alignSelf: 'center',
            justifyContent: 'center'
        }}>
            <Text>Reader</Text>
            <ActivityIndicator></ActivityIndicator>
        </View>
    )
}