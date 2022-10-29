import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import BigButton from "../components/BigButton";
import IconMafia from "../components/Images";
import { usePersons } from "../store";

const createArrayWith = (size, fill) => {
  return new Array(size).fill(fill);
};

const Game = () => {
  const persons = usePersons();

  const mafia = createArrayWith(persons.mafia, "Мафия");
  const peaceful = createArrayWith(persons.peaceful, "Мирный");
  const maniac = createArrayWith(persons.maniac, "Маньяк");
  const doc = createArrayWith(persons.doc, "Доктор");
  const butterfly = createArrayWith(persons.butterfly, "Бабочка");
  const sherif = createArrayWith(persons.sherif, "Шериф");

  const [allRolls, setAllRolls] = useState([
    ...mafia,
    ...peaceful,
    ...maniac,
    ...doc,
    ...butterfly,
    ...sherif,
  ]);

  const [roll, setRoll] = useState();
  const [isShowRoll, setIsShowRoll] = useState(false);
  const [isRollsArrayEmpty, setIsRollsArrayEmpty] = useState(false);

  const getRoll = (array) => {
    const randomItem = Math.floor(Math.random() * array.length);
    const result = array[randomItem];
    setAllRolls((state) => state.filter((item, index) => index !== randomItem));
    return result;
  };

  if (isRollsArrayEmpty) {
    return (
      <View style={styles.wrapper}>
        <Text style={{ fontSize: 20 }}>Ролей больше нет</Text>
      </View>
    );
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.body}>
        <IconMafia name={roll} />
        <Text style={{ fontSize: 30, marginTop: 30 }}>{roll}</Text>
      </View>

      <View style={styles.under}>
        <Text>{allRolls.length}</Text>
        <BigButton
          onPress={() => {
            if (!isShowRoll) {
              setRoll(getRoll(allRolls));
              setIsShowRoll(true);
            } else {
              if (allRolls.length === 0) {
                setIsRollsArrayEmpty(true);
              }
              setIsShowRoll(false);
              setRoll();
            }
          }}
          textStyle={{
            color: "blue",
            fontSize: 20,
            fontWeight: "300",
          }}
        >
          {isShowRoll ? "Спрятать роль" : "Показать роль"}
        </BigButton>
      </View>

      {/* {allRolls.map((item) => (
        <Text>{item}</Text>
      ))} */}
    </View>
  );
};

export default Game;

const styles = StyleSheet.create({
  wrapper: { flex: 1, justifyContent: "center", alignItems: "center" },
  body: {
    flex: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  under: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 130,
    height: 85,
  },
});
