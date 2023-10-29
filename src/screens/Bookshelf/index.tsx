import { FlatList, View } from "react-native";
import { Text } from "react-native";
import Scan from "../../components/Scan";
import { Book } from "../../types/Book";
import { useStyles } from "./styles";


export default function BookOverview(props: { books: Book[] }) {

    const styles = useStyles();

    const tempBooks: Book[] = [
        { name: "The tales of something", path: "./././somewhere"},
        { name: "The tales of anything", path: "./././ok"},
        { name: "The tales of everything", path: "./././maybe"}
    ]

    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.title}>Bookshelf</Text>
                <Scan />
            </View>
            <FlatList data={tempBooks} renderItem={
                ({item}) => 
                    <BookView book={item} />
            }></FlatList>
        </View>
    )
}

function BookView(props: {book: Book}) {
    return (
        <View>
            <Text>{props.book.name}</Text>
            <Text>{props.book.path}</Text>
        </View>
    )
}