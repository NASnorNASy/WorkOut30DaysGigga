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

export default function IntermediateScreen({ navigation }) {
  const [font] = useFonts({
    Konkhmer: require("./assets/fonts/KonkhmerSleokchher-Regular.ttf"),
    Itim: require("./assets/fonts/Itim-Regular.ttf"),
  });
  return (
    <LinearGradient
      colors={["rgb(2, 2, 2)", "rgb(168, 38, 228)"]}
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
            source={require("./assets/Group 5.jpeg")}
          />

          {/*Modalka 1 */}
          <View style={{ gap: 8 }}>
            <View style={styles.ModalIntermediate}>
              <View style={{ marginLeft: 10, marginTop: 22 }}>
                <Text style={styles.text1}>1</Text>
                <Text style={styles.text2}>16 Exercises</Text>
              </View>
              <TouchableOpacity
                style={styles.bt_start}
                onPress={() => navigation.navigate("IntermediateDay1")}
              >
                <Text style={styles.start}>START</Text>
              </TouchableOpacity>
            </View>

            {/*Modalka 2 */}
            <View style={styles.ModalIntermediate}>
              <View style={{ marginLeft: 10, marginTop: 22 }}>
                <Text style={styles.text1}>2</Text>
                <Text style={styles.text2}>16 Exercises</Text>
              </View>
              <TouchableOpacity
                style={styles.bt_start}
                onPress={() => navigation.navigate("IntermediateDay2")}
              >
                <Text style={styles.start}>START</Text>
              </TouchableOpacity>
            </View>

            {/*Modalka 3 */}
            <View style={styles.ModalIntermediate}>
              <View style={{ marginLeft: 10, marginTop: 22 }}>
                <Text style={styles.text1}>3</Text>
                <Text style={styles.text2}>18 Exercises</Text>
              </View>
              <TouchableOpacity
                style={styles.bt_start}
                onPress={() => navigation.navigate("IntermediateDay3")}
              >
                <Text style={styles.start}>START</Text>
              </TouchableOpacity>
            </View>

            {/*Modalka 4 */}
            <View style={styles.ModalIntermediate}>
              <View style={{ marginLeft: 10, marginTop: 22 }}>
                <Text style={styles.text1}>4</Text>
                <Text style={styles.text2}>Rest</Text>
              </View>
            </View>

            {/*Modalka 5 */}
            <View style={styles.ModalIntermediate}>
              <View style={{ marginLeft: 10, marginTop: 22 }}>
                <Text style={styles.text1}>5</Text>
                <Text style={styles.text2}>18 Exercises</Text>
              </View>
              <TouchableOpacity
                style={styles.bt_start}
                onPress={() => navigation.navigate("IntermediateDay5")}
              >
                <Text style={styles.start}>START</Text>
              </TouchableOpacity>
            </View>

            {/*Modalka 6 */}
            <View style={styles.ModalIntermediate}>
              <View style={{ marginLeft: 10, marginTop: 22 }}>
                <Text style={styles.text1}>6</Text>
                <Text style={styles.text2}>20 Exercises</Text>
              </View>
              <TouchableOpacity
                style={styles.bt_start}
                onPress={() => navigation.navigate("IntermediateDay6")}
              >
                <Text style={styles.start}>START</Text>
              </TouchableOpacity>
            </View>

            {/*Modalka 7 */}
            <View style={styles.ModalIntermediate}>
              <View style={{ marginLeft: 10, marginTop: 22 }}>
                <Text style={styles.text1}>7</Text>
                <Text style={styles.text2}>20 Exercises</Text>
              </View>
              <TouchableOpacity
                style={styles.bt_start}
                onPress={() => navigation.navigate("IntermediateDay7")}
              >
                <Text style={styles.start}>START</Text>
              </TouchableOpacity>
            </View>

            {/*Modalka 8 */}
            <View style={styles.ModalIntermediate}>
              <View style={{ marginLeft: 10, marginTop: 22 }}>
                <Text style={styles.text1}>8</Text>
                <Text style={styles.text2}>22 Exercises</Text>
              </View>
              <TouchableOpacity
                style={styles.bt_start}
                onPress={() => navigation.navigate("IntermediateDay8")}
              >
                <Text style={styles.start}>START</Text>
              </TouchableOpacity>
            </View>

            {/*Modalka 9 */}
            <View style={styles.ModalIntermediate}>
              <View style={{ marginLeft: 10, marginTop: 22 }}>
                <Text style={styles.text1}>9</Text>
                <Text style={styles.text2}>Rest</Text>
              </View>
            </View>

            {/*Modalka 10 */}
            <View style={styles.ModalIntermediate}>
              <View style={{ marginLeft: 10, marginTop: 22 }}>
                <Text style={styles.text1}>10</Text>
                <Text style={styles.text2}>22 Exercises</Text>
              </View>
              <TouchableOpacity
                style={styles.bt_start}
                onPress={() => navigation.navigate("IntermediateDay10")}
              >
                <Text style={styles.start}>START</Text>
              </TouchableOpacity>
            </View>

            {/*Modalka 11 */}
            <View style={styles.ModalIntermediate}>
              <View style={{ marginLeft: 10, marginTop: 22 }}>
                <Text style={styles.text1}>11</Text>
                <Text style={styles.text2}>24 Exercises</Text>
              </View>
              <TouchableOpacity
                style={styles.bt_start}
                onPress={() => navigation.navigate("IntermediateDay11")}
              >
                <Text style={styles.start}>START</Text>
              </TouchableOpacity>
            </View>

            {/*Modalka 12 */}
            <View style={styles.ModalIntermediate}>
              <View style={{ marginLeft: 10, marginTop: 22 }}>
                <Text style={styles.text1}>12</Text>
                <Text style={styles.text2}>24 Exercises</Text>
              </View>
              <TouchableOpacity
                style={styles.bt_start}
                onPress={() => navigation.navigate("IntermediateDay12")}
              >
                <Text style={styles.start}>START</Text>
              </TouchableOpacity>
            </View>

            {/*Modalka 13 */}
            <View style={styles.ModalIntermediate}>
              <View style={{ marginLeft: 10, marginTop: 22 }}>
                <Text style={styles.text1}>13</Text>
                <Text style={styles.text2}>25 Exercises</Text>
              </View>
              <TouchableOpacity
                style={styles.bt_start}
                onPress={() => navigation.navigate("IntermediateDay13")}
              >
                <Text style={styles.start}>START</Text>
              </TouchableOpacity>
            </View>

            {/*Modalka 14 */}
            <View style={styles.ModalIntermediate}>
              <View style={{ marginLeft: 10, marginTop: 22 }}>
                <Text style={styles.text1}>14</Text>
                <Text style={styles.text2}>Rest</Text>
              </View>
            </View>

            {/*Modalka 15 */}
            <View style={styles.ModalIntermediate}>
              <View style={{ marginLeft: 10, marginTop: 22 }}>
                <Text style={styles.text1}>15</Text>
                <Text style={styles.text2}>25 Exercises</Text>
              </View>
              <TouchableOpacity
                style={styles.bt_start}
                onPress={() => navigation.navigate("IntermediateDay15")}
              >
                <Text style={styles.start}>START</Text>
              </TouchableOpacity>
            </View>

            {/*Modalka 16 */}
            <View style={styles.ModalIntermediate}>
              <View style={{ marginLeft: 10, marginTop: 22 }}>
                <Text style={styles.text1}>16</Text>
                <Text style={styles.text2}>25 Exercises</Text>
              </View>
              <TouchableOpacity
                style={styles.bt_start}
                onPress={() => navigation.navigate("IntermediateDay16")}
              >
                <Text style={styles.start}>START</Text>
              </TouchableOpacity>
            </View>

            {/*Modalka 17 */}
            <View style={styles.ModalIntermediate}>
              <View style={{ marginLeft: 10, marginTop: 22 }}>
                <Text style={styles.text1}>17</Text>
                <Text style={styles.text2}>26 Exercises</Text>
              </View>
              <TouchableOpacity
                style={styles.bt_start}
                onPress={() => navigation.navigate("IntermediateDay17")}
              >
                <Text style={styles.start}>START</Text>
              </TouchableOpacity>
            </View>

            {/*Modalka 18 */}
            <View style={styles.ModalIntermediate}>
              <View style={{ marginLeft: 10, marginTop: 22 }}>
                <Text style={styles.text1}>18</Text>
                <Text style={styles.text2}>26 Exercises</Text>
              </View>
              <TouchableOpacity
                style={styles.bt_start}
                onPress={() => navigation.navigate("IntermediateDay18")}
              >
                <Text style={styles.start}>START</Text>
              </TouchableOpacity>
            </View>

            {/*Modalka 19 */}
            <View style={styles.ModalIntermediate}>
              <View style={{ marginLeft: 10, marginTop: 22 }}>
                <Text style={styles.text1}>19</Text>
                <Text style={styles.text2}>Rest</Text>
              </View>
            </View>

            {/*Modalka 20 */}
            <View style={styles.ModalIntermediate}>
              <View style={{ marginLeft: 10, marginTop: 22 }}>
                <Text style={styles.text1}>20</Text>
                <Text style={styles.text2}>27 Exercises</Text>
              </View>
              <TouchableOpacity
                style={styles.bt_start}
                onPress={() => navigation.navigate("IntermediateDay20")}
              >
                <Text style={styles.start}>START</Text>
              </TouchableOpacity>
            </View>

            {/*Modalka 21 */}
            <View style={styles.ModalIntermediate}>
              <View style={{ marginLeft: 10, marginTop: 22 }}>
                <Text style={styles.text1}>21</Text>
                <Text style={styles.text2}>27 Exercises</Text>
              </View>
              <TouchableOpacity
                style={styles.bt_start}
                onPress={() => navigation.navigate("IntermediateDay21")}
              >
                <Text style={styles.start}>START</Text>
              </TouchableOpacity>
            </View>

            {/*Modalka 22 */}
            <View style={styles.ModalIntermediate}>
              <View style={{ marginLeft: 10, marginTop: 22 }}>
                <Text style={styles.text1}>22</Text>
                <Text style={styles.text2}>27 Exercises</Text>
              </View>
              <TouchableOpacity
                style={styles.bt_start}
                onPress={() => navigation.navigate("IntermediateDay22")}
              >
                <Text style={styles.start}>START</Text>
              </TouchableOpacity>
            </View>

            {/*Modalka 23 */}
            <View style={styles.ModalIntermediate}>
              <View style={{ marginLeft: 10, marginTop: 22 }}>
                <Text style={styles.text1}>23</Text>
                <Text style={styles.text2}>28 Exercises</Text>
              </View>
              <TouchableOpacity
                style={styles.bt_start}
                onPress={() => navigation.navigate("IntermediateDay23")}
              >
                <Text style={styles.start}>START</Text>
              </TouchableOpacity>
            </View>

            {/*Modalka 24 */}
            <View style={styles.ModalIntermediate}>
              <View style={{ marginLeft: 10, marginTop: 22 }}>
                <Text style={styles.text1}>24</Text>
                <Text style={styles.text2}>Rest</Text>
              </View>
            </View>

            {/*Modalka 25 */}
            <View style={styles.ModalIntermediate}>
              <View style={{ marginLeft: 10, marginTop: 22 }}>
                <Text style={styles.text1}>25</Text>
                <Text style={styles.text2}>28 Exercises</Text>
              </View>
              <TouchableOpacity
                style={styles.bt_start}
                onPress={() => navigation.navigate("IntermediateDay25")}
              >
                <Text style={styles.start}>START</Text>
              </TouchableOpacity>
            </View>

            {/*Modalka 26*/}
            <View style={styles.ModalIntermediate}>
              <View style={{ marginLeft: 10, marginTop: 22 }}>
                <Text style={styles.text1}>26</Text>
                <Text style={styles.text2}>28 Exercises</Text>
              </View>
              <TouchableOpacity
                style={styles.bt_start}
                onPress={() => navigation.navigate("IntermediateDay26")}
              >
                <Text style={styles.start}>START</Text>
              </TouchableOpacity>
            </View>

            {/*Modalka 27 */}
            <View style={styles.ModalIntermediate}>
              <View style={{ marginLeft: 10, marginTop: 22 }}>
                <Text style={styles.text1}>27</Text>
                <Text style={styles.text2}>28 Exercises</Text>
              </View>
              <TouchableOpacity
                style={styles.bt_start}
                onPress={() => navigation.navigate("IntermediateDay27")}
              >
                <Text style={styles.start}>START</Text>
              </TouchableOpacity>
            </View>

            {/*Modalka 28 */}
            <View style={styles.ModalIntermediate}>
              <View style={{ marginLeft: 10, marginTop: 22 }}>
                <Text style={styles.text1}>28</Text>
                <Text style={styles.text2}>28 Exercises</Text>
              </View>
              <TouchableOpacity
                style={styles.bt_start}
                onPress={() => navigation.navigate("IntermediateDay28")}
              >
                <Text style={styles.start}>START</Text>
              </TouchableOpacity>
            </View>

            {/*Modalka 29 */}
            <View style={styles.ModalIntermediate}>
              <View style={{ marginLeft: 10, marginTop: 22 }}>
                <Text style={styles.text1}>29</Text>
                <Text style={styles.text2}>Rest</Text>
              </View>
            </View>

            {/*Modalka 30 */}
            <View style={styles.ModalIntermediate}>
              <View style={{ marginLeft: 10, marginTop: 22 }}>
                <Text style={styles.text1}>30</Text>
                <Text style={styles.text2}>28 Exercises</Text>
              </View>
              <TouchableOpacity
                style={styles.bt_start}
                onPress={() => navigation.navigate("IntermediateDay30")}
              >
                <Text style={styles.start}>START</Text>
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
  text1: {
    fontFamily: "Itim",
    color: "rgb(113, 113, 113)",
    fontSize: 12,
    fontWeight: 400,
  },
  text2: {
    fontFamily: "Itim",
    color: "rgb(113, 113, 113)",
    fontSize: 12,
    fontWeight: 400,
  },
  bt_start: {
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
  start: {
    width: 81,
    color: "rgb(255, 255, 255)",
    fontFamily: "Konkhmer",
    fontSize: 14,
    fontWeight: 400,
    textAlign: "center",
  },
  ModalIntermediate: {
    width: "auto",
    height: 72,
    backgroundColor: "rgb(255, 255, 255)",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
