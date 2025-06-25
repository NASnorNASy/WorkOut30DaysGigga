import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function BeginnerScreen({ navigation }) {
  const [font] = useFonts({
    Konkhmer: require("./assets/fonts/KonkhmerSleokchher-Regular.ttf"),
    Itim: require("./assets/fonts/Itim-Regular.ttf"),
  });
  return (
    <LinearGradient
      colors={["rgb(0, 0, 0) 0.621%", "rgb(39, 50, 255) 100.799%"]}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <ScrollView>
        <View style={styles.container}>
          <Text
            style={{
              width: 190,
              height: "auto",
              fontSize: 20,
              fontWeight: 400,
              color: "rgba(255, 255, 255, 0.79)",
              textAlign: "left",
              fontFamily: "Inter",
            }}
          >
            Six Pack in 30 Days
          </Text>
          <Image
            style={{
              width: "auto",
              height: 131,
              marginTop: 18,
              borderRadius: 14,
              marginBottom: 16,
            }}
            source={require("./assets/BeginnerBlock1.png")}
          />
          <View style={{ gap: 8 }}>
            <View style={styles.boxesBeginner}>
              <View style={{ marginLeft: 10, marginTop: 22 }}>
                <Text style={styles.boxTextOne}>1</Text>
                <Text style={styles.boxTextTwo}>11 Exercises</Text>
              </View>
              <TouchableOpacity
                style={styles.boxButtonStart}
                onPress={() => navigation.navigate("BeginnerDay1")}
              >
                <Text style={styles.boxButtonStartText}>START</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.boxesBeginner}>
              <View style={{ marginLeft: 10, marginTop: 22 }}>
                <Text style={styles.boxTextOne}>2</Text>
                <Text style={styles.boxTextTwo}>11 Exercises</Text>
              </View>
              <TouchableOpacity
                style={styles.boxButtonStart}
                onPress={() => navigation.navigate("BeginnerDay2")}
              >
                <Text style={styles.boxButtonStartText}>START</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.boxesBeginner}>
              <View style={{ marginLeft: 10, marginTop: 22 }}>
                <Text style={styles.boxTextOne}>3</Text>
                <Text style={styles.boxTextTwo}>13 Exercises</Text>
              </View>
              <TouchableOpacity
                style={styles.boxButtonStart}
                onPress={() => navigation.navigate("BeginnerDay3")}
              >
                <Text style={styles.boxButtonStartText}>START</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.boxesBeginner}>
              <View style={{ marginLeft: 10, marginTop: 22 }}>
                <Text style={styles.boxTextOne}>4</Text>
                <Text style={styles.boxTextTwo}>Rest</Text>
              </View>
            </View>
            <View style={styles.boxesBeginner}>
              <View style={{ marginLeft: 10, marginTop: 22 }}>
                <Text style={styles.boxTextOne}>5</Text>
                <Text style={styles.boxTextTwo}>13 Exercises</Text>
              </View>
              <TouchableOpacity
                style={styles.boxButtonStart}
                onPress={() => navigation.navigate("BeginnerDay5")}
              >
                <Text style={styles.boxButtonStartText}>START</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.boxesBeginner}>
              <View style={{ marginLeft: 10, marginTop: 22 }}>
                <Text style={styles.boxTextOne}>6</Text>
                <Text style={styles.boxTextTwo}>15 Exercises</Text>
              </View>
              <TouchableOpacity
                style={styles.boxButtonStart}
                onPress={() => navigation.navigate("BeginnerDay6")}
              >
                <Text style={styles.boxButtonStartText}>START</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.boxesBeginner}>
              <View style={{ marginLeft: 10, marginTop: 22 }}>
                <Text style={styles.boxTextOne}>7</Text>
                <Text style={styles.boxTextTwo}>15 Exercises</Text>
              </View>
              <TouchableOpacity
                style={styles.boxButtonStart}
                onPress={() => navigation.navigate("BeginnerDay7")}
              >
                <Text style={styles.boxButtonStartText}>START</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.boxesBeginner}>
              <View style={{ marginLeft: 10, marginTop: 22 }}>
                <Text style={styles.boxTextOne}>8</Text>
                <Text style={styles.boxTextTwo}>17 Exercises</Text>
              </View>
              <TouchableOpacity
                style={styles.boxButtonStart}
                onPress={() => navigation.navigate("BeginnerDay8")}
              >
                <Text style={styles.boxButtonStartText}>START</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.boxesBeginner}>
              <View style={{ marginLeft: 10, marginTop: 22 }}>
                <Text style={styles.boxTextOne}>9</Text>
                <Text style={styles.boxTextTwo}>Rest</Text>
              </View>
            </View>
            <View style={styles.boxesBeginner}>
              <View style={{ marginLeft: 10, marginTop: 22 }}>
                <Text style={styles.boxTextOne}>10</Text>
                <Text style={styles.boxTextTwo}>17 Exercises</Text>
              </View>
              <TouchableOpacity
                style={styles.boxButtonStart}
                onPress={() => navigation.navigate("BeginnerDay10")}
              >
                <Text style={styles.boxButtonStartText}>START</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.boxesBeginner}>
              <View style={{ marginLeft: 10, marginTop: 22 }}>
                <Text style={styles.boxTextOne}>11</Text>
                <Text style={styles.boxTextTwo}>19 Exercises</Text>
              </View>
              <TouchableOpacity
                style={styles.boxButtonStart}
                onPress={() => navigation.navigate("BeginnerDay11")}
              >
                <Text style={styles.boxButtonStartText}>START</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.boxesBeginner}>
              <View style={{ marginLeft: 10, marginTop: 22 }}>
                <Text style={styles.boxTextOne}>12</Text>
                <Text style={styles.boxTextTwo}>19 Exercises</Text>
              </View>
              <TouchableOpacity
                style={styles.boxButtonStart}
                onPress={() => navigation.navigate("BeginnerDay12")}
              >
                <Text style={styles.boxButtonStartText}>START</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.boxesBeginner}>
              <View style={{ marginLeft: 10, marginTop: 22 }}>
                <Text style={styles.boxTextOne}>13</Text>
                <Text style={styles.boxTextTwo}>21 Exercises</Text>
              </View>
              <TouchableOpacity
                style={styles.boxButtonStart}
                onPress={() => navigation.navigate("BeginnerDay13")}
              >
                <Text style={styles.boxButtonStartText}>START</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.boxesBeginner}>
              <View style={{ marginLeft: 10, marginTop: 22 }}>
                <Text style={styles.boxTextOne}>14</Text>
                <Text style={styles.boxTextTwo}>Rest</Text>
              </View>
            </View>
            <View style={styles.boxesBeginner}>
              <View style={{ marginLeft: 10, marginTop: 22 }}>
                <Text style={styles.boxTextOne}>15</Text>
                <Text style={styles.boxTextTwo}>21 Exercises</Text>
              </View>
              <TouchableOpacity
                style={styles.boxButtonStart}
                onPress={() => navigation.navigate("BeginnerDay15")}
              >
                <Text style={styles.boxButtonStartText}>START</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.boxesBeginner}>
              <View style={{ marginLeft: 10, marginTop: 22 }}>
                <Text style={styles.boxTextOne}>16</Text>
                <Text style={styles.boxTextTwo}>21 Exercises</Text>
              </View>
              <TouchableOpacity
                style={styles.boxButtonStart}
                onPress={() => navigation.navigate("BeginnerDay16")}
              >
                <Text style={styles.boxButtonStartText}>START</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.boxesBeginner}>
              <View style={{ marginLeft: 10, marginTop: 22 }}>
                <Text style={styles.boxTextOne}>17</Text>
                <Text style={styles.boxTextTwo}>22 Exercises</Text>
              </View>
              <TouchableOpacity
                style={styles.boxButtonStart}
                onPress={() => navigation.navigate("BeginnerDay17")}
              >
                <Text style={styles.boxButtonStartText}>START</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.boxesBeginner}>
              <View style={{ marginLeft: 10, marginTop: 22 }}>
                <Text style={styles.boxTextOne}>18</Text>
                <Text style={styles.boxTextTwo}>22 Exercises</Text>
              </View>
              <TouchableOpacity
                style={styles.boxButtonStart}
                onPress={() => navigation.navigate("BeginnerDay18")}
              >
                <Text style={styles.boxButtonStartText}>START</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.boxesBeginner}>
              <View style={{ marginLeft: 10, marginTop: 22 }}>
                <Text style={styles.boxTextOne}>19</Text>
                <Text style={styles.boxTextTwo}>Rest</Text>
              </View>
            </View>
            <View style={styles.boxesBeginner}>
              <View style={{ marginLeft: 10, marginTop: 22 }}>
                <Text style={styles.boxTextOne}>20</Text>
                <Text style={styles.boxTextTwo}>23 Exercises</Text>
              </View>
              <TouchableOpacity
                style={styles.boxButtonStart}
                onPress={() => navigation.navigate("BeginnerDay20")}
              >
                <Text style={styles.boxButtonStartText}>START</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.boxesBeginner}>
              <View style={{ marginLeft: 10, marginTop: 22 }}>
                <Text style={styles.boxTextOne}>21</Text>
                <Text style={styles.boxTextTwo}>23 Exercises</Text>
              </View>
              <TouchableOpacity
                style={styles.boxButtonStart}
                onPress={() => navigation.navigate("BeginnerDay21")}
              >
                <Text style={styles.boxButtonStartText}>START</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.boxesBeginner}>
              <View style={{ marginLeft: 10, marginTop: 22 }}>
                <Text style={styles.boxTextOne}>22</Text>
                <Text style={styles.boxTextTwo}>23 Exercises</Text>
              </View>
              <TouchableOpacity
                style={styles.boxButtonStart}
                onPress={() => navigation.navigate("BeginnerDay22")}
              >
                <Text style={styles.boxButtonStartText}>START</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.boxesBeginner}>
              <View style={{ marginLeft: 10, marginTop: 22 }}>
                <Text style={styles.boxTextOne}>23</Text>
                <Text style={styles.boxTextTwo}>23 Exercises</Text>
              </View>
              <TouchableOpacity
                style={styles.boxButtonStart}
                onPress={() => navigation.navigate("BeginnerDay23")}
              >
                <Text style={styles.boxButtonStartText}>START</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.boxesBeginner}>
              <View style={{ marginLeft: 10, marginTop: 22 }}>
                <Text style={styles.boxTextOne}>24</Text>
                <Text style={styles.boxTextTwo}>Rest</Text>
              </View>
            </View>
            <View style={styles.boxesBeginner}>
              <View style={{ marginLeft: 10, marginTop: 22 }}>
                <Text style={styles.boxTextOne}>25</Text>
                <Text style={styles.boxTextTwo}>24 Exercises</Text>
              </View>
              <TouchableOpacity
                style={styles.boxButtonStart}
                onPress={() => navigation.navigate("BeginnerDay25")}
              >
                <Text style={styles.boxButtonStartText}>START</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.boxesBeginner}>
              <View style={{ marginLeft: 10, marginTop: 22 }}>
                <Text style={styles.boxTextOne}>26</Text>
                <Text style={styles.boxTextTwo}>24 Exercises</Text>
              </View>
              <TouchableOpacity
                style={styles.boxButtonStart}
                onPress={() => navigation.navigate("BeginnerDay26")}
              >
                <Text style={styles.boxButtonStartText}>START</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.boxesBeginner}>
              <View style={{ marginLeft: 10, marginTop: 22 }}>
                <Text style={styles.boxTextOne}>27</Text>
                <Text style={styles.boxTextTwo}>24 Exercises</Text>
              </View>
              <TouchableOpacity
                style={styles.boxButtonStart}
                onPress={() => navigation.navigate("BeginnerDay27")}
              >
                <Text style={styles.boxButtonStartText}>START</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.boxesBeginner}>
              <View style={{ marginLeft: 10, marginTop: 22 }}>
                <Text style={styles.boxTextOne}>28</Text>
                <Text style={styles.boxTextTwo}>24 Exercises</Text>
              </View>
              <TouchableOpacity
                style={styles.boxButtonStart}
                onPress={() => navigation.navigate("BeginnerDay28")}
              >
                <Text style={styles.boxButtonStartText}>START</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.boxesBeginner}>
              <View style={{ marginLeft: 10, marginTop: 22 }}>
                <Text style={styles.boxTextOne}>29</Text>
                <Text style={styles.boxTextTwo}>Rest</Text>
              </View>
            </View>
            <View style={styles.boxesBeginner}>
              <View style={{ marginLeft: 10, marginTop: 22 }}>
                <Text style={styles.boxTextOne}>30</Text>
                <Text style={styles.boxTextTwo}>24 Exercises</Text>
              </View>
              <TouchableOpacity
                style={styles.boxButtonStart}
                onPress={() => navigation.navigate("BeginnerDay30")}
              >
                <Text style={styles.boxButtonStartText}>START</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 42,
    paddingBottom: 42,
  },
  boxesBeginner: {
    width: "auto",
    height: 72,
    backgroundColor: "rgb(255, 255, 255)",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  boxTextOne: {
    fontFamily: "Itim",
    color: "rgb(113, 113, 113)",
    fontSize: 12,
    fontWeight: 400,
  },
  boxTextTwo: {
    fontFamily: "Itim",
    color: "rgb(113, 113, 113)",
    fontSize: 12,
    fontWeight: 400,
  },
  boxButtonStart: {
    marginTop: 15,
    marginRight: 12,
    borderRadius: 15,
    backgroundColor: "rgb(5, 6, 31)",
    paddingTop: 9.5,
    paddingBottom: 9.5,
    paddingLeft: 14,
    paddingRight: 14,
    width: 109,
    height: 42,
  },
  boxButtonStartText: {
    width: 81,
    color: "rgb(255, 255, 255)",
    fontFamily: "Konkhmer",
    fontSize: 14,
    fontWeight: 400,
    textAlign: "center",
  },
});
