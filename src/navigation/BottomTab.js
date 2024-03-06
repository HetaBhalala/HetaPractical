import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import CustomBottomTab from '../components/CustomBottomTab';
import Account from '../screens/Account';
import User from '../screens/User';
import Order from '../screens/Order';
import Rewards from '../screens/Rewards';

const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={(props: any) => (
          <CustomBottomTab
            {...props}
            tabStyle={{borderTopLeftRadius: 30, borderTopRightRadius: 30}}
          />
        )}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Account"
          component={Account}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Rewards"
          component={Rewards}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Order"
          component={Order}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="User"
          component={User}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default BottomTab;
