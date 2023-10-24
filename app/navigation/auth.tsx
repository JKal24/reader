import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from '../screens/Login';

const Stack = createNativeStackNavigator();

export function AuthNavigation() {
    
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            {/* <Stack.Screen name="welcome" component={Welcome} /> */}
            <Stack.Screen name="login" component={Login} />
            {/* <Stack.Screen name="signUp" component={SignUp} /> */}
        </Stack.Navigator>
    )
}