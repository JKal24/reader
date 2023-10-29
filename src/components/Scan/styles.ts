import { StyleSheet } from "react-native";

export const useStyles = () => {

    const styles = StyleSheet.create({
        book_container: {               
            alignItems: "center",
        },
        book_img: {
            width: 75,
            height: 50
        }
    });
    return styles;
}