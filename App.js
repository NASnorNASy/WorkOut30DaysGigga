import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import TabsScreen from "./Tabs";
import PreAppScreen from "./PreApp";
import BeginnerDay1Screen from "./BeginnerDay1";
import BeginnerDay2Screen from "./BeginnerDay2";
import BeginnerDay3Screen from "./BeginnerDay3";
import BeginnerDay5Screen from "./BeginnerDay5";
import BeginnerDay6Screen from "./BeginnerDay6";
import BeginnerDay7Screen from "./BeginnerDay7";
import BeginnerDay8Screen from "./BeginnerDay8";
import BeginnerDay10Screen from "./BeginnerDay10";
import BeginnerDay11Screen from "./BeginnerDay11";
import BeginnerDay12Screen from "./BeginnerDay12";
import BeginnerDay13Screen from "./BeginnerDay13";
import BeginnerDay15Screen from "./BeginnerDay15";
import BeginnerDay16Screen from "./BeginnerDay16";
import BeginnerDay17Screen from "./BeginnerDay17";
import BeginnerDay18Screen from "./BeginnerDay18";
import BeginnerDay20Screen from "./BeginnerDay20";
import BeginnerDay21Screen from "./BeginnerDay21";
import BeginnerDay22Screen from "./BeginnerDay22";
import BeginnerDay23Screen from "./BeginnerDay23";
import BeginnerDay25Screen from "./BeginnerDay25";
import BeginnerDay26Screen from "./BeginnerDay26";
import BeginnerDay27Screen from "./BeginnerDay27";
import BeginnerDay28Screen from "./BeginnerDay28";
import BeginnerDay30Screen from "./BeginnerDay30";

import IntermediateDay1Screen from "./IntermediateDay1";
import IntermediateDay2Screen from "./IntermediateDay2";
import IntermediateDay3Screen from "./IntermediateDay3";
import IntermediateDay5Screen from "./IntermediateDay5";
import IntermediateDay6Screen from "./IntermediateDay6";
import IntermediateDay7Screen from "./IntermediateDay7";
import IntermediateDay8Screen from "./IntermediateDay8";
import IntermediateDay10Screen from "./IntermediateDay10";
import IntermediateDay11Screen from "./IntermediateDay11";
import IntermediateDay12Screen from "./IntermediateDay12";
import IntermediateDay13Screen from "./IntermediateDay13";
import IntermediateDay15Screen from "./IntermediateDay15";
import IntermediateDay16Screen from "./IntermediateDay16";
import IntermediateDay17Screen from "./IntermediateDay17";
import IntermediateDay18Screen from "./IntermediateDay18";
import IntermediateDay20Screen from "./IntermediateDay20";
import IntermediateDay21Screen from "./IntermediateDay21";
import IntermediateDay22Screen from "./IntermediateDay22";
import IntermediateDay23Screen from "./IntermediateDay23";
import IntermediateDay25Screen from "./IntermediateDay25";
import IntermediateDay26Screen from "./IntermediateDay26";
import IntermediateDay27Screen from "./IntermediateDay27";
import IntermediateDay28Screen from "./IntermediateDay28";
import IntermediateDay30Screen from "./IntermediateDay30";

