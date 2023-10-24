import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import { useSelector } from "react-redux";
import { RootState } from "../lib/store";
import { AppNavigation } from './app';
import { AuthNavigation } from './auth';
import BookOverview from "../screens/BookOverview";

const Stack = createNativeStackNavigator();

export default function Navigation() {

    const loggedIn = useSelector((state: RootState) => state.userReducer.loggedIn);
    console.log(loggedIn)

    return (
        <NavigationContainer>
            <Stack.Navigator>
            {
                loggedIn ? 
                (
                    // <Stack.Navigator>
                        <Stack.Screen name="bookView" component={BookOverview} />
                    // </Stack.Navigator>
                )
                :
                (
                    // <Stack.Navigator screenOptions={{ headerShown: false }} >
                        // {/* <Stack.Screen name="welcome" component={Welcome} /> */}
                        <Stack.Screen name="login" component={Login} />
                        // {/* <Stack.Screen name="signUp" component={SignUp} /> */}
                    // </Stack.Navigator>
                )
            }
            </Stack.Navigator>
        </NavigationContainer>
    )
}