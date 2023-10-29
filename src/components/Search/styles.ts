import { StyleSheet } from "react-native";

export const useStyles = () => {

    const styles = StyleSheet.create({
        container: {
            borderWidth: 10,
            backgroundColor: 'rgb(245, 245, 245)'
        }
    });
    return styles;
}