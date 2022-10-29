import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BigButton from "../components/BigButton";
import Personag from "../components/Personag";
import { usePersons } from "../store";

export const add = (func) => {
  func((state) => ++state);
};

export const remove = (func) => {
  func((state) => {
    if (state - 1 >= 0) {
      return state - 1;
    }
    return state;
  });
};

export default function HomePage({ navigation }) {
  const persons = usePersons();

  return (
    <View style={styles.wrapper}>
      <View style={styles.top}>
        <Text style={{ fontSize: 30, fontWeight: "500" }}>Мафия</Text>
      </View>
      <View style={styles.body}>
        <Personag
          name={"Мафия"}
          counter={persons.mafia}
          set={persons.setMafia}
        />
        <Personag
          name={"Мирный"}
          counter={persons.peaceful}
          set={persons.setPeaceful}
        />
        <Personag
          name={"Маньяк"}
          counter={persons.maniac}
          set={persons.setManiac}
        />
        <Personag name={"Доктор"} counter={persons.doc} set={persons.setDoc} />
        <Personag
          name={"Бабочка"}
          counter={persons.butterfly}
          set={persons.setButterfly}
        />
        <Personag
          name={"Шериф"}
          counter={persons.sherif}
          set={persons.setSherif}
        />
        <Text style={{ fontSize: 15, marginTop: 10, color: "#8b8bb5" }}>
          Количество игроков{" "}
          {persons.mafia +
            persons.butterfly +
            persons.doc +
            persons.maniac +
            persons.peaceful +
            persons.sherif}
        </Text>
      </View>
      <View style={styles.under}>
        <BigButton
          textStyle={{
            color: "blue",
            fontSize: 20,
            fontWeight: "300",
          }}
          onPress={() => navigation.navigate("Game")}
        >
          Распределить роли
        </BigButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 100,
    backgroundColor: "#fff",
  },
  top: {
    flex: 1,
    marginTop: 50,
  },
  body: {
    flex: 8,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  under: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
});
