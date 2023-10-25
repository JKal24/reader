import { StyleSheet } from 'react-native';
import { getHeight, getWidth } from '../../utils/dimensions';
import AppStyles from '../../utils/styles';

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
            paddingTop: 20,
            paddingBottom: 20
        },
        logInText: {
            fontSize: 30,
            fontWeight: '500',
            alignSelf: 'center',
            justifyContent: 'center',
            color: '#3A3B3C',
        },
        emailInput: {
            alignSelf: 'center',
            borderRadius: 20,
            margin: 5,
            backgroundColor: 'white',
            width: width('60%'),
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
        passwordInput: {
            alignSelf: 'center',
            borderRadius: 20,
            margin: 5,
            backgroundColor: 'white',
            width: width('60%'),
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