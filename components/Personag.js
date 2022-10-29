import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { add, remove } from "../pages/HomePage";
import BigButton from "./BigButton";

const Personag = ({ name, set, counter }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "flex-end",
        marginVertical: 20,
      }}
    >
      <Text style={styles.counter}>{counter}</Text>
      <Text style={styles.personName}>{name}</Text>
      <BigButton textStyle={styles.titleButtonAdd} onPress={() => add(set)}>
        +
      </BigButton>
      <BigButton textStyle={styles.titleButtonAdd} onPress={() => remove(set)}>
        -
      </BigButton>
    </View>
  );
};

export default Personag;

const styles = StyleSheet.create({
  counter: {
    fontSize: 20,
    marginRight: 40,
  },
  personName: {
    fontSize: 20,
  },
  titleButtonAdd: {
    paddingHorizontal: 15,
    marginLeft: 20,
    fontSize: 20,
    color: "blue",
  },
});
