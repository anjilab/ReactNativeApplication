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

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Hello World!</Text>
//     </View>
//   );
// }
class Greetings extends React.Component {
  state = {
    email: "",
    password: ""
  };
  welcomeFamily= ()=>{
    console.warn('Welcome to Young Innovations Family');
  }

  render() {
    return (
      <View style={styles.outerContainer}>
        <Image
          source={require("./assets/yipl1.png")}
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
              console.log(email) || this.setState({ email: email })
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
          <Button title="Login" onPress={this.welcomeFamily} />
          <Text>Register to join the family.</Text>
          <Button title="Register" onPress={this.welcomeFamily} />

        </View> 


      </View>
    );
  }
}
// class DesignGreeting extends React.Component {
//   render() {
//     return (
//       <View>
//         <Text>This is design view</Text>
//       </View>
//     );
//   }
// }

export default class LotsOfGreetings extends React.Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Greetings name="Anjila" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  outerContainer: {
    height: "60%",
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
    height: 90,
    width: 150
  },
  inputContent: {
    height: 40,
    width: 250,
    backgroundColor: "#fff",
    padding:10,
    borderRadius:8
  },
  footerContent:{
    margin:30

  }
});

AppRegistry.registerComponent("Whatever", () => LotsOfGreetings);
