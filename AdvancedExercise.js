import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState, useEffect } from "react";
import { useFonts } from "expo-font";
import * as Font from "expo-font";
import { timeOfExercises, caloriesOfExercises, restDays } from "./Advanced";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default function AdvancedExercise({ route, navigation }) {
  const { exCounts, dayNum } = route.params;

  const [font] = useFonts({
    Konkhmer: require("./assets/fonts/KonkhmerSleokchher-Regular.ttf"),
    Itim: require("./assets/fonts/Itim-Regular.ttf"),
    LilitaOne: require("./assets/fonts/LilitaOne-Regular.ttf"),
    Lexend: require("./assets/fonts/Lexend-VariableFont_wght.ttf"),
    Homenaje: require("./assets/fonts/Homenaje-Regular.ttf"),
  });

  const countExercises = [
    "Reverse crunches",
    "Russian twists",
    "Oblique crunches",
    "Bicycle crunches",
    "Crunches",
  ];
  const [modal1, setModal1] = useState(false);
  const [finishModal, setFinishModal] = useState(false);
  const [timeMode, setTimeMode] = useState(false);
  const [exTime, setExTime] = useState(30);
  const [countMode, setCountMode] = useState(false);
  const [exCount, setExCount] = useState(50);
  const [exName, setExName] = useState("Reverse crunches");
  const [completedEx, setCompletedEx] = useState(false);
  const [completedDay, setCompletedDay] = useState(false);

  const [isPaused, setIsPaused] = useState(true);
  const [timer, setTimer] = useState(30);
  const [count, setCount] = useState(0);

  const allDays = [
    //1
    [
      { name: "Jumping jacks", reps: 35 },
      { name: "High knees", reps: 35 },
      { name: "Reverse crunches", reps: 20 },
      { name: "Mountain climbers", reps: 30 },
      { name: "Russian twists", reps: 35 },
      { name: "Bicycle crunches", reps: 20 },
      { name: "Plank", reps: 35 },
      { name: "Side plank left arm", reps: 20 },
      { name: "Side plank right arm", reps: 20 },
      { name: "Flutter kicks", reps: 25 },
      { name: "Reverse crunches", reps: 20 },
      { name: "Mountain climbers", reps: 30 },
      { name: "Russian twists", reps: 35 },
      { name: "Bicycle crunches", reps: 20 },
      { name: "Plank", reps: 35 },
      { name: "Side plank left arm", reps: 20 },
      { name: "Side plank right arm", reps: 20 },
      { name: "Cat-cow", reps: 40 },
      { name: "Crunches", reps: 40 },
    ],
    //2

    [
      { name: "High knees", reps: 35 },
      { name: "Jumping jacks", reps: 35 },
      { name: "Mountain climbers", reps: 20 },
      { name: "Russian twists", reps: 30 },
      { name: "Oblique crunches", reps: 35 },
      { name: "Side plank left arm", reps: 20 },
      { name: "Side plank right arm", reps: 35 },
      { name: "Plank", reps: 20 },
      { name: "Crunches", reps: 20 },
      { name: "Flutter kicks", reps: 35 },
      { name: "Mountain climbers", reps: 20 },
      { name: "Russian twists", reps: 30 },
      { name: "Oblique crunches", reps: 35 },
      { name: "Side plank left arm", reps: 20 },
      { name: "Side plank right arm", reps: 35 },
      { name: "Plank", reps: 20 },
      { name: "Crunches", reps: 20 },
      { name: "Cat-cow", reps: 10 },
      { name: "Cobra pose", reps: 40 },
    ],
    //3
    [
      { name: "High knees", reps: 35 },
      { name: "Jumping jacks", reps: 35 },
      { name: "Crunches", reps: 20 },
      { name: "Straight arm plank", reps: 40 },
      { name: "Plank", reps: 40 },
      { name: "Reverse crunches", reps: 20 },
      { name: "Bicycle crunches", reps: 30 },
      { name: "Mountain climbers", reps: 30 },
      { name: "Oblique crunches", reps: 20 },
      { name: "Russian twists", reps: 35 },
      { name: "Boat pose", reps: 30 },
      { name: "Crunches", reps: 20 },
      { name: "Straight arm plank", reps: 40 },
      { name: "Plank", reps: 40 },
      { name: "Reverse crunches", reps: 20 },
      { name: "Bicycle crunches", reps: 30 },
      { name: "Mountain climbers", reps: 30 },
      { name: "Oblique crunches", reps: 20 },
      { name: "Russian twists", reps: 35 },
      { name: "Cat-cow", reps: 40 },
      { name: "Cobra pose", reps: 40 },
    ],
    [],
    //5
    [
      { name: "High knees", reps: 35 },
      { name: "Jumping jacks", reps: 35 },
      { name: "Bicycle crunches", reps: 30 },
      { name: "Reverse crunches", reps: 20 },
      { name: "Straight arm plank", reps: 40 },
      { name: "Crunches", reps: 20 },
      { name: "Side plank left arm", reps: 20 },
      { name: "Side plank right arm", reps: 20 },
      { name: "Mountain climbers", reps: 30 },
      { name: "Plank", reps: 40 },
      { name: "Boat pose", reps: 40 },
      { name: "Bicycle crunches", reps: 30 },
      { name: "Reverse crunches", reps: 20 },
      { name: "Straight arm plank", reps: 40 },
      { name: "Crunches", reps: 20 },
      { name: "Side plank left arm", reps: 20 },
      { name: "Side plank right arm", reps: 20 },
      { name: "Mountain climbers", reps: 30 },
      { name: "Plank", reps: 40 },
      { name: "Cobra pose", reps: 40 },
      { name: "Cat-cow", reps: 40 },
    ],
    //6
    [
      { name: "Jumping jacks", reps: 35 },
      { name: "High knees", reps: 35 },
      { name: "Russian twists", reps: 50 },
      { name: "Bicycle crunches", reps: 30 },
      { name: "Crunches", reps: 20 },
      { name: "Straight arm plank", reps: 40 },
      { name: "Mountain climbers", reps: 30 },
      { name: "Side plank left arm", reps: 20 },
      { name: "Side plank right arm ", reps: 20 },
      { name: "Reverse crunches", reps: 20 },
      { name: "Plank", reps: 40 },
      { name: "Flutter kicks", reps: 30 },
      { name: "Russian twists", reps: 50 },
      { name: "Bicycle crunches", reps: 30 },
      { name: "Crunches", reps: 20 },
      { name: "Straight arm plank", reps: 40 },
      { name: "Mountain climbers", reps: 30 },
      { name: "Side plank left arm", reps: 20 },
      { name: "Side plank right arm", reps: 20 },
      { name: "Reverse crunches", reps: 20 },
      { name: "Plank", reps: 40 },
      { name: "Cat-cow", reps: 40 },
      { name: "Cobra pose", reps: 40 },
    ],
    //7
    [
      { name: "Jumping jacks", reps: 35 },
      { name: "High knees", reps: 35 },
      { name: "Side plank left arm", reps: 20 },
      { name: "Side plank right arm", reps: 20 },
      { name: "Oblique crunches", reps: 20 },
      { name: "Straight arm plank", reps: 40 },
      { name: "Crunches", reps: 20 },
      { name: "Mountain climbers", reps: 30 },
      { name: "Bicycle crunches", reps: 30 },
      { name: "Plank", reps: 40 },
      { name: "Reverse crunches", reps: 20 },
      { name: "Bicycle crunches", reps: 30 },
      { name: "Reverse crunches", reps: 20 },
      { name: "Boat pose", reps: 40 },
      { name: "Side plank left arm", reps: 20 },
      { name: "Side plank right arm", reps: 20 },
      { name: "Oblique crunches", reps: 20 },
      { name: "Straight arm plank", reps: 40 },
      { name: "Crunches", reps: 20 },
      { name: "Mountain climbers", reps: 30 },
      { name: "Bicycle crunches", reps: 30 },
      { name: "Plank", reps: 40 },
      { name: "Reverse crunches", reps: 20 },
      { name: "Cat-cow", reps: 40 },
      { name: "Cobra pose", reps: 40 },
    ],
    //8
    [
      { name: "Jumping jacks", reps: 35 },
      { name: "High knees", reps: 35 },
      { name: "Side plank left arm", reps: 20 },
      { name: "Side plank right arm", reps: 20 },
      { name: "Bicycle crunches", reps: 30 },
      { name: "Plank", reps: 40 },
      { name: "Reverse crunches", reps: 20 },
      { name: "Russian twists", reps: 50 },
      { name: "Oblique crunches", reps: 20 },
      { name: "Straight arm plank", reps: 40 },
      { name: "Crunches", reps: 20 },
      { name: "Mountain climbers", reps: 30 },
      { name: "Flutter kicks", reps: 30 },
      { name: "Side plank left arm", reps: 20 },
      { name: "Side plank right arm", reps: 20 },
      { name: "Bicycle crunches", reps: 30 },
      { name: "Plank", reps: 40 },
      { name: "Reverse crunches", reps: 20 },
      { name: "Russian twists", reps: 50 },
      { name: "Oblique crunches", reps: 20 },
      { name: "Straight arm plank", reps: 40 },
      { name: "Crunches", reps: 20 },
      { name: "Mountain climbers", reps: 30 },
      { name: "Cat-cow", reps: 40 },
      { name: "Cobra pose", reps: 40 },
    ],
    [],
    //10
    [
      { name: "Jumping jacks", reps: 35 },
      { name: "High knees", reps: 35 },
      { name: "Mountain climbers", reps: 30 },
      { name: "Crunches", reps: 20 },
      { name: "Russian twists", reps: 50 },
      { name: "Bicycle crunches", reps: 30 },
      { name: "Plank", reps: 40 },
      { name: "Side plank left arm", reps: 20 },
      { name: "Side plank right arm", reps: 20 },
      { name: "Oblique crunches", reps: 20 },
      { name: "Reverse crunches", reps: 20 },
      { name: "Straight arm plank", reps: 40 },
      { name: "Boat pose", reps: 40 },
      { name: "Mountain climbers", reps: 30 },
      { name: "Crunches", reps: 20 },
      { name: "Russian twists", reps: 50 },
      { name: "Bicycle crunches", reps: 30 },
      { name: "Plank", reps: 40 },
      { name: "Side plank left arm", reps: 20 },
      { name: "Side plank right arm", reps: 20 },
      { name: "Oblique crunches", reps: 20 },
      { name: "Reverse crunches", reps: 20 },
      { name: "Straight arm plank", reps: 40 },
      { name: "Cat-cow", reps: 40 },
      { name: "Cobra pose", reps: 40 },
    ],
    //11
    [
      { name: "High knees", reps: 35 },
      { name: "Jumping jacks", reps: 35 },
      { name: "Flutter kicks", reps: 30 },
      { name: "Plank", reps: 40 },
      { name: "Reverse crunches", reps: 20 },
      { name: "Straight arm plank", reps: 40 },
      { name: "Mountain climbers", reps: 30 },
      { name: "Side plank left arm", reps: 20 },
      { name: "Side plank right arm", reps: 20 },
      { name: "Russian twists", reps: 50 },
      { name: "Oblique crunches", reps: 20 },
      { name: "Crunches", reps: 20 },
      { name: "Bicycle crunches", reps: 30 },
      { name: "Boat pose", reps: 40 },
      { name: "Flutter kicks", reps: 30 },
      { name: "Plank", reps: 40 },
      { name: "Reverse crunches", reps: 20 },
      { name: "Straight arm plank", reps: 40 },
      { name: "Mountain climbers", reps: 30 },
      { name: "Side plank left arm", reps: 20 },
      { name: "Side plank right arm", reps: 20 },
      { name: "Russian twists", reps: 50 },
      { name: "Oblique crunches", reps: 20 },
      { name: "Crunches", reps: 20 },
      { name: "Bicycle crunches", reps: 30 },
      { name: "Cobra pose", reps: 40 },
      { name: "Cat-cow", reps: 40 },
    ],
    //12
    [
      { name: "High knees", reps: 35 },
      { name: "Jumping jacks", reps: 35 },
      { name: "Oblique crunches", reps: 20 },
      { name: "Straight arm plank", reps: 40 },
      { name: "Boat pose", reps: 40 },
      { name: "Reverse crunches", reps: 20 },
      { name: "Plank", reps: 40 },
      { name: "Bicycle crunches", reps: 30 },
      { name: "Side plank left arm", reps: 20 },
      { name: "Side plank right arm", reps: 20 },
      { name: "Crunches", reps: 20 },
      { name: "Mountain climbers", reps: 30 },
      { name: "Russian twists", reps: 50 },
      { name: "Flutter kicks", reps: 30 },
      { name: "Oblique crunches", reps: 20 },
      { name: "Straight arm plank", reps: 40 },
      { name: "Boat pose", reps: 40 },
      { name: "Reverse crunches", reps: 20 },
      { name: "Plank", reps: 40 },
      { name: "Bicycle crunches", reps: 30 },
      { name: "Side plank left arm", reps: 20 },
      { name: "Side plank right arm", reps: 20 },
      { name: "Crunches", reps: 20 },
      { name: "Mountain climbers", reps: 30 },
      { name: "Russian twists", reps: 50 },
      { name: "Cat-cow", reps: 40 },
      { name: "Cobra pose", reps: 40 },
    ],
    //13
    [
      { name: "Jumping jacks", reps: 35 },
      { name: "High knees", reps: 35 },
      { name: "Plank", reps: 40 },
      { name: "Mountain climbers", reps: 30 },
      { name: "Straight arm plank", reps: 40 },
      { name: "Oblique crunches", reps: 20 },
      { name: "Side plank left arm", reps: 20 },
      { name: "Side plank right arm", reps: 20 },
      { name: "Bicycle crunches", reps: 30 },
      { name: "Russian twists", reps: 50 },
      { name: "Crunches", reps: 20 },
      { name: "Flutter kicks", reps: 30 },
      { name: "Reverse crunches", reps: 20 },
      { name: "Plank", reps: 40 },
      { name: "Boat pose", reps: 40 },
      { name: "Plank", reps: 40 },
      { name: "Mountain climbers", reps: 30 },
      { name: "Straight arm plank", reps: 40 },
      { name: "Oblique crunches", reps: 20 },
      { name: "Side plank left arm", reps: 20 },
      { name: "Side plank right arm", reps: 20 },
      { name: "Bicycle crunches", reps: 30 },
      { name: "Russian twists", reps: 50 },
      { name: "Crunches", reps: 20 },
      { name: "Flutter kicks", reps: 30 },
      { name: "Reverse crunches", reps: 20 },
      { name: "Plank", reps: 40 },
      { name: "Cobra pose", reps: 40 },
      { name: "Cat-cow", reps: 40 },
    ],
    [],
    //15
    [
      { name: "Jumping jacks", reps: 35 },
      { name: "High knees", reps: 35 },
      { name: "Boat pose", reps: 40 },
      { name: "Side plank left arm", reps: 20 },
      { name: "Side plank right arm", reps: 20 },
      { name: "Bicycle crunches", reps: 30 },
      { name: "Reverse crunches", reps: 20 },
      { name: "Mountain climbers", reps: 30 },
      { name: "Plank", reps: 40 },
      { name: "Straight arm plank", reps: 40 },
      { name: "Russian twists", reps: 50 },
      { name: "Oblique crunches", reps: 20 },
      { name: "Crunches", reps: 20 },
      { name: "Boat pose", reps: 40 },
      { name: "Flutter kicks", reps: 30 },
      { name: "Boat pose", reps: 40 },
      { name: "Side plank left arm", reps: 20 },
      { name: "Side plank right arm", reps: 20 },
      { name: "Bicycle crunches", reps: 30 },
      { name: "Reverse crunches", reps: 20 },
      { name: "Mountain climbers", reps: 30 },
      { name: "Plank", reps: 40 },
      { name: "Straight arm plank", reps: 40 },
      { name: "Russian twists", reps: 50 },
      { name: "Oblique crunches", reps: 20 },
      { name: "Crunches", reps: 20 },
      { name: "Boat pose", reps: 40 },
      { name: "Cobra pose", reps: 40 },
      { name: "Cat-cow", reps: 40 },
    ],
    //16
    [
      { name: "High knees", reps: 35 },
      { name: "Jumping jacks", reps: 35 },
      { name: "Jumping jacks", reps: 35 },
      { name: "Straight arm plank", reps: 40 },
      { name: "Boat pose", reps: 40 },
      { name: "Crunches", reps: 20 },
      { name: "Side plank left arm", reps: 20 },
      { name: "Side plank right arm", reps: 20 },
      { name: "Reverse crunches", reps: 20 },
      { name: "Mountain climbers", reps: 30 },
      { name: "Oblique crunches", reps: 20 },
      { name: "Bicycle crunches", reps: 30 },
      { name: "Plank", reps: 40 },
      { name: "Russian twists", reps: 50 },
      { name: "Straight arm plank", reps: 40 },
      { name: "Flutter kicks", reps: 30 },
      { name: "Straight arm plank", reps: 40 },
      { name: "Boat pose", reps: 40 },
      { name: "Crunches", reps: 20 },
      { name: "Side plank left arm", reps: 20 },
      { name: "Side plank right arm", reps: 20 },
      { name: "Reverse crunches", reps: 20 },
      { name: "Mountain climbers", reps: 30 },
      { name: "Oblique crunches", reps: 20 },
      { name: "Bicycle crunches", reps: 30 },
      { name: "Plank", reps: 40 },
      { name: "Russian twists", reps: 50 },
      { name: "Straight arm plank", reps: 40 },
      { name: "Cat-cow", reps: 40 },
      { name: "Cobra pose", reps: 40 },
    ],
    //17
    [
      { name: "Jumping jacks", reps: 35 },
      { name: "High knees", reps: 35 },
      { name: "Mountain climbers", reps: 30 },
      { name: "Russian twists", reps: 50 },
      { name: "Straight arm plank", reps: 40 },
      { name: "Crunches", reps: 20 },
      { name: "Bicycle crunches", reps: 30 },
      { name: "Plank", reps: 40 },
      { name: "Oblique crunches", reps: 20 },
      { name: "Reverse crunches", reps: 20 },
      { name: "Mountain climbers", reps: 30 },
      { name: "Boat pose", reps: 40 },
      { name: "Side plank left arm", reps: 20 },
      { name: "Side plank right arm", reps: 20 },
      { name: "Flutter kicks", reps: 30 },
      { name: "Mountain climbers", reps: 30 },
      { name: "Russian twists", reps: 50 },
      { name: "Straight arm plank", reps: 40 },
      { name: "Crunches", reps: 20 },
      { name: "Bicycle crunches", reps: 30 },
      { name: "Plank", reps: 40 },
      { name: "Oblique crunches", reps: 20 },
      { name: "Reverse crunches", reps: 20 },
      { name: "Cat-cow", reps: 40 },
      { name: "Cobra pose", reps: 40 },
    ],
    //18
    [
      { name: "High knees", reps: 35 },
      { name: "Jumping jacks", reps: 35 },
      { name: "Oblique crunches", reps: 20 },
      { name: "Russian twists", reps: 50 },
      { name: "Bicycle crunches", reps: 30 },
      { name: "Reverse crunches", reps: 20 },
      { name: "Plank", reps: 40 },
      { name: "Crunches", reps: 20 },
      { name: "Side plank left arm", reps: 20 },
      { name: "Side plank right arm", reps: 20 },
      { name: "Mountain climbers", reps: 30 },
      { name: "Boat pose", reps: 40 },
      { name: "Flutter kicks", reps: 30 },
      { name: "Straight arm plank", reps: 40 },
      { name: "Oblique crunches", reps: 20 },
      { name: "Oblique crunches", reps: 20 },
      { name: "Russian twists", reps: 50 },
      { name: "Bicycle crunches", reps: 30 },
      { name: "Reverse crunches", reps: 20 },
      { name: "Plank", reps: 40 },
      { name: "Crunches", reps: 20 },
      { name: "Side plank left arm", reps: 20 },
      { name: "Side plank right arm", reps: 20 },
      { name: "Mountain climbers", reps: 30 },
      { name: "Boat pose", reps: 40 },
      { name: "Flutter kicks", reps: 30 },
      { name: "Straight arm plank", reps: 40 },
      { name: "Oblique crunches", reps: 20 },
      { name: "Cat-cow", reps: 40 },
      { name: "Cobra pose", reps: 40 },
    ],
    [],
    //20
    [
      { name: "Jumping jacks", reps: 40 },
      { name: "High knees", reps: 40 },
      { name: "Russian twists", reps: 100 },
      { name: "Mountain climbers", reps: 50 },
      { name: "Bicycle crunches", reps: 40 },
      { name: "Plank", reps: 60 },
      { name: "Flutter kicks", reps: 40 },
      { name: "Oblique crunches", reps: 30 },
      { name: "Side plank left arm", reps: 40 },
      { name: "Side plank right arm", reps: 40 },
      { name: "Straight arm plank", reps: 60 },
      { name: "Crunches", reps: 30 },
      { name: "Reverse crunches", reps: 30 },
      { name: "Mountain climbers", reps: 50 },
      { name: "Russian twists", reps: 100 },
      { name: "Boat pose", reps: 60 },
      { name: "Russian twists", reps: 100 },
      { name: "Mountain climbers", reps: 50 },
      { name: "Bicycle crunches", reps: 40 },
      { name: "Plank", reps: 60 },
      { name: "Flutter kicks", reps: 40 },
      { name: "Oblique crunches", reps: 30 },
      { name: "Side plank left arm", reps: 40 },
      { name: "Side plank right arm", reps: 40 },
      { name: "Straight arm plank", reps: 60 },
      { name: "Crunches", reps: 30 },
      { name: "Reverse crunches", reps: 30 },
      { name: "Mountain climbers", reps: 50 },
      { name: "Russian twists", reps: 100 },
      { name: "Cat-cow", reps: 40 },
      { name: "Cobra pose", reps: 40 },
    ],
    //21
    [
      { name: "High knees", reps: 40 },
      { name: "Jumping jacks", reps: 40 },
      { name: "Plank", reps: 60 },
      { name: "Side plank left arm", reps: 40 },
      { name: "Side plank right arm", reps: 40 },
      { name: "Reverse crunches", reps: 30 },
      { name: "Straight arm plank", reps: 60 },
      { name: "Oblique crunches", reps: 30 },
      { name: "Bicycle crunches", reps: 40 },
      { name: "Russian twists", reps: 100 },
      { name: "Crunches", reps: 30 },
      { name: "Mountain climbers", reps: 50 },
      { name: "Boat pose", reps: 60 },
      { name: "Plank", reps: 60 },
      { name: "Flutter kicks", reps: 40 },
      { name: "Plank", reps: 60 },
      { name: "Boat pose", reps: 60 },
      { name: "Side plank left arm", reps: 40 },
      { name: "Side plank right arm", reps: 40 },
      { name: "Reverse crunches", reps: 30 },
      { name: "Straight arm plank", reps: 60 },
      { name: "Oblique crunches", reps: 30 },
      { name: "Bicycle crunches", reps: 40 },
      { name: "Russian twists", reps: 100 },
      { name: "Crunches", reps: 30 },
      { name: "Mountain climbers", reps: 50 },
      { name: "Boat pose", reps: 60 },
      { name: "Plank", reps: 60 },
      { name: "Cobra pose", reps: 40 },
      { name: "Cat-cow", reps: 40 },
    ],
    //22
    [
      { name: "Jumping jacks", reps: 40 },
      { name: "High knees", reps: 40 },
      { name: "Crunches", reps: 30 },
      { name: "Straight arm plank", reps: 60 },
      { name: "Bicycle crunches", reps: 40 },
      { name: "Plank", reps: 60 },
      { name: "Flutter kicks", reps: 40 },
      { name: "Russian twists", reps: 100 },
      { name: "Mountain climbers", reps: 50 },
      { name: "Reverse crunches", reps: 30 },
      { name: "Oblique crunches", reps: 30 },
      { name: "Side plank left arm", reps: 40 },
      { name: "Side plank right arm", reps: 40 },
      { name: "Straight arm plank", reps: 60 },
      { name: "Crunches", reps: 30 },
      { name: "Boat pose", reps: 60 },
      { name: "Crunches", reps: 30 },
      { name: "Straight arm plank", reps: 60 },
      { name: "Bicycle crunches", reps: 40 },
      { name: "Plank", reps: 60 },
      { name: "Flutter kicks", reps: 40 },
      { name: "Russian twists", reps: 100 },
      { name: "Mountain climbers", reps: 50 },
      { name: "Reverse crunches", reps: 30 },
      { name: "Oblique crunches", reps: 30 },
      { name: "Side plank left arm", reps: 40 },
      { name: "Side plank right arm", reps: 40 },
      { name: "Straight arm plank", reps: 60 },
      { name: "Crunches", reps: 30 },
      { name: "Cat-cow", reps: 40 },
      { name: "Cobra pose", reps: 40 },
    ],
    //23
    [
      { name: "High knees", reps: 40 },
      { name: "Jumping jacks", reps: 40 },
      { name: "Boat pose", reps: 60 },
      { name: "Side plank left arm", reps: 40 },
      { name: "Side plank right arm", reps: 40 },
      { name: "Crunches", reps: 30 },
      { name: "Plank", reps: 60 },
      { name: "Flutter kicks", reps: 40 },
      { name: "Side plank left arm", reps: 40 },
      { name: "Side plank right arm", reps: 40 },
      { name: "Bicycle crunches", reps: 40 },
      { name: "Straight arm plank", reps: 60 },
      { name: "Russian twists", reps: 100 },
      { name: "Oblique crunches", reps: 30 },
      { name: "Mountain climbers", reps: 50 },
      { name: "Reverse crunches", reps: 30 },
      { name: "Boat pose", reps: 60 },
      { name: "Side plank left arm", reps: 40 },
      { name: "Side plank right arm", reps: 40 },
      { name: "Crunches", reps: 30 },
      { name: "Plank", reps: 60 },
      { name: "Flutter kicks", reps: 40 },
      { name: "Side plank left arm", reps: 40 },
      { name: "Side plank right arm", reps: 40 },
      { name: "Bicycle crunches", reps: 40 },
      { name: "Straight arm plank", reps: 60 },
      { name: "Russian twists", reps: 100 },
      { name: "Oblique crunches", reps: 30 },
      { name: "Mountain climbers", reps: 50 },
      { name: "Reverse crunches", reps: 30 },
      { name: "Cat-cow", reps: 40 },
      { name: "Cobra pose", reps: 40 },
    ],
    [],
    //25
    [
      { name: "High knees", reps: 40 },
      { name: "Jumping jacks", reps: 40 },
      { name: "Oblique crunches", reps: 30 },
      { name: "Straight arm plank", reps: 60 },
      { name: "Plank", reps: 60 },
      { name: "Reverse crunches", reps: 30 },
      { name: "Bicycle crunches", reps: 40 },
      { name: "Plank", reps: 60 },
      { name: "Side plank left arm", reps: 40 },
      { name: "Side plank right arm", reps: 40 },
      { name: "Oblique crunches", reps: 30 },
      { name: "Boat pose", reps: 60 },
      { name: "Mountain climbers", reps: 50 },
      { name: "Crunches", reps: 30 },
      { name: "Russian twists", reps: 100 },
      { name: "Flutter kicks", reps: 40 },
      { name: "Oblique crunches", reps: 30 },
      { name: "Straight arm plank", reps: 60 },
      { name: "Plank", reps: 60 },
      { name: "Reverse crunches", reps: 30 },
      { name: "Bicycle crunches", reps: 40 },
      { name: "Plank", reps: 60 },
      { name: "Side plank left arm", reps: 40 },
      { name: "Side plank right arm", reps: 40 },
      { name: "Oblique crunches", reps: 30 },
      { name: "Boat pose", reps: 60 },
      { name: "Mountain climbers", reps: 50 },
      { name: "Crunches", reps: 30 },
      { name: "Russian twists", reps: 100 },
      { name: "Flutter kicks", reps: 40 },
      { name: "Cat-cow", reps: 40 },
      { name: "Cobra pose", reps: 40 },
    ],
    //26
    [
      { name: "High knees", reps: 40 },
      { name: "Jumping jacks", reps: 40 },
      { name: "Flutter kicks", reps: 40 },
      { name: "Mountain climbers", reps: 50 },
      { name: "Side plank left arm", reps: 40 },
      { name: "Side plank right arm", reps: 40 },
      { name: "Boat pose", reps: 60 },
      { name: "Plank", reps: 60 },
      { name: "Crunches", reps: 30 },
      { name: "Boat pose", reps: 60 },
      { name: "Straight arm plank", reps: 60 },
      { name: "Mountain climbers", reps: 50 },
      { name: "Russian twists", reps: 100 },
      { name: "Oblique crunches", reps: 30 },
      { name: "Reverse crunches", reps: 30 },
      { name: "Bicycle crunches", reps: 40 },
      { name: "Flutter kicks", reps: 40 },
      { name: "Mountain climbers", reps: 50 },
      { name: "Side plank left arm", reps: 40 },
      { name: "Side plank right arm", reps: 40 },
      { name: "Boat pose", reps: 60 },
      { name: "Plank", reps: 60 },
      { name: "Crunches", reps: 30 },
      { name: "Boat pose", reps: 60 },
      { name: "Straight arm plank", reps: 60 },
      { name: "Mountain climbers", reps: 50 },
      { name: "Russian twists", reps: 100 },
      { name: "Oblique crunches", reps: 30 },
      { name: "Reverse crunches", reps: 30 },
      { name: "Bicycle crunches", reps: 40 },
      { name: "Cat-cow", reps: 40 },
      { name: "Cobra pose", reps: 40 },
    ],
    //27
    [
      { name: "Jumping jacks", reps: 40 },
      { name: "High knees", reps: 40 },
      { name: "Boat pose", reps: 60 },
      { name: "Crunches", reps: 30 },
      { name: "Mountain climbers", reps: 50 },
      { name: "Side plank left arm", reps: 40 },
      { name: "Side plank right arm", reps: 40 },
      { name: "Plank", reps: 60 },
      { name: "Reverse crunches", reps: 30 },
      { name: "Flutter kicks", reps: 40 },
      { name: "Russian twists", reps: 100 },
      { name: "Oblique crunches", reps: 30 },
      { name: "Side plank left arm", reps: 40 },
      { name: "Side plank right arm", reps: 40 },
      { name: "Bicycle crunches", reps: 40 },
      { name: "Straight arm plank", reps: 60 },
      { name: "Boat pose", reps: 60 },
      { name: "Crunches", reps: 30 },
      { name: "Mountain climbers", reps: 50 },
      { name: "Side plank left arm", reps: 40 },
      { name: "Side plank right arm", reps: 40 },
      { name: "Plank", reps: 60 },
      { name: "Reverse crunches", reps: 30 },
      { name: "Flutter kicks", reps: 40 },
      { name: "Russian twists", reps: 100 },
      { name: "Oblique crunches", reps: 30 },
      { name: "Side plank left arm", reps: 40 },
      { name: "Side plank right arm", reps: 40 },
      { name: "Bicycle crunches", reps: 40 },
      { name: "Straight arm plank", reps: 60 },
      { name: "Cobra pose", reps: 40 },
      { name: "Cat-cow", reps: 40 },
    ],
    //28
    [
      { name: "Jumping jacks", reps: 40 },
      { name: "High knees", reps: 40 },
      { name: "Side plank left arm", reps: 40 },
      { name: "Side plank right arm", reps: 40 },
      { name: "Reverse crunches", reps: 30 },
      { name: "Oblique crunches", reps: 30 },
      { name: "Plank", reps: 60 },
      { name: "Flutter kicks", reps: 40 },
      { name: "Boat pose", reps: 60 },
      { name: "Russian twists", reps: 100 },
      { name: "Reverse crunches", reps: 30 },
      { name: "Bicycle crunches", reps: 40 },
      { name: "Plank", reps: 60 },
      { name: "Straight arm plank", reps: 60 },
      { name: "Mountain climbers", reps: 50 },
      { name: "Russian twists", reps: 100 },
      { name: "Reverse crunches", reps: 30 },
      { name: "Crunches", reps: 30 },
      { name: "Side plank left arm", reps: 40 },
      { name: "Side plank right arm", reps: 40 },
      { name: "Reverse crunches", reps: 30 },
      { name: "Oblique crunches", reps: 30 },
      { name: "Plank", reps: 60 },
      { name: "Flutter kicks", reps: 40 },
      { name: "Boat pose", reps: 60 },
      { name: "Russian twists", reps: 100 },
      { name: "Reverse crunches", reps: 30 },
      { name: "Bicycle crunches", reps: 40 },
      { name: "Plank", reps: 60 },
      { name: "Straight arm plank", reps: 60 },
      { name: "Mountain climbers", reps: 50 },
      { name: "Russian twists", reps: 100 },
      { name: "Reverse crunches", reps: 30 },
      { name: "Crunches", reps: 30 },
      { name: "Cat-cow", reps: 40 },
      { name: "Cobra pose", reps: 40 },
    ],
    [],
    //30
    [
      { name: "Jumping jacks", reps: 40 },
      { name: "High knees", reps: 40 },
      { name: "Reverse crunches", reps: 30 },
      { name: "Mountain climbers", reps: 50 },
      { name: "Oblique crunches", reps: 30 },
      { name: "Bicycle crunches", reps: 40 },
      { name: "Crunches", reps: 30 },
      { name: "Plank", reps: 60 },
      { name: "Flutter kicks", reps: 40 },
      { name: "Straight arm plank", reps: 60 },
      { name: "Side plank left arm", reps: 40 },
      { name: "Side plank right arm", reps: 40 },
      { name: "Russian twists", reps: 100 },
      { name: "Boat pose", reps: 60 },
      { name: "Oblique crunches", reps: 30 },
      { name: "Plank", reps: 60 },
      { name: "Reverse crunches", reps: 30 },
      { name: "Mountain climbers", reps: 50 },
      { name: "Oblique crunches", reps: 30 },
      { name: "Bicycle crunches", reps: 40 },
      { name: "Crunches", reps: 30 },
      { name: "Plank", reps: 60 },
      { name: "Flutter kicks", reps: 40 },
      { name: "Straight arm plank", reps: 60 },
      { name: "Side plank left arm", reps: 40 },
      { name: "Side plank right arm", reps: 40 },
      { name: "Russian twists", reps: 100 },
      { name: "Boat pose", reps: 60 },
      { name: "Oblique crunches", reps: 30 },
      { name: "Plank", reps: 60 },
      { name: "Cobra pose", reps: 40 },
      { name: "Cat-cow", reps: 40 },
    ],
  ];

  // const [exImage, setExImage] = useState("./assets/ReverseCrunches.jpg");
  const imagesMap = {
    "Jumping jacks": require("./assets/JumpingJacks.jpg"),
    "High knees": require("./assets/HighKnees.jpg"),
    Plank: require("./assets/Plank.jpg"),
    "Mountain climbers": require("./assets/MountainClimbers.jpg"),
    "Boat pose": require("./assets/BoatPose.jpg"),
    "Side plank left arm": require("./assets/SidePlankLeftArm.jpg"),
    "Side plank right arm": require("./assets/SidePlankRightArm.jpg"),
    "Bicycle crunches": require("./assets/BicycleCrunches.jpg"),
    "Russian twists": require("./assets/RussianTwists.jpg"),
    Crunches: require("./assets/Crunches.jpg"),
    "Flutter kicks": require("./assets/FlutterKicks.jpg"),
    "Reverse crunches": require("./assets/ReverseCrunches.jpg"),
    "Oblique crunches": require("./assets/ObliqueCrunches.jpg"),
    "Straight arm plank": require("./assets/StraightArmPlank.jpg"),
    "Cobra pose": require("./assets/CobraPose.jpg"),
    "Cat-cow": require("./assets/CatCow.jpg"),
  };
  const [exTimer, setExTimer] = useState(0);
  const [currentEx, setCurrentEx] = useState(0);
  const currentEx2 = allDays[dayNum][currentEx];
  const init = 0;
  const allKcal = caloriesOfExercises.reduce((ex2, ex) => ex + ex2, init);
  useEffect(() => {
    if (!currentEx2) return;
    setExName(currentEx2.name);

    if (countExercises.includes(currentEx2.name)) {
      setCountMode(true);
      setTimeMode(false);
    } else {
      setTimeMode(true);
      setCountMode(false);
    }
    setExCount(currentEx2.reps);
    setTimer(currentEx2.reps);
    setCount(0);
    setIsPaused(true);
    setCompletedEx(false);
  }, [currentEx, dayNum]);
  useEffect(() => {
    setCompletedDay(false);
  }, [dayNum]);
  useEffect(() => {
    let interval;
    if (modal1 && !finishModal) {
      interval = setInterval(() => {
        setExTimer((prev) => prev + 1);
      }, 1000);
    }
    if (finishModal) return () => clearInterval(interval);
  }, [modal1, finishModal]);
  useEffect(() => {
    if (modal1 && timeMode && !isPaused) {
      const interval = setInterval(() => {
        setTimer((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer, modal1, timeMode, isPaused]);

  return (
    <View
      style={{
        backgroundColor: "rgb(215, 215, 215)",
        flex: 1,
      }}
    >
      {!modal1 ? (
        <View
          style={{
            flex: 1,
            zIndex: 1,
            position: "absolute",
            width: screenWidth,
            height: screenHeight,
            backgroundColor: "white",
          }}
        >
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "rgb(217, 217, 217)",
            }}
          >
            <View
              style={{
                display: "flex",
                marginLeft: 5,
              }}
            >
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("App", {
                    screen: "Advanced",
                    params: { completedDay: true, dayNum: dayNum },
                  })
                }
              >
                <Image
                  source={require("./assets/arrow.png")}
                  style={{
                    width: 16,
                    height: 16,
                    top: -50,
                  }}
                />
              </TouchableOpacity>

              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  paddingBottom: 10,
                }}
              >
                Day {dayNum + 1}
              </Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  left: -5,
                }}
              >
                <Image
                  source={require("./assets/bolt.png")}
                  style={styles.bolt}
                />
                <Image
                  source={require("./assets/bolt.png")}
                  style={styles.bolt}
                />
                <Image
                  source={require("./assets/bolt.png")}
                  style={styles.bolt}
                />
                <Text
                  style={{
                    fontSize: 15,
                  }}
                >
                  Advanced
                </Text>
              </View>
            </View>
            <View>
              <Image source={require("./assets/advancedex.png")} />
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              height: 91,
              backgroundColor: "white",
              marginBottom: 10,
            }}
          >
            <View style={{ margin: 10 }}>
              <Text style={styles.count}>{exCounts}</Text>
              <Text style={styles.countText}>Exercises</Text>
            </View>
            <View style={{ margin: 10 }}>
              <Text style={styles.count}>± {timeOfExercises[dayNum]}</Text>
              <Text style={styles.countText}>Time</Text>
            </View>
            <View style={{ margin: 10, paddingRight: 50 }}>
              <Text style={styles.count}>±{caloriesOfExercises[dayNum]}</Text>
              <Text style={styles.countText}>Calories</Text>
            </View>
          </View>
          <ScrollView
            style={{
              backgroundColor: "white",
              // paddingLeft: 120,
              // paddingTop: 87
            }}
          >
            {allDays[dayNum].map((key, index) => {
              return (
                <View
                  style={{
                    width: "auto",
                    height: 150,
                    backgroundColor: "rgb(228, 228, 228)",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingVertical: 15,
                    paddingHorizontal: 20,
                  }}
                  key={index}
                >
                  <Image
                    source={imagesMap[key.name]}
                    style={{
                      width: 120,
                      height: "auto",
                    }}
                  />
                  <View
                    style={{
                      width: 200,
                      marginTop: 35,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: 500,
                      }}
                    >
                      {key.name}
                    </Text>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 400,
                      }}
                    >
                      {key.reps}
                      {countMode ? " times" : " seconds"}
                    </Text>
                  </View>
                </View>
              );
            })}
            <View
              style={{
                height: 5,
                width: "100%",
                backgroundColor: "rgb(215, 215, 215)",
                marginRight: 10,
              }}
            />
          </ScrollView>

          <View>
            <TouchableOpacity
              style={{
                width: "50%",
                height: 55,
                backgroundColor: "black",
                alignSelf: "center",
                borderRadius: 35,
                marginTop: 15,
                marginBottom: 25,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: "white",
                  fontWeight: 400,
                  fontFamily: "Konkhmer",
                  textAlign: "center",
                  marginTop: 10,
                }}
                onPress={() => {
                  !completedDay ? setModal1(true) : "";
                }}
              >
                START
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View></View>
      )}
      {modal1 ? (
        <View
          style={{
            flex: 1,
            zIndex: 1,
            position: "absolute",
            width: screenWidth,
            height: screenHeight,
            backgroundColor: "white",
            display: "block",
          }}
        >
          <View
            style={{
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                width: screenWidth,
                height: screenWidth,
                backgroundColor: "rgb(161, 156, 156)",
              }}
            >
              <Image
                source={imagesMap[currentEx2.name]}
                style={{
                  width: 300,
                  height: 300,
                  marginTop: 56,
                  alignSelf: "center",
                }}
              />
            </View>
            <View style={{ marginTop: 45 }}>
              <Text
                style={{ textAlign: "center", fontSize: 34, fontWeight: 500 }}
              >
                {exName}
              </Text>

              <Text style={{ textAlign: "center", fontSize: 29 }}>
                {countMode ? `${exCount} times` : `${timer} seconds`}
              </Text>
              <TouchableOpacity
                style={{
                  paddingHorizontal: 125,
                  paddingVertical: 25,
                  backgroundColor: "rgb(202, 196, 188)",
                  flexDirection: "row",
                  alignSelf: "center",
                  borderRadius: 50,
                  marginTop: 95,
                  marginBottom: 20,
                }}
                onPress={() => {
                  countMode
                    ? setCount(count + 1)
                    : setIsPaused((prev) => !prev);
                  countMode
                    ? count >= exCount - 1
                      ? setCompletedEx(true)
                      : ""
                    : timer <= 0
                    ? setCompletedEx(true)
                    : "";
                }}
              >
                <Text style={{ color: "black", fontSize: 36 }}>
                  {timeMode ? (isPaused ? "▶" : "⏸") : isPaused ? "▶" : "⏸"}
                </Text>
              </TouchableOpacity>
              {completedEx ? (
                <TouchableOpacity
                  style={{
                    backgroundColor: "rgb(37, 37, 37)",
                    alignSelf: "center",
                    paddingHorizontal: 55,
                    paddingVertical: 10,
                  }}
                  onPress={() => {
                    if (currentEx < allDays[dayNum].length - 1) {
                      setCurrentEx(currentEx + 1);
                      setTimer(30);
                      setCount(0);
                      setIsPaused(true);
                    } else {
                      setModal1(false);
                      setCurrentEx(0);
                      setTimer(30);
                      setCount(0);
                      setIsPaused(true);
                      if (dayNum === 29) setFinishModal(true);
                    }
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      color: "white",
                      fontSize: 22,
                    }}
                  >
                    {currentEx >= allDays[dayNum].length - 1
                      ? "Finish"
                      : "Next"}
                  </Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={{
                    backgroundColor: "rgb(37, 37, 37)",
                    alignSelf: "center",
                    paddingHorizontal: 55,
                    paddingVertical: 10,
                  }}
                  onPress={() => {
                    if (currentEx < allDays[dayNum].length - 1) {
                      setCurrentEx(currentEx + 1);
                      setTimer(30);
                      setCount(0);
                      setIsPaused(true);
                    } else {
                      setModal1(false);
                      setCurrentEx(0);
                      setTimer(30);
                      setCount(0);
                      setIsPaused(true);
                      if (dayNum === 29) setFinishModal(true);
                    }
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      color: "white",
                      fontSize: 22,
                    }}
                  >
                    Next
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      ) : (
        <View></View>
      )}
      {finishModal ? (
        <View
          style={{
            flex: 1,
            zIndex: 1,
            position: "absolute",
            width: screenWidth,
            height: screenHeight,
            backgroundColor: "rgb(183, 173, 154)",
            display: "block",
            paddingHorizontal: 35,
            paddingVertical: 200,
          }}
        >
          <View
            style={{
              top: "35%",
              backgroundColor: "white",
              padding: 20,
              borderRadius: 10,
              width: 300,
              height: 300,
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 34,
                  marginBottom: 45,
                  textAlign: "center",
                }}
              >
                Congratulations!
              </Text>
            </View>
            <View>
              <Text
                style={{ fontSize: 26, marginBottom: 35, textAlign: "center" }}
              >
                You finished your workout
              </Text>
            </View>

            <View>
              <Text
                style={{ fontSize: 25, marginBottom: 45, textAlign: "center" }}
              >
                Your score:
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                gap: 65,
                textAlign: "center",
                alignSelf: "center",
                marginHorizontal: 65,
              }}
            >
              <View
                style={{
                  alignSelf: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 22,
                    textAlign: "center",
                    alignSelf: "center",
                  }}
                >
                  Time
                </Text>
                <Text
                  style={{
                    fontSize: 22,
                    textAlign: "center",
                    alignSelf: "center",
                  }}
                >
                  {exTimer} sec
                </Text>
              </View>
              <View
                style={{
                  alignSelf: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 22,
                    textAlign: "center",
                    alignSelf: "center",
                  }}
                >
                  Calories
                </Text>
                <Text
                  style={{
                    fontSize: 22,
                    textAlign: "center",
                    alignSelf: "center",
                  }}
                >
                  {allKcal} kcal
                </Text>
              </View>
            </View>
            {/* <TouchableOpacity onPress={() => {
                        setFinishModal(false);
                        setCompletedDay(true);
                    }} style={{
                        backgroundColor: 'black',
                        padding: 10,
                        borderRadius: 5,
                        alignItems: 'center',
                        marginTop: 10,
                    }}>
                        <Text style={{ color: 'white' }}>Close</Text>
                    </TouchableOpacity> */}
          </View>
        </View>
      ) : (
        <View></View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  bolt: {
    width: 25,
    height: 25,
  },
  count: {
    fontSize: 15,
    fontFamily: "Homenaje",
  },
  countText: {
    fontSize: 16,
    fontFamily: "Homenaje",
    color: "rgb(161, 156, 156)",
  },
});
