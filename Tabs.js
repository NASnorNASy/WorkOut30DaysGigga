import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useState } from "react";
import BeginnerScreen from "./Beginner";
import IntermediateScreen from "./Intermediate";
import AdvancedScreen from "./Advanced";

const Tab = createBottomTabNavigator();

export default function TabsScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Beginner") {
            iconName = "man";
          } else if (route.name === "Intermediate") {
            iconName = "man";
          } else if (route.name === "Advanced") {
            iconName = "man";
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "rgb(0, 0, 0)",
        tabBarInactiveTintColor: "rgb(115, 115, 115)",
        tabBarLabelStyle: {
          fontSize: 13,
        },
        tabBarStyle: {
          backgroundColor: "rgb(217, 217, 217)",
          borderRadius: 5,
          width: "auto",
          height: 85,
        },
      })}
    >
      <Tab.Screen
        name="Beginner"
        component={BeginnerScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Intermediate"
        component={IntermediateScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Advanced"
        component={AdvancedScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
