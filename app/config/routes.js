import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import RegisterScreen from "../screens/RegisterScreen";
import Greetings from "../components/layouts/Greetings";
import AboutScreen from "../screens/AboutScreen";
import React from "react";

import { Image } from "react-native";

// const AppNavigator = createStackNavigator({
//   Home: HomeScreen,
//   Register:RegisterScreen,
//   Login:Greetings

// },
// {
//     initialRouteName:'Login'
// });

const transitionConfig = () => {
  console.warn("hellp");
  return {
    transitionSpec: {
      duration: 750,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true
    },
    screenInterpolator: sceneProps => {
      const { position, scene } = sceneProps;
      console.log("hereee");
      console.warn("in screnInterpolator", sceneProps);
      const thisSceneIndex = scene.Index;
      const opacity = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex],
        outputRange: [0, 1]
      });

      // const thisSceneIndex = scene.index
      // const width = layout.initWidth

      const translateX = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex],
        outputRange: [width, 0]
      });

      return { opacity };
    }
  };
};

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Register: RegisterScreen
});

const AboutStack = createStackNavigator({
  About: AboutScreen
});

// HomeStack.navigationOptions = {
//   tabBarLabel: 'Home', // Text shown below the icon in tap bar
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={'Home'}
//     />
//   )
// }

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,

      navigationOptions: {
        tabBarOptions: {
          activeTintColor: "#de1818",
          inactiveTintColor: "#000"
        },
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor, focused }) =>
          focused ? (
            <Image
              source={require("../assets/home.png")}
              style={{ height: 25, width: 50, resizeMode: "contain" }}
            />
          ) : (
            <Image
              source={require("../assets/home2.png")}
              style={{ height: 25, width: 50, resizeMode: "contain" }}
            />
          )
      }
    },
    About: {
      screen: AboutStack,
      navigationOptions: {
        tabBarOptions: {
          activeTintColor: "#de1818",
          inactiveTintColor: "#000"
        },
        tabBarIcon: ({ tintColor, focused }) =>
          focused ? (
            <Image
              source={require("../assets/contactactive.png")}
              style={{ height: 25, width: 50, resizeMode: "contain" }}
            />
          ) : (
            <Image
              source={require("../assets/contactinactive.png")}
              style={{ height: 25, width: 50, resizeMode: "contain" }}
            />
          )
      }
    }
  },
  { initialRouteName: "About", transitionConfig }
);

export default createAppContainer(TabNavigator);
