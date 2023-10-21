import { StyleSheet } from 'react-native';
import { getHeight, getWidth } from '../../utils/dimensions';

export const useStyles = () => {
    const height = getHeight();
    const width = getWidth();

    const styles = StyleSheet.create({
        cardView: {
            backgroundColor: 'white',
            width: width('90%'),
            zIndex: 5,
            borderRadius: 20,
            marginTop: height('-2%'),
            alignSelf: 'center',
            justifyContent: 'center',
        }
    });
    return styles;
}