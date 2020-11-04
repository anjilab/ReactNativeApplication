import React from "react";
import { Text, View, Button } from "react-native";
import PageWrapper from "../components/layouts/PageWrapper";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <PageWrapper />
        <Text>THIS IS YIPL HOMEPAGE</Text>
        <Button
          title="Register"
          onPress={() => this.props.navigation.navigate("Register")}
        />  
      </View>
    );
  }
}
