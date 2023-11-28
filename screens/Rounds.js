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
          padding: "16px",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Text>Round</Text>
            <Text>1/10</Text>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: "48px" }}>0</Text>
          <Text>Round Total</Text>
        </div>
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Text>Roll</Text>
            <Text>0</Text>
          </div>
        </div>
      </View>
      <View
        style={{
          height: "70%",
          width: "100%",
          padding: "16px",
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
