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
import RegisterScreen from "../../screens/RegisterScreen";

class Greetings extends React.Component {
  state = {
    email: "",
    password: ""
  };
  welcomeFamily1 = () => {
    console.warn("Welcome to Young Innovations Family");
  };

  register = () => {
    return (
      /* <Register/> */
      <Text>Hello from register</Text>
    );
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.outerContainer}>
          <Image
            source={require("../../assets/yipl1.png")}
            style={styles.imageStyle}
          />

          {/* <Text style={styles.contentStyle}>Hello {this.props.name} !!! </Text> */}
          <Text style={styles.headingContent}>Login</Text>

          <View>
            <Text style={{ paddingBottom: 10, paddingTop: 10, fontSize: 16 }}>
              Email
            </Text>
            <TextInput
              style={styles.inputContent}
              placeholder="Email....."
              onChangeText={email =>
                console.warn(email) || this.setState({ email: email })
              }
            />
            <Text style={{ paddingBottom: 10, paddingTop: 10, fontSize: 16 }}>
              Password
            </Text>
            <TextInput
              style={styles.inputContent}
              placeholder="Password....."
              onChangeText={password => this.setState({ password: password })}
            />
          </View>

          {/* <View style={{paddingTop:10, flex:1,width:'80%', alignItems:'flex-start'}}>
          <Button title="Login" color="red" onPress={this.welcomeFamily} />
        </View> */}

          <View style={styles.footerContent}>
            <Text>Already a member of YIPL family?</Text>
            <Button title="Login" onPress={this.welcomeFamily1} />
            <Text>Register to join the family.</Text>
            <Button
              title="Register"
              onPress={() => this.props.navigation.navigate("Register")}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default Greetings;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: "100%"
  },
  outerContainer: {
    height: "70%",
    width: 300,
    backgroundColor: "#d2d2d2",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowOpacity: 0.58,
    shadowRadius: 10,
    elevation: 30,
    alignItems: "center"
  },
  headingContent: {
    color: "#000",
    fontSize: 30
  },
  imageStyle: {
    resizeMode: "contain",
    height: "20%",
    width: "50%"
  },
  inputContent: {
    height: 40,
    width: 250,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8
  },
  footerContent: {
    margin: "12%"
  }
});
