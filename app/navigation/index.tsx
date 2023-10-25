import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import { useSelector } from "react-redux";
import { RootState } from "../lib/store";
import BookOverview from "../screens/BookOverview";

const Stack = createNativeStackNavigator();

export default function Navigation() {

    const loggedIn = useSelector((state: RootState) => state.userReducer.loggedIn);

    return (
        <NavigationContainer>
            {
                loggedIn ? 
                (
                    <AppNavigation />
                )
                :
                (
                    <AuthNavigation />
                )
            }
        </NavigationContainer>
    )
}

export function AuthNavigation() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            {/* <Stack.Screen name="welcome" component={Welcome} /> */}
            <Stack.Screen name="Login" component={Login} />
            {/* <Stack.Screen name="signUp" component={SignUp} /> */}
        </Stack.Navigator>
    )
}

export function AppNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="BookOverview" component={BookOverview} />
        </Stack.Navigator>
    )
}