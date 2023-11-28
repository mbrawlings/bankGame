import { StyleSheet, Text, View } from "react-native";
import { TextInput, IconButton, Button } from "react-native-paper";
import { useState } from "react";

export default function AddPlayers({ navigation }) {
  const [newPlayer, setNewPlayer] = useState("");
  const [players, setPlayers] = useState([]);

  const addPlayerHandler = () => {
    setPlayers([...players, newPlayer]);
    setNewPlayer("");
  };

  const deletePlayerHandler = (indexToRemove) => {
    const updatedPlayers = [
      ...players.slice(0, indexToRemove),
      ...players.slice(indexToRemove + 1),
    ];
    setPlayers(updatedPlayers);
  };

  return (
    <View style={styles.container}>
      <div style={{ display: "flex", width: "100%", marginBottom: "8px" }}>
        <div style={{ width: "90%" }}>
          <TextInput
            label="Player Name"
            value={newPlayer}
            onChangeText={(text) => setNewPlayer(text)}
          />
        </div>
        <IconButton icon="plus" size={30} onPress={addPlayerHandler} />
      </div>
      {players.map((player, index) => (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            backgroundColor: "grey",
            marginTop: "4px",
            marginBottom: "4px",
          }}
        >
          <Text style={{ padding: "8px" }}>{player}</Text>
          <IconButton
            icon="delete"
            size={20}
            onPress={() => deletePlayerHandler(index)}
          />
        </div>
      ))}
      <Button
        style={{ display: players.length > 1 ? "flex" : "none" }}
        mode="contained"
        onPress={() => navigation.navigate("Rounds")}
      >
        PLAY
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "16px",
    alignItems: "center",
    justifyContent: "start",
  },
});
