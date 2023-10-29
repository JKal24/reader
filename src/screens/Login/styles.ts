import { StyleSheet } from 'react-native';
import { getHeight, getWidth } from '../../utils/dimensions';

export const useStyles = () => {
    const height = getHeight();
    const width = getWidth();

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        cardView: {
            backgroundColor: 'white',
            width: width('90%'),
            zIndex: 5,
            borderRadius: 20,
            marginTop: height('-2%'),
            alignSelf: 'center',
            justifyContent: 'center',
            padding: 15
        },
        logInText: {
            fontSize: 30,
            fontWeight: '500',
            alignSelf: 'center',
            justifyContent: 'center',
            color: '#3A3B3C',
        },
        input: {
            backgroundColor: "rgb(245, 245, 245)",
            marginTop: 10,
            marginBottom: 10,
            borderWidth: 1,
            width: '100%',
            padding: 5
        },
        passwordView: {
            flexDirection: 'row',
            borderColor: 'black',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: width('62%'),
            height: 50,
            marginTop: 5,
            alignSelf: 'center',
        },
        errorMessage: { alignSelf: 'center', color: 'red' },
        status: {
            color: '#00416A',
            alignSelf: 'center',
        },
        submitButton: {
            backgroundColor: '#00416A',
            alignContent: 'center',
            alignSelf: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: 15,
            marginBottom: 10,
            borderRadius: 20,
        },
        basicText: {
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 5,
            marginBottom: 5,
        },
    });
    return styles;
}