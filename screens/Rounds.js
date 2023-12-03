import { StyleSheet, Text, View } from "react-native";
import { TextInput, IconButton, Button } from "react-native-paper";
import { useState } from "react";

export default function Rounds({ navigation, route }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          height: "30%",
          width: "100%",
          display: "flex",
          padding: "10%",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <View style={{ display: "flex", flexDirection: 'row' }}>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Text>Round</Text>
            <Text>1/10</Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 48 }}>0</Text>
          <Text>Round Total</Text>
        </View>
        <View style={{ display: "flex", flexDirection: 'row' }}>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Text>Roll</Text>
            <Text>0</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          height: "70%",
          width: "100%",
          padding: "6%",
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          overflow: "hidden",
          backgroundColor: "white",
        }}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "start",
  },
});
