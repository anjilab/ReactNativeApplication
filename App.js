import React from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button
} from "react-native";
import Greetings from "./app/components/layouts/Greetings";
import { createAppContainer } from "react-navigation";
import TabNavigator from "./app/config/routes";

export default class App extends React.Component {
  render() {
    return <TabNavigator />;
  }
}

// AppRegistry.registerComponent("Whatever", () => LotsOfGreetings);



