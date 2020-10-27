import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from './src/screens/Component';
import ListComponent from './src/screens/list';
import FristGoal from './src/screens/fristgoal';



const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components:ComponentScreen,
    Listcomponent:ListComponent,
    Fristgoal:FristGoal
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
