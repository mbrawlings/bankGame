import { StyleSheet, Text, View } from "react-native";
import { TextInput, IconButton, Button } from "react-native-paper";
import { useState } from "react";
import { useRoute } from "@react-navigation/native";

export default function Rounds({ navigation }) {
  // route
  const route = {
    params: {
      players: [
        { name: "matt", score: 0 },
        { name: "linds", score: 0 },
      ],
    },
  };
  const [currentTurn, setCurrentTurn] = useState(route.params.players[0].name);
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
        <View style={{ display: "flex", flexDirection: "row" }}>
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
        <View style={{ display: "flex", flexDirection: "row" }}>
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
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <View>
          {route?.params?.players?.map((player) => (
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                borderWidth: 1,
                padding: 8,
                margin: 4,
              }}
            >
              <Text key={player.name}>{player.name}</Text>
              <Text>{player.score}</Text>
            </View>
          ))}
        </View>
        <View>
          <Text style={{ textAlign: "center", padding: 16 }}>
            {currentTurn}'s Turn
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Button mode="contained" style={{ width: "40%" }}>
              ROLL
            </Button>
            <Button mode="contained" style={{ width: "40%" }}>
              BANK
            </Button>
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
    justifyContent: "start",
  },
});
