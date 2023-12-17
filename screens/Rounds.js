import {
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  Dimensions,
} from "react-native";
import { TextInput, IconButton, Button } from "react-native-paper";
import { useState, useEffect } from "react";
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
  const [modalVisible, setModalVisible] = useState(false);

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
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={(styles.modalView)}>
                <View style={styles.row}>
                  <Button style={{ width: "20%" }} mode="contained">
                    2
                  </Button>
                  <Button style={{ width: "20%" }} mode="contained">
                    3
                  </Button>
                  <Button style={{ width: "20%" }} mode="contained">
                    4
                  </Button>
                  <Button style={{ width: "20%" }} mode="contained">
                    5
                  </Button>
                </View>
                <View style={styles.row}>
                  <Button style={{ width: "20%" }} mode="contained">
                    6
                  </Button>
                  <Button style={{ width: "20%" }} mode="contained">
                    7
                  </Button>
                  <Button style={{ width: "20%" }} mode="contained">
                    8
                  </Button>
                  <Button style={{ width: "20%" }} mode="contained">
                    9
                  </Button>
                </View>
                <View style={styles.row}>
                  <Button style={{ width: "20%" }} mode="contained">
                    10
                  </Button>
                  <Button style={{ width: "20%" }} mode="contained">
                    11
                  </Button>
                  <Button style={{ width: "20%" }} mode="contained">
                    12
                  </Button>
                  <Button style={{ width: "20%" }} mode="contained">
                    Doubles!
                  </Button>
                </View>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text>Hide Modal</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
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
            <Button
              mode="contained"
              style={{ width: "40%" }}
              onPress={() => setModalVisible(true)}
            >
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
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalView: {
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
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    height: "20%",
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
});
