import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function PreAppScreen({ navigation }) {
  return (
    <LinearGradient
      colors={["rgb(255, 255, 255) -41.663%", "rgb(113, 113, 113) 201.037%"]}
      style={{ flex: 1 }}
      start={{ x: 1, y: 1 }}
      end={{ x: 0, y: 0 }}
    >
      <View style={styles.container}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 24,
            fontFamily: "Inter",
            fontWeight: 500,
            marginBottom: 35,
          }}
        >
          Welcome to Six Pack in 30 Days
        </Text>
        <TouchableOpacity onPress={() => navigation.replace("App")}>
          <Image
            style={styles.blocks}
            source={require("./assets/BeginnerWelcome.jpeg")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.replace("App")}>
          <Image
            style={styles.blocks}
            source={require("./assets/IntermediateWelcome.jpeg")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.replace("App")}>
          <Image
            style={styles.blocks}
            source={require("./assets/AdvancedWelcome.jpeg")}
          />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 15,
    paddingHorizontal: 15,
    paddingTop: 155,
  },
  blocks: {
    borderRadius: 14,
    height: 131,
    width: "auto",
  },
});
