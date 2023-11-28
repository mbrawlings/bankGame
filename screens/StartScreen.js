import React from 'react';
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, RadioButton } from "react-native-paper";

export default function StartScreen({ navigation }) {
  const [checked, setChecked] = useState("10");

  return (
    <View style={styles.container}>
      <View
        style={{
          height: "70%",
          width: "100%",
          padding: "32px",
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text style={{ fontSize: '48px'}}>BANK</Text>
      </View>
      <View
        style={{
          height: "30%",
          width: "100%",
          padding: "32px",
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          overflow: "hidden",
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <div>
            <Button mode="contained" onPress={() => navigation.navigate('Add Players')}>
              PLAY
            </Button>
          </div>
          <div>
            <div
              style={{
                textAlign: "center",
                width: "100%",
              }}
            >
              <Text style={{ fontWeight: "bold" }}>NUMBER OF ROUNDS</Text>
            </div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <RadioButton
                  value="10"
                  status={checked === "10" ? "checked" : "unchecked"}
                  onPress={() => setChecked("10")}
                />
                <Text>10</Text>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <RadioButton
                  value="15"
                  status={checked === "15" ? "checked" : "unchecked"}
                  onPress={() => setChecked("15")}
                />
                <Text>15</Text>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <RadioButton
                  value="20"
                  status={checked === "20" ? "checked" : "unchecked"}
                  onPress={() => setChecked("20")}
                />
                <Text>20</Text>
              </div>
            </div>
          </div>
        </div>
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
