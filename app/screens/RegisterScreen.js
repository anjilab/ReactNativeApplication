import React from "react";
import { StyleSheet, Text, TextInput, View,Image,Button,Picker } from "react-native";
export default class RegisterScreen extends React.Component {
    state={
        position:''
    }
  render() {
    return (
      <View style={styles.registerWrapper}>
        <View style={styles.outerContainer}>


        <Image
            source={require("../assets/yipl1.png")}
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
            <Text style={{paddingBottom:10,paddingTop:10,fontSize:16}}>Position</Text>
            <View>
            <Picker selectedValue={this.state.position} style={{width:260}} onValueChange={(item,index)=>this.setState({position:item})}>
                <Picker.Item label='Senior Developer' value='Senior Developer'></Picker.Item>
                <Picker.Item label='Junior Developer' value='Junior Developer'></Picker.Item>
                <Picker.Item label='Trainee' value='Trainee'></Picker.Item>
                <Picker.Item label='Intern' value='Intern'></Picker.Item>

            </Picker>
            </View>


          </View>

          {/* <View style={{paddingTop:10, flex:1,width:'80%', alignItems:'flex-start'}}>
          <Button title="Login" color="red" onPress={this.welcomeFamily} />
        </View> */}

          <View style={styles.footerContent}>
            <Button title="Register" onPress={this.welcomeFamily1} />
            <Text>Go to Home Page</Text>
            <Button
              title="Home"
              onPress={() => this.props.navigation.navigate("Home")}
            />
          </View>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  registerWrapper: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: "100%"
  },
  outerContainer: {
    height: "90%",
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
  selectingPosition:{
    // height: 40,
    // width: 250,
    // backgroundColor: "#fff",
    // padding: 10,
    // borderRadius: 8
  },
  footerContent: {
    margin: "12%"
  }
});
