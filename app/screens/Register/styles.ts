import { StyleSheet } from "react-native";
import { getHeight, getWidth } from "../../utils/dimensions";

export const useStyles = () => {
    const height = getHeight();
    const width = getWidth();

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'lightgray'
        },
        cardView: {
            
            backgroundColor: 'white',
            padding: 15
        },
        title: {
            fontSize: 30,
            fontWeight: '500',
            alignSelf: 'center',
            justifyContent: 'center',
        }
    });
    return styles;
}