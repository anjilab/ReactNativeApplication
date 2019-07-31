import React from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Hello World!</Text>
//     </View>
//   );
// }
class Greetings extends React.Component {
  render() {
    return (
      <View style={styles.outerContainer}>
        <Text style={{ color: "#000" }}>Hello {this.props.name} !!! </Text>
      </View>
    );
  }
}
class DesignGreeting extends React.Component {
  render() {
    return (
      <View>
        <Text>This is design view</Text>
      </View>
    );
  }
}

export default class LotsOfGreetings extends React.Component {
  render() {
    return (
      <View style={styles.greetingContainer}>
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
  outerContainer: {
    height: "60%",
    width: 300,
    backgroundColor: "#c8ccc9",
    borderRadius: 8
  },
  greetingContainer: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center"
  }
});

AppRegistry.registerComponent("Whatever", () => LotsOfGreetings);
