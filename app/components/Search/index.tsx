import { useState } from "react";
import { TextInput, View } from "react-native";
import { useStyles } from "./styles";


export default function Search() {

    const styles = useStyles();

    const [searchKey, setSearchKey] = useState<string>("");

    return (
        <View>
            <TextInput
                style={styles.container}
                placeholder={'Search...'}
                value={searchKey}
                onChangeText={(text) => setSearchKey(text)}
            />
        </View>
    )
}