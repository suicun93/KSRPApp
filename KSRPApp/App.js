import { createStackNavigator } from "react-navigation";

import Splash from "./src/container/Splash/Splash";
import Login from "./src/container/Login/Login";

const Navigation = createStackNavigator({
    Home: Splash,
    Login: Login,
});
export default Navigation;
