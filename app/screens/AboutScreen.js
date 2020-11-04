import React from "react";
import { Text, View, Animated, Image,Button, Easing,StyleSheet } from "react-native";
import PageWrapper from "../components/layouts/PageWrapper";

export default class AboutScreen extends React.Component {
  state = {
    spinValue: new Animated.Value(0)
  };
  componentDidMount() {
    this.spin();
  }
  spin = () => {
    this.state.spinValue.setValue(0);
    Animated.timing(this.state.spinValue, {
      toValue: 1,
      duration: 4000,
      easing: Easing.linear,
    }).start();
  };
  render() {
    const spin = this.state.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"]
    });
    return (
      <View>
        <PageWrapper />
        <View style={StyleSheet.container}>
        <Animated.Image
          style={{
            transform: [{ rotate: spin }]
          }}
          source={require("../assets/yipl1.png")}
        />

        <Text>THIS IS YIPL About screen page.....</Text>
        <View style={StyleSheet.animationtry}>
        <Button
          title="Register"
          onPress={() => this.props.navigation.navigate("Register",{transition:'fade'})}
        /> 
        <Button title="Home" onPress={()=>this.props.navigation.navigate("Home")}/>
        </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  animationtry:{
    height:'50%',
    width:'50%'
  }
})