import AdvancedExercise from "./AdvancedExercise";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={PreAppScreen} />
        <Stack.Screen name="App" component={TabsScreen} />

        <Stack.Screen name="AdvancedEx" component={AdvancedExercise} />

        <Stack.Screen
          name="IntermediateDay1"
          component={IntermediateDay1Screen}
          options={{
            headerShown: true,
            headerTitle: "",
            headerTransparent: true,
          }}
        />

        <Stack.Screen
          name="IntermediateDay2"
          component={IntermediateDay2Screen}
          options={{
            headerShown: true,
            headerTitle: "",
            headerTransparent: true,
          }}
        />

        <Stack.Screen
          name="IntermediateDay3"
          component={IntermediateDay3Screen}
          options={{
            headerShown: true,
            headerTitle: "",
            headerTransparent: true,
          }}
        />

        <Stack.Screen
          name="IntermediateDay5"
          component={IntermediateDay5Screen}
          options={{
            headerShown: true,
            headerTitle: "",
            headerTransparent: true,
          }}
        />

        <Stack.Screen
          name="IntermediateDay6"
          component={IntermediateDay6Screen}
          options={{
            headerShown: true,
            headerTitle: "",
            headerTransparent: true,
          }}
        />

        <Stack.Screen
          name="IntermediateDay7"
          component={IntermediateDay7Screen}
          options={{
            headerShown: true,
            headerTitle: "",
            headerTransparent: true,
          }}
        />

        <Stack.Screen
          name="IntermediateDay8"
          component={IntermediateDay8Screen}
          options={{
            headerShown: true,
            headerTitle: "",
            headerTransparent: true,
          }}
        />

        <Stack.Screen
          name="IntermediateDay10"
          component={IntermediateDay10Screen}
          options={{
            headerShown: true,
            headerTitle: "",
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="IntermediateDay11"
          component={IntermediateDay11Screen}
          options={{
            headerShown: true,
            headerTitle: "",
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="IntermediateDay12"
          component={IntermediateDay12Screen}
          options={{
            headerShown: true,
            headerTitle: "",
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="IntermediateDay13"
          component={IntermediateDay13Screen}
          options={{
            headerShown: true,
            headerTitle: "",
            headerTransparent: true,
          }}
        />

        <Stack.Screen
          name="IntermediateDay15"
          component={IntermediateDay15Screen}
          options={{
            headerShown: true,
            headerTitle: "",
            headerTransparent: true,
          }}
        />

        <Stack.Screen
          name="IntermediateDay16"
          component={IntermediateDay16Screen}
          options={{
            headerShown: true,
            headerTitle: "",
            headerTransparent: true,
          }}
        />

        <Stack.Screen
          name="IntermediateDay17"
          component={IntermediateDay17Screen}
          options={{
            headerShown: true,
            headerTitle: "",
            headerTransparent: true,
          }}
        />

        <Stack.Screen
          name="IntermediateDay18"
          component={IntermediateDay18Screen}
          options={{
            headerShown: true,
            headerTitle: "",
            headerTransparent: true,
          }}
        />

        <Stack.Screen
          name="IntermediateDay20"
          component={IntermediateDay20Screen}
          options={{
            headerShown: true,
            headerTitle: "",
            headerTransparent: true,
          }}
        />

        <Stack.Screen
          name="IntermediateDay21"
          component={IntermediateDay21Screen}
          options={{
            headerShown: true,
            headerTitle: "",
            headerTransparent: true,
          }}
        />

        <Stack.Screen
          name="IntermediateDay22"
          component={IntermediateDay22Screen}
          options={{
            headerShown: true,
            headerTitle: "",
            headerTransparent: true,
          }}
        />

        <Stack.Screen
          name="IntermediateDay23"
          component={IntermediateDay23Screen}
          options={{
            headerShown: true,
            headerTitle: "",
            headerTransparent: true,
          }}
        />

        <Stack.Screen
          name="IntermediateDay25"
          component={IntermediateDay25Screen}
          options={{
            headerShown: true,
            headerTitle: "",
            headerTransparent: true,
          }}
        />

        <Stack.Screen
          name="IntermediateDay26"
          component={IntermediateDay26Screen}
          options={{
            headerShown: true,
            headerTitle: "",
            headerTransparent: true,
          }}
        />

        <Stack.Screen
          name="IntermediateDay27"
          component={IntermediateDay27Screen}
          options={{
            headerShown: true,
            headerTitle: "",
            headerTransparent: true,
          }}
        />

        <Stack.Screen
          name="IntermediateDay28"
          component={IntermediateDay28Screen}
          options={{
            headerShown: true,
            headerTitle: "",
            headerTransparent: true,
          }}
        />

        <Stack.Screen
          name="IntermediateDay30"
          component={IntermediateDay30Screen}
          options={{
            headerShown: true,
            headerTitle: "",
            headerTransparent: true,
          }}
        />

        <Stack.Screen
          name="BeginnerDay1"
          component={BeginnerDay1Screen}
          options={{
            headerShown: true,
            headerTitle: "",
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="BeginnerDay2"
          component={BeginnerDay2Screen}
          options={{
            headerShown: true,
            headerTitle: "",
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="BeginnerDay3"
          component={BeginnerDay3Screen}
          options={{
            headerShown: true,
            headerTitle: "",
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="BeginnerDay5"
          component={BeginnerDay5Screen}
          options={{
            headerShown: true,
            headerTitle: "",
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="BeginnerDay6"
          component={BeginnerDay6Screen}
          options={{
            headerShown: true,
            headerTitle: "",
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="BeginnerDay7"
          component={BeginnerDay7Screen}
          options={{
            headerShown: true,
            headerTitle: "",
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="BeginnerDay8"
          component={BeginnerDay8Screen}
          options={{
            headerShown: true,
            headerTitle: "",
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="BeginnerDay10"
          component={BeginnerDay10Screen}
          options={{
            headerShown: true,
            headerTitle: "",
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="BeginnerDay11"
          component={BeginnerDay11Screen}
          options={{
            headerShown: true,
            headerTitle: "",
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="BeginnerDay12"
          component={BeginnerDay12Screen}
          options={{
            headerShown: true,
            headerTitle: "",
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="BeginnerDay13"
          component={BeginnerDay13Screen}
          options={{
            headerShown: true,
            headerTitle: "",
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="BeginnerDay15"
          component={BeginnerDay15Screen}
          options={{
            headerShown: true,
            headerTitle: "",
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="BeginnerDay16"
          component={BeginnerDay16Screen}
          options={{
            headerShown: true,
            headerTitle: "",
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="BeginnerDay17"
          component={BeginnerDay17Screen}
          options={{
            headerShown: true,
            headerTitle: "",
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="BeginnerDay18"
          component={BeginnerDay18Screen}
          options={{
            headerShown: true,
            headerTitle: "",
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="BeginnerDay20"
          component={BeginnerDay20Screen}
          options={{
            headerShown: true,
            headerTitle: "",
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="BeginnerDay21"
          component={BeginnerDay21Screen}
          options={{
            headerShown: true,
            headerTitle: "",
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="BeginnerDay22"
          component={BeginnerDay22Screen}
          options={{
            headerShown: true,
            headerTitle: "",
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="BeginnerDay23"
          component={BeginnerDay23Screen}
          options={{
            headerShown: true,
            headerTitle: "",
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="BeginnerDay25"
          component={BeginnerDay25Screen}
          options={{
            headerShown: true,
            headerTitle: "",
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="BeginnerDay26"
          component={BeginnerDay26Screen}
          options={{
            headerShown: true,
            headerTitle: "",
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="BeginnerDay27"
          component={BeginnerDay27Screen}
          options={{
            headerShown: true,
            headerTitle: "",
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="BeginnerDay28"
          component={BeginnerDay28Screen}
          options={{
            headerShown: true,
            headerTitle: "",
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="BeginnerDay30"
          component={BeginnerDay30Screen}
          options={{
            headerShown: true,
            headerTitle: "",
            headerTransparent: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
