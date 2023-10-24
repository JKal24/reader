import { createNativeStackNavigator } from "@react-navigation/native-stack"
import BookOverview from "../screens/BookOverview";

const Stack = createNativeStackNavigator();

export function AppNavigation() {


    return (
        <Stack.Navigator>
            <Stack.Screen name="bookView" component={BookOverview} />
        </Stack.Navigator>
    )
}