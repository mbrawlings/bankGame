import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, RadioButton } from "react-native-paper";

export default function StartScreen({ navigation }) {
  const [checkedRounds, setCheckedRounds] = useState("10");

  return (
    <View style={styles.container}>
      <View
        style={{
          height: "70%",
          width: "100%",
          padding: "10%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 48 }}>BANK</Text>
      </View>
      <View
        style={{
          height: "30%",
          width: "100%",
          padding: "6%",
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          overflow: "hidden",
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <View>
            <Button
              mode="contained"
              onPress={() =>
                navigation.navigate("Add Players", { rounds: checkedRounds })
              }
            >
              PLAY
            </Button>
          </View>
          <View>
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'row',
                width: "100%",
              }}
            >
              <Text style={{ fontWeight: "bold" }}>NUMBER OF ROUNDS</Text>
            </View>
            <View style={{ display: "flex", justifyContent: "space-around", flexDirection: 'row' }}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <RadioButton
                  value="10"
                  status={checkedRounds === "10" ? "checked" : "unchecked"}
                  onPress={() => setCheckedRounds("10")}
                />
                <Text>10</Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <RadioButton
                  value="15"
                  status={checkedRounds === "15" ? "checked" : "unchecked"}
                  onPress={() => setCheckedRounds("15")}
                />
                <Text>15</Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <RadioButton
                  value="20"
                  status={checkedRounds === "20" ? "checked" : "unchecked"}
                  onPress={() => setCheckedRounds("20")}
                />
                <Text>20</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
