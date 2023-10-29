import { StyleSheet } from "react-native";
import { getHeight, getWidth } from "../../utils/dimensions";

export const useStyles = () => {

    const height = getHeight();
    const width = getWidth();

    const styles = StyleSheet.create({
        container: {
            width: width('100%'),
            height: height('100%')
        },
        header: {
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 25,
            marginVertical: 10,
            alignItems: "center"
        },
        title: {
            fontSize: 24,
        }
    });
    return styles;
}