import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionic from 'react-native-vector-icons/Ionicons'
import Affiliate from './Affiliate';
import Income from './Income';
import MySystem from './MySystem';
import Report from './Report';
import Discover from './Discover';
export default function NavigationTag() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, size, color }) => {
        let iconName;
        if (route.name === "Thu Nhập") {
          iconName = focused ? 'bag-check' : 'bag-check-outline';
        } else if (route.name === "Khám phá") {
          iconName = focused ? 'apps' : 'apps-outline';
        } else if (route.name === "Affiliate") {
          iconName = focused ? 'locate' : 'locate-outline';
        } else if (route.name === "Số liệu") {
          iconName = focused ? 'browsers' : 'browsers-outline';
        }
        else if (route.name === "Hệ thống") {
          iconName = focused ? 'person' : 'person-sharp';
        }
        return <Ionic name={iconName} size={size} color={color} />;
      },
    })}
  >
    <Tab.Screen name="Thu Nhập" component={Income}  />
    <Tab.Screen name="Khám phá" component={Discover}  />
    <Tab.Screen name="Affiliate" component={Affiliate} options={{ headerShown: true }} />
    <Tab.Screen name="Số liệu" component={Report} options={{ headerShown: true }} />
    <Tab.Screen name="Hệ thống" component={MySystem} options={{ headerShown: true }} />
  </Tab.Navigator>
  )
}

