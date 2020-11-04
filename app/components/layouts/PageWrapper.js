import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default class PageWrapper extends React.Component {
  render() {
    return (
      <View style={styles.outerWrapper}>
        {/* <Text>Hello</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outerWrapper: {
    flex: 1,
    backgroundColor: "red",
    height: "100%"
  }
});
