import { StyleSheet, Text, View } from "react-native";
import { TextInput, IconButton, Button } from "react-native-paper";
import { useState } from "react";

export default function AddPlayers({ navigation, route }) {
  const { rounds } = route.params
  console.log(rounds)
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
      <View style={{ display: "flex", flexDirection: 'row', width: "100%", marginBottom: 8 }}>
        <View style={{ flex: 1 }}>
          <TextInput
            label="Player Name"
            value={newPlayer}
            onChangeText={(text) => setNewPlayer(text)}
          />
        </View>
        <IconButton icon="plus" size={30} onPress={addPlayerHandler} />
      </View>
      {players.map((player, index) => (
        <View
          style={{
            display: "flex",
            flexDirection: 'row',
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            backgroundColor: "grey",
            marginTop: 4,
            marginBottom: 4,
          }}
        >
          <Text style={{ padding: 8 }}>{player}</Text>
          <IconButton
            icon="delete"
            size={20}
            onPress={() => deletePlayerHandler(index)}
          />
        </View>
      ))}
      <Button
        style={{ display: players.length > 1 ? "flex" : "none", marginTop: 4 }}
        mode="contained"
        onPress={() => navigation.navigate("Rounds", { rounds: rounds, players: players })}
      >
        PLAY
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "6%",
    alignItems: "center",
    justifyContent: "start",
  },
});
