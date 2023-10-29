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
            backgroundColor: 'rgb(245, 245, 245)'
        },
        cardView: {
            width: width('80%'),
            borderRadius: 20,
            backgroundColor: 'white',
            padding: 15
        },
        title: {
            fontSize: 30,
            fontWeight: '500',
            alignSelf: 'center',
            justifyContent: 'center',
            marginBottom: 15
        },
        errorMessage: {
            alignSelf: 'center', 
            color: 'red'
        },
        input: {
            backgroundColor: "rgb(245, 245, 245)",
            marginTop: 10,
            marginBottom: 10,
            borderWidth: 1,
            width: '100%',
            padding: 5
        },
        registerButton: {
            backgroundColor: '#00416A',
            alignContent: 'center',
            alignSelf: 'center',
            marginTop: 10,
            marginBottom: 10,
            borderRadius: 20,
        },
        basicText: {
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 5,
            marginBottom: 5,
        },
        status: {
            color: '#00416A',
            alignSelf: 'center',
        },
    });
    return styles;
}