import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState, useEffect } from "react";
import { useFonts } from "expo-font";
import * as Font from "expo-font";
import TabsScreen from "./Tabs";
export const numOFExercises = [
  19, 19, 21, 0, 21, 23, 23, 25, 0, 25, 27, 27, 29, 0, 29, 29, 30, 30, 0, 31,
  31, 31, 32, 0, 32, 32, 32, 32, 0, 32,
];
export const timeOfExercises = [
  13, 13, 17, 0, 15, 17, 17, 19, 0, 19, 20, 20, 21, 0, 21, 21, 21, 22, 0, 24,
  29, 28, 28, 0, 29, 28, 28, 29, 0, 30,
];
export const caloriesOfExercises = [
  195, 195, 255, 0, 225, 255, 255, 285, 0, 285, 300, 300, 315, 0, 315, 315, 315,
  330, 0, 360, 435, 420, 420, 0, 435, 420, 420, 435, 0, 450,
];
export const restDays = [3, 8, 13, 18, 23, 28];

export default function AdvancedScreen({ navigation, route }) {
  const [font] = useFonts({
    Konkhmer: require("./assets/fonts/KonkhmerSleokchher-Regular.ttf"),
    Itim: require("./assets/fonts/Itim-Regular.ttf"),
    LilitaOne: require("./assets/fonts/LilitaOne-Regular.ttf"),
    Lexend: require("./assets/fonts/Lexend-VariableFont_wght.ttf"),
  });
  const [current, setCurrent] = useState(0);
  const [completedDays, setCompletedDays] = useState([]);
  const [completedDay2, setCompletedDay2] = useState(false);
  const [dayNum2, setDayNum2] = useState(0);

  useEffect(() => {
    const { dayNum, completedDay } = route.params
      ? route.params
      : { dayNum: 0, completedDay: false };
    setCompletedDay2(completedDay);
    if (completedDay) {
      let nextDay = dayNum + 1;
      if (restDays.includes(nextDay) && nextDay < numOFExercises.length) {
        nextDay++;
      }
      if (nextDay < numOFExercises.length) {
        setCurrent(nextDay);
      } else {
        setCurrent(0);
      }
    }
  }, [route.params]);

  return (
    <LinearGradient
      colors={["#020202", "#E42626"]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <ScrollView style={{ paddingVertical: 42, paddingHorizontal: 15 }}>
        <Text
          style={{
            fontSize: 20,
            color: "rgba(255, 255, 255, 0.79)",
            fontFamily: "Inter",
          }}
        >
          Six Pack in 30 Days
        </Text>

        <View>
          <Image
            source={require("./assets/advancedupperbox.png")}
            style={{
              width: "auto",
              height: 131,
              borderRadius: 14,
              marginTop: 18,
              marginBottom: 16,
            }}
          />
        </View>

        {numOFExercises.map((key, index) => {
          if (index === current && !restDays.includes(index)) {
            if (key === 0) {
              return (
                <View key={index} style={styles.box}>
                  <View style={styles.textcontainer}>
                    <Text style={styles.textbox}>{index + 1}</Text>
                    <Text style={styles.textbox}>Rest</Text>
                  </View>
                </View>
              );
            } else {
              return (
                <View key={index} style={styles.box}>
                  <View style={styles.textcontainer}>
                    <Text style={styles.textbox}>{index + 1}</Text>
                    <Text style={styles.textbox}>{key} Exercises</Text>
                  </View>
                  <TouchableOpacity
                    style={styles.buttonbox}
                    onPress={() => {
                      navigation.navigate("AdvancedEx", {
                        dayNum: index,
                        exCounts: key,
                        completedDay: completedDay2,
                      });
                    }}
                  >
                    <Text style={styles.buttonboxtext}>START</Text>
                  </TouchableOpacity>
                </View>
              );
            }
          } else {
            if (key === 0) {
              return (
                <View key={index} style={styles.box}>
                  <View style={styles.textcontainer}>
                    <Text style={styles.textbox}>{index + 1}</Text>
                    <Text style={styles.textbox}>Rest</Text>
                  </View>
                </View>
              );
            } else {
              return (
                <View key={index} style={styles.box}>
                  <View style={styles.textcontainer}>
                    <Text style={styles.textbox}>{index + 1}</Text>
                    <Text style={styles.textbox}>{key} Exercises</Text>
                  </View>
                  <TouchableOpacity style={styles.buttonbox} disabled={true}>
                    <Text style={styles.buttonboxtext}>START</Text>
                  </TouchableOpacity>
                </View>
              );
            }
          }
        })}
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textbox: {
    color: "rgb(113, 113, 113)",
    fontSize: 12,
    fontFamily: "Itim",
  },
  textcontainer: {
    marginLeft: 10,
  },
  buttonbox: {
    backgroundColor: "rgb(5, 6, 31)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 15,
    width: 109,
    height: 42,
    marginRight: 12,
    paddingVertical: 9.5,
    paddingHorizontal: 14,
  },
  buttonboxtext: {
    color: "white",
    fontSize: 14,
    fontFamily: "Konkhmer",
    textAlign: "center",
    fontWeight: 400,
  },
  box: {
    backgroundColor: "white",
    display: "flex",
    borderRadius: 10,
    flexDirection: "row",
    height: 72,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  bolt: {
    width: 20,
    height: 20,
  },
});
