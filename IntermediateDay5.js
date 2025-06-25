import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useState, useEffect } from "react";
import { useFonts } from "expo-font";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default function IntermediateDay5Screen() {
  const [font] = useFonts({
    Jersey25: require("./assets/fonts/Jersey25-Regular.ttf"),
    Homenaje: require("./assets/fonts/Homenaje-Regular.ttf"),
    Konkhmer: require("./assets/fonts/KonkhmerSleokchher-Regular.ttf"),
  });

  const [modalScreen1, setModalScreen1] = useState("none");
  const [modalScreen2, setModalScreen2] = useState("none");
  const [modalScreen3, setModalScreen3] = useState("none");
  const [modalScreen4, setModalScreen4] = useState("none");
  const [modalScreen5, setModalScreen5] = useState("none");
  const [modalScreen6, setModalScreen6] = useState("none");
  const [modalScreen7, setModalScreen7] = useState("none");
  const [modalScreen8, setModalScreen8] = useState("none");
  const [modalScreen9, setModalScreen9] = useState("none");
  const [modalScreen10, setModalScreen10] = useState("none");
  const [modalScreen11, setModalScreen11] = useState("none");
  const [modalScreen12, setModalScreen12] = useState("none");
  const [modalScreen13, setModalScreen13] = useState("none");
  const [modalScreen14, setModalScreen14] = useState("none");
  const [modalScreen15, setModalScreen15] = useState("none");
  const [modalScreen16, setModalScreen16] = useState("none");
  const [modalScreen17, setModalScreen17] = useState("none");
  const [modalScreen18, setModalScreen18] = useState("none");

  const [modalScreenFinish, setModalScreenFinish] = useState("none");

  const [pauseButton, setPauseButton] = useState("none");
  const [startButton, setStartButton] = useState("block");
  const [mainScreen, setMainScreen] = useState("block");
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  const StartDayButton = () => {
    setMainScreen("none");
    setModalScreen1("block");
  };

  const goToNextModal = () => {
    if (modalScreen1 === "block") {
      setModalScreen1("none");
      setModalScreen2("block");
    }
    if (modalScreen2 === "block") {
      setModalScreen2("none");
      setModalScreen3("block");
    }
    if (modalScreen3 === "block") {
      setModalScreen3("none");
      setModalScreen4("block");
    }

    if (modalScreen4 === "block") {
      setModalScreen4("none");
      setModalScreen5("block");
    }
    if (modalScreen5 === "block") {
      setModalScreen5("none");
      setModalScreen6("block");
    }
    if (modalScreen6 === "block") {
      setModalScreen6("none");
      setModalScreen7("block");
    }
    if (modalScreen7 === "block") {
      setModalScreen7("none");
      setModalScreen8("block");
    }
    if (modalScreen8 === "block") {
      setModalScreen8("none");
      setModalScreen9("block");
    }
    if (modalScreen9 === "block") {
      setModalScreen9("none");
      setModalScreen10("block");
    }
    if (modalScreen10 === "block") {
      setModalScreen10("none");
      setModalScreen11("block");
    }
    if (modalScreen11 === "block") {
      setModalScreen11("none");
      setModalScreen12("block");
    }
    if (modalScreen12 === "block") {
      setModalScreen12("none");
      setModalScreen13("block");
    }
    if (modalScreen13 === "block") {
      setModalScreen13("none");
      setModalScreen14("block");
    }
    if (modalScreen14 === "block") {
      setModalScreen14("none");
      setModalScreen15("block");
    }
    if (modalScreen15 === "block") {
      setModalScreen15("none");
      setModalScreen16("block");
    }
    if (modalScreen16 === "block") {
      setModalScreen16("none");
      setModalScreen17("block");
    }

    if (modalScreen17 === "block") {
      setModalScreen17("none");
      setModalScreen18("block");
    }

    if (modalScreen18 === "block") {
      setModalScreen18("none");
      setModalScreenFinish("block");
    }

  };
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else if (!running && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  const formatTime = () => {
    const minute = Math.floor(seconds / 60);
    const second = seconds % 60;
    return `${String(minute).padStart(2, "0")}:${String(second).padStart(
      2,
      "0"
    )}`;
  };

  const StartPause = () => {
    if (pauseButton == "none" && startButton == "block") {
      setPauseButton("block");
      setStartButton("none");
    }
    if (pauseButton == "block" && startButton == "none") {
      setPauseButton("none");
      setStartButton("block");
    }
    setRunning(!running);
  };



  return (
    <ScrollView horizontal={false}>
      {/*Модальне вікно 1 */}
      <View
        style={{
          flex: 1,
          zIndex: 1,
          position: "absolute",
          width: screenWidth,
          height: screenHeight,
          backgroundColor: "white",
          display: modalScreen1,
        }}
      >
        <View
          style={{
            backgroundColor: "rgb(161, 156, 156)",
            width: screenWidth,
            height: screenWidth,
          }}
        >
          <Image
            style={{
              width: 300,
              height: 300,
              alignSelf: "center",
              marginTop: 56,
            }}
            source={require("./assets/HighKnees.jpg")}
          />
        </View>
        <View style={{ marginTop: 45 }}>
          <Text style={{ textAlign: "center", fontSize: 34, fontWeight: 500 }}>
            High Knees
          </Text>
          <Text style={{ textAlign: "center", fontSize: 29 }}>25 seconds</Text>

          <TouchableOpacity
            style={{
              paddingHorizontal: 125,
              paddingVertical: 25,
              backgroundColor: "rgb(202, 196, 188)",
              flexDirection: "row",
              alignSelf: "center",
              borderRadius: 50,
              marginTop: 95,
              marginBottom: 35,
            }}
            onPress={StartPause}
          >
            <Image
              style={{
                width: 50,
                height: 50,
                alignSelf: "center",
                display: startButton,
              }}
              source={require("./assets/Start.png")}
            />
            <Image
              style={{
                width: 50,
                height: 50,
                alignSelf: "center",
                display: pauseButton,
              }}
              source={require("./assets/Pause.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "rgb(37, 37, 37)",
              alignSelf: "center",
              paddingHorizontal: 55,
              paddingVertical: 10,
            }}
            onPress={goToNextModal}
          >
            <Text style={{ textAlign: "center", color: "white", fontSize: 22 }}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/*/////////////////////////// */}


      {/*Модальне вікно 2*/}
      <View
        style={{
          flex: 1,
          zIndex: 1,
          position: "absolute",
          width: screenWidth,
          height: screenHeight,
          backgroundColor: "white",
          display: modalScreen2,
        }}
      >
        <View
          style={{
            backgroundColor: "rgb(161, 156, 156)",
            width: screenWidth,
            height: screenWidth,
          }}
        >
          <Image
            style={{
              width: 300,
              height: 300,
              alignSelf: "center",
              marginTop: 56,
            }}
            source={require("./assets/JumpingJacks.jpg")}
          />
        </View>
        <View style={{ marginTop: 45 }}>
          <Text style={{ textAlign: "center", fontSize: 34, fontWeight: 500 }}>
            Jumping Jacks
          </Text>
          <Text style={{ textAlign: "center", fontSize: 29 }}>30 seconds</Text>
          <TouchableOpacity
            style={{
              paddingHorizontal: 125,
              paddingVertical: 25,
              backgroundColor: "rgb(202, 196, 188)",
              flexDirection: "row",
              alignSelf: "center",
              borderRadius: 50,
              marginTop: 95,
              marginBottom: 35,
            }}
            onPress={StartPause}
          >
            <Image
              style={{
                width: 50,
                height: 50,
                alignSelf: "center",
                display: startButton,
              }}
              source={require("./assets/Start.png")}
            />
            <Image
              style={{
                width: 50,
                height: 50,
                alignSelf: "center",
                display: pauseButton,
              }}
              source={require("./assets/Pause.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "rgb(37, 37, 37)",
              alignSelf: "center",
              paddingHorizontal: 55,
              paddingVertical: 10,
            }}
            onPress={goToNextModal}
          >
            <Text style={{ textAlign: "center", color: "white", fontSize: 22 }}>
              Next
            </Text>
          </TouchableOpacity>

        </View>



      </View>
      {/*/////////////////////////// */}







      {/*Модальне вікно 3*/}

      <View
        style={{
          flex: 1,
          zIndex: 1,
          position: "absolute",
          width: screenWidth,
          height: screenHeight,
          backgroundColor: "white",
          display: modalScreen3,
        }}
      >
        <View
          style={{
            backgroundColor: "rgb(161, 156, 156)",
            width: screenWidth,
            height: screenWidth,
          }}
        >
          <Image
            style={{
              width: 300,
              height: 300,
              alignSelf: "center",
              marginTop: 56,
            }}
            source={require("./assets/BicycleCrunches.jpg")}
          />
        </View>
        <View style={{ marginTop: 45 }}>
          <Text style={{ textAlign: "center", fontSize: 34, fontWeight: 500 }}>
            Bicycle Crunches
          </Text>
          <Text style={{ textAlign: "center", fontSize: 29 }}> 18 times</Text>

          <TouchableOpacity
            style={{
              paddingHorizontal: 125,
              paddingVertical: 25,
              backgroundColor: "rgb(202, 196, 188)",
              flexDirection: "row",
              alignSelf: "center",
              borderRadius: 50,
              marginTop: 95,
              marginBottom: 35,
            }}
            onPress={StartPause}
          >
            <Image
              style={{
                width: 50,
                height: 50,
                alignSelf: "center",
                display: startButton,
              }}
              source={require("./assets/Start.png")}
            />
            <Image
              style={{
                width: 50,
                height: 50,
                alignSelf: "center",
                display: pauseButton,
              }}
              source={require("./assets/Pause.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "rgb(37, 37, 37)",
              alignSelf: "center",
              paddingHorizontal: 55,
              paddingVertical: 10,
            }}
            onPress={goToNextModal}
          >
            <Text style={{ textAlign: "center", color: "white", fontSize: 22 }}>
              Next
            </Text>
          </TouchableOpacity>
        </View></View>
      {/*////////////////////////////////////////////// */}

      {/*Модальне вікно 4*/}

      <View
        style={{
          flex: 1,
          zIndex: 1,
          position: "absolute",
          width: screenWidth,
          height: screenHeight,
          backgroundColor: "white",
          display: modalScreen4,
        }}
      >
        <View
          style={{
            backgroundColor: "rgb(161, 156, 156)",
            width: screenWidth,
            height: screenWidth,
          }}
        >
          <Image
            style={{
              width: 300,
              height: 300,
              alignSelf: "center",
              marginTop: 56,
            }}
            source={require("./assets/StraightArmPlank.jpg")}
          />
        </View>
        <View style={{ marginTop: 45 }}>
          <Text style={{ textAlign: "center", fontSize: 34, fontWeight: 500 }}>
            Straight Arm Plank
          </Text>
          <Text style={{ textAlign: "center", fontSize: 29 }}>30 seconds</Text>

          <TouchableOpacity
            style={{
              paddingHorizontal: 125,
              paddingVertical: 25,
              backgroundColor: "rgb(202, 196, 188)",
              flexDirection: "row",
              alignSelf: "center",
              borderRadius: 50,
              marginTop: 95,
              marginBottom: 35,
            }}
            onPress={StartPause}
          >
            <Image
              style={{
                width: 50,
                height: 50,
                alignSelf: "center",
                display: startButton,
              }}
              source={require("./assets/Start.png")}
            />
            <Image
              style={{
                width: 50,
                height: 50,
                alignSelf: "center",
                display: pauseButton,
              }}
              source={require("./assets/Pause.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "rgb(37, 37, 37)",
              alignSelf: "center",
              paddingHorizontal: 55,
              paddingVertical: 10,
            }}
            onPress={goToNextModal}
          >
            <Text style={{ textAlign: "center", color: "white", fontSize: 22 }}>
              Next
            </Text>
          </TouchableOpacity>
        </View></View>
      {/*////////////////////////////////////////////// */}

      {/*Модальне вікно 5*/}
      <View
        style={{
          flex: 1,
          zIndex: 1,
          position: "absolute",
          width: screenWidth,
          height: screenHeight,
          backgroundColor: "white",
          display: modalScreen5,
        }}
      >
        <View
          style={{
            backgroundColor: "rgb(161, 156, 156)",
            width: screenWidth,
            height: screenWidth,
          }}
        >
          <Image
            style={{
              width: 300,
              height: 300,
              alignSelf: "center",
              marginTop: 56,
            }}
            source={require("./assets/RussianTwists.jpg")}
          />
        </View>
        <View style={{ marginTop: 45 }}>
          <Text style={{ textAlign: "center", fontSize: 34, fontWeight: 500 }}>
            Russian Twists
          </Text>
          <Text style={{ textAlign: "center", fontSize: 29 }}>20 times</Text>

          <TouchableOpacity
            style={{
              paddingHorizontal: 125,
              paddingVertical: 25,
              backgroundColor: "rgb(202, 196, 188)",
              flexDirection: "row",
              alignSelf: "center",
              borderRadius: 50,
              marginTop: 95,
              marginBottom: 35,
            }}
            onPress={StartPause}
          >
            <Image
              style={{
                width: 50,
                height: 50,
                alignSelf: "center",
                display: startButton,
              }}
              source={require("./assets/Start.png")}
            />
            <Image
              style={{
                width: 50,
                height: 50,
                alignSelf: "center",
                display: pauseButton,
              }}
              source={require("./assets/Pause.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "rgb(37, 37, 37)",
              alignSelf: "center",
              paddingHorizontal: 55,
              paddingVertical: 10,
            }}
            onPress={goToNextModal}
          >
            <Text style={{ textAlign: "center", color: "white", fontSize: 22 }}>
              Next
            </Text>
          </TouchableOpacity>
        </View></View>
      {/*////////////////////////////////////////////// */}

      {/*Модальне вікно 6*/}
      <View
        style={{
          flex: 1,
          zIndex: 1,
          position: "absolute",
          width: screenWidth,
          height: screenHeight,
          backgroundColor: "white",
          display: modalScreen6,
        }}
      >
        <View
          style={{
            backgroundColor: "rgb(161, 156, 156)",
            width: screenWidth,
            height: screenWidth,
          }}
        >
          <Image
            style={{
              width: 300,
              height: 300,
              alignSelf: "center",
              marginTop: 56,
            }}
            source={require("./assets/BoatPose.jpg")}
          />
        </View>
        <View style={{ marginTop: 45 }}>
          <Text style={{ textAlign: "center", fontSize: 34, fontWeight: 500 }}>
            Boat Pose
          </Text>
          <Text style={{ textAlign: "center", fontSize: 29 }}>25 seconds</Text>

          <TouchableOpacity
            style={{
              paddingHorizontal: 125,
              paddingVertical: 25,
              backgroundColor: "rgb(202, 196, 188)",
              flexDirection: "row",
              alignSelf: "center",
              borderRadius: 50,
              marginTop: 95,
              marginBottom: 35,
            }}
            onPress={StartPause}
          >
            <Image
              style={{
                width: 50,
                height: 50,
                alignSelf: "center",
                display: startButton,
              }}
              source={require("./assets/Start.png")}
            />
            <Image
              style={{
                width: 50,
                height: 50,
                alignSelf: "center",
                display: pauseButton,
              }}
              source={require("./assets/Pause.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "rgb(37, 37, 37)",
              alignSelf: "center",
              paddingHorizontal: 55,
              paddingVertical: 10,
            }}
            onPress={goToNextModal}
          >
            <Text style={{ textAlign: "center", color: "white", fontSize: 22 }}>
              Next
            </Text>
          </TouchableOpacity>
        </View></View>
      {/*////////////////////////////////////////////// */}

      {/*Модальне вікно 7*/}


      <View
        style={{
          flex: 1,
          zIndex: 1,
          position: "absolute",
          width: screenWidth,
          height: screenHeight,
          backgroundColor: "white",
          display: modalScreen7,
        }}
      >
        <View
          style={{
            backgroundColor: "rgb(161, 156, 156)",
            width: screenWidth,
            height: screenWidth,
          }}
        >
          <Image
            style={{
              width: 300,
              height: 300,
              alignSelf: "center",
              marginTop: 56,
            }}
            source={require("./assets/FlutterKicks.jpg")}
          />
        </View>
        <View style={{ marginTop: 45 }}>
          <Text style={{ textAlign: "center", fontSize: 34, fontWeight: 500 }}>
            Flutter Kicks
          </Text>
          <Text style={{ textAlign: "center", fontSize: 29 }}> 20 seconds</Text>

          <TouchableOpacity
            style={{
              paddingHorizontal: 125,
              paddingVertical: 25,
              backgroundColor: "rgb(202, 196, 188)",
              flexDirection: "row",
              alignSelf: "center",
              borderRadius: 50,
              marginTop: 95,
              marginBottom: 35,
            }}
            onPress={StartPause}
          >
            <Image
              style={{
                width: 50,
                height: 50,
                alignSelf: "center",
                display: startButton,
              }}
              source={require("./assets/Start.png")}
            />
            <Image
              style={{
                width: 50,
                height: 50,
                alignSelf: "center",
                display: pauseButton,
              }}
              source={require("./assets/Pause.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "rgb(37, 37, 37)",
              alignSelf: "center",
              paddingHorizontal: 55,
              paddingVertical: 10,
            }}
            onPress={goToNextModal}
          >
            <Text style={{ textAlign: "center", color: "white", fontSize: 22 }}>
              Next
            </Text>
          </TouchableOpacity>
        </View></View>
      {/*////////////////////////////////////////////// */}

      {/*Модальне вікно 8*/}

      <View
        style={{
          flex: 1,
          zIndex: 1,
          position: "absolute",
          width: screenWidth,
          height: screenHeight,
          backgroundColor: "white",
          display: modalScreen8,
        }}
      >
        <View
          style={{
            backgroundColor: "rgb(161, 156, 156)",
            width: screenWidth,
            height: screenWidth,
          }}
        >
          <Image
            style={{
              width: 300,
              height: 300,
              alignSelf: "center",
              marginTop: 56,
            }}
            source={require("./assets/MountainClimbers.jpg")}
          />
        </View>
        <View style={{ marginTop: 45 }}>
          <Text style={{ textAlign: "center", fontSize: 34, fontWeight: 500 }}>
         Mountain Climbers 
          </Text>
          <Text style={{ textAlign: "center", fontSize: 29 }}> 25 seconds</Text>

          <TouchableOpacity
            style={{
              paddingHorizontal: 125,
              paddingVertical: 25,
              backgroundColor: "rgb(202, 196, 188)",
              flexDirection: "row",
              alignSelf: "center",
              borderRadius: 50,
              marginTop: 95,
              marginBottom: 35,
            }}
            onPress={StartPause}
          >
            <Image
              style={{
                width: 50,
                height: 50,
                alignSelf: "center",
                display: startButton,
              }}
              source={require("./assets/Start.png")}
            />
            <Image
              style={{
                width: 50,
                height: 50,
                alignSelf: "center",
                display: pauseButton,
              }}
              source={require("./assets/Pause.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "rgb(37, 37, 37)",
              alignSelf: "center",
              paddingHorizontal: 55,
              paddingVertical: 10,
            }}
            onPress={goToNextModal}
          >
            <Text style={{ textAlign: "center", color: "white", fontSize: 22 }}>
              Next
            </Text>
          </TouchableOpacity>
        </View></View>
      {/*////////////////////////////////////////////// */}


      {/*Модальне вікно 9*/}

      <View
        style={{
          flex: 1,
          zIndex: 1,
          position: "absolute",
          width: screenWidth,
          height: screenHeight,
          backgroundColor: "white",
          display: modalScreen9,
        }}
      >
        <View
          style={{
            backgroundColor: "rgb(161, 156, 156)",
            width: screenWidth,
            height: screenWidth,
          }}
        >
          <Image
            style={{
              width: 300,
              height: 300,
              alignSelf: "center",
              marginTop: 56,
            }}
            source={require("./assets/Crunches.jpg")}
          />
        </View>
        <View style={{ marginTop: 45 }}>
          <Text style={{ textAlign: "center", fontSize: 34, fontWeight: 500 }}>
            Crunches
          </Text>
          <Text style={{ textAlign: "center", fontSize: 29 }}>  18 times</Text>

          <TouchableOpacity
            style={{
              paddingHorizontal: 125,
              paddingVertical: 25,
              backgroundColor: "rgb(202, 196, 188)",
              flexDirection: "row",
              alignSelf: "center",
              borderRadius: 50,
              marginTop: 95,
              marginBottom: 35,
            }}
            onPress={StartPause}
          >
            <Image
              style={{
                width: 50,
                height: 50,
                alignSelf: "center",
                display: startButton,
              }}
              source={require("./assets/Start.png")}
            />
            <Image
              style={{
                width: 50,
                height: 50,
                alignSelf: "center",
                display: pauseButton,
              }}
              source={require("./assets/Pause.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "rgb(37, 37, 37)",
              alignSelf: "center",
              paddingHorizontal: 55,
              paddingVertical: 10,
            }}
            onPress={goToNextModal}
          >
            <Text style={{ textAlign: "center", color: "white", fontSize: 22 }}>
              Next
            </Text>
          </TouchableOpacity>
        </View></View>
      {/*////////////////////////////////////////////// */}



    {/*Модальне вікно 10*/}

      <View
        style={{
          flex: 1,
          zIndex: 1,
          position: "absolute",
          width: screenWidth,
          height: screenHeight,
          backgroundColor: "white",
          display: modalScreen10,
        }}
      >
        <View
          style={{
            backgroundColor: "rgb(161, 156, 156)",
            width: screenWidth,
            height: screenWidth,
          }}
        >
          <Image
            style={{
              width: 300,
              height: 300,
              alignSelf: "center",
              marginTop: 56,
            }}
            source={require("./assets/BicycleCrunches.jpg")}
          />
        </View>
        <View style={{ marginTop: 45 }}>
          <Text style={{ textAlign: "center", fontSize: 34, fontWeight: 500 }}>
            Bicycle Crunches
          </Text>
          <Text style={{ textAlign: "center", fontSize: 29 }}> 18 times</Text>

          <TouchableOpacity
            style={{
              paddingHorizontal: 125,
              paddingVertical: 25,
              backgroundColor: "rgb(202, 196, 188)",
              flexDirection: "row",
              alignSelf: "center",
              borderRadius: 50,
              marginTop: 95,
              marginBottom: 35,
            }}
            onPress={StartPause}
          >
            <Image
              style={{
                width: 50,
                height: 50,
                alignSelf: "center",
                display: startButton,
              }}
              source={require("./assets/Start.png")}
            />
            <Image
              style={{
                width: 50,
                height: 50,
                alignSelf: "center",
                display: pauseButton,
              }}
              source={require("./assets/Pause.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "rgb(37, 37, 37)",
              alignSelf: "center",
              paddingHorizontal: 55,
              paddingVertical: 10,
            }}
            onPress={goToNextModal}
          >
            <Text style={{ textAlign: "center", color: "white", fontSize: 22 }}>
              Next
            </Text>
          </TouchableOpacity>
        </View></View>
      {/*////////////////////////////////////////////// */}

      {/*Модальне вікно 11*/}

      <View
        style={{
          flex: 1,
          zIndex: 1,
          position: "absolute",
          width: screenWidth,
          height: screenHeight,
          backgroundColor: "white",
          display: modalScreen11,
        }}
      >
        <View
          style={{
            backgroundColor: "rgb(161, 156, 156)",
            width: screenWidth,
            height: screenWidth,
          }}
        >
          <Image
            style={{
              width: 300,
              height: 300,
              alignSelf: "center",
              marginTop: 56,
            }}
            source={require("./assets/StraightArmPlank.jpg")}
          />
        </View>
        <View style={{ marginTop: 45 }}>
          <Text style={{ textAlign: "center", fontSize: 34, fontWeight: 500 }}>
            Straight Arm Plank
          </Text>
          <Text style={{ textAlign: "center", fontSize: 29 }}>30 seconds</Text>

          <TouchableOpacity
            style={{
              paddingHorizontal: 125,
              paddingVertical: 25,
              backgroundColor: "rgb(202, 196, 188)",
              flexDirection: "row",
              alignSelf: "center",
              borderRadius: 50,
              marginTop: 95,
              marginBottom: 35,
            }}
            onPress={StartPause}
          >
            <Image
              style={{
                width: 50,
                height: 50,
                alignSelf: "center",
                display: startButton,
              }}
              source={require("./assets/Start.png")}
            />
            <Image
              style={{
                width: 50,
                height: 50,
                alignSelf: "center",
                display: pauseButton,
              }}
              source={require("./assets/Pause.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "rgb(37, 37, 37)",
              alignSelf: "center",
              paddingHorizontal: 55,
              paddingVertical: 10,
            }}
            onPress={goToNextModal}
          >
            <Text style={{ textAlign: "center", color: "white", fontSize: 22 }}>
              Next
            </Text>
          </TouchableOpacity>
        </View></View>
      {/*////////////////////////////////////////////// */}

      {/*Модальне вікно 12*/}
      <View
        style={{
          flex: 1,
          zIndex: 1,
          position: "absolute",
          width: screenWidth,
          height: screenHeight,
          backgroundColor: "white",
          display: modalScreen12,
        }}
      >
        <View
          style={{
            backgroundColor: "rgb(161, 156, 156)",
            width: screenWidth,
            height: screenWidth,
          }}
        >
          <Image
            style={{
              width: 300,
              height: 300,
              alignSelf: "center",
              marginTop: 56,
            }}
            source={require("./assets/RussianTwists.jpg")}
          />
        </View>
        <View style={{ marginTop: 45 }}>
          <Text style={{ textAlign: "center", fontSize: 34, fontWeight: 500 }}>
            Russian Twists
          </Text>
          <Text style={{ textAlign: "center", fontSize: 29 }}>20 times</Text>

          <TouchableOpacity
            style={{
              paddingHorizontal: 125,
              paddingVertical: 25,
              backgroundColor: "rgb(202, 196, 188)",
              flexDirection: "row",
              alignSelf: "center",
              borderRadius: 50,
              marginTop: 95,
              marginBottom: 35,
            }}
            onPress={StartPause}
          >
            <Image
              style={{
                width: 50,
                height: 50,
                alignSelf: "center",
                display: startButton,
              }}
              source={require("./assets/Start.png")}
            />
            <Image
              style={{
                width: 50,
                height: 50,
                alignSelf: "center",
                display: pauseButton,
              }}
              source={require("./assets/Pause.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "rgb(37, 37, 37)",
              alignSelf: "center",
              paddingHorizontal: 55,
              paddingVertical: 10,
            }}
            onPress={goToNextModal}
          >
            <Text style={{ textAlign: "center", color: "white", fontSize: 22 }}>
              Next
            </Text>
          </TouchableOpacity>
        </View></View>
      {/*////////////////////////////////////////////// */}

      {/*Модальне вікно 13*/}
      <View
        style={{
          flex: 1,
          zIndex: 1,
          position: "absolute",
          width: screenWidth,
          height: screenHeight,
          backgroundColor: "white",
          display: modalScreen13,
        }}
      >
        <View
          style={{
            backgroundColor: "rgb(161, 156, 156)",
            width: screenWidth,
            height: screenWidth,
          }}
        >
          <Image
            style={{
              width: 300,
              height: 300,
              alignSelf: "center",
              marginTop: 56,
            }}
            source={require("./assets/BoatPose.jpg")}
          />
        </View>
        <View style={{ marginTop: 45 }}>
          <Text style={{ textAlign: "center", fontSize: 34, fontWeight: 500 }}>
            Boat Pose
          </Text>
          <Text style={{ textAlign: "center", fontSize: 29 }}>25 seconds</Text>

          <TouchableOpacity
            style={{
              paddingHorizontal: 125,
              paddingVertical: 25,
              backgroundColor: "rgb(202, 196, 188)",
              flexDirection: "row",
              alignSelf: "center",
              borderRadius: 50,
              marginTop: 95,
              marginBottom: 35,
            }}
            onPress={StartPause}
          >
            <Image
              style={{
                width: 50,
                height: 50,
                alignSelf: "center",
                display: startButton,
              }}
              source={require("./assets/Start.png")}
            />
            <Image
              style={{
                width: 50,
                height: 50,
                alignSelf: "center",
                display: pauseButton,
              }}
              source={require("./assets/Pause.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "rgb(37, 37, 37)",
              alignSelf: "center",
              paddingHorizontal: 55,
              paddingVertical: 10,
            }}
            onPress={goToNextModal}
          >
            <Text style={{ textAlign: "center", color: "white", fontSize: 22 }}>
              Next
            </Text>
          </TouchableOpacity>
        </View></View>
      {/*////////////////////////////////////////////// */}

      {/*Модальне вікно 14*/}


      <View
        style={{
          flex: 1,
          zIndex: 1,
          position: "absolute",
          width: screenWidth,
          height: screenHeight,
          backgroundColor: "white",
          display: modalScreen14,
        }}
      >
        <View
          style={{
            backgroundColor: "rgb(161, 156, 156)",
            width: screenWidth,
            height: screenWidth,
          }}
        >
          <Image
            style={{
              width: 300,
              height: 300,
              alignSelf: "center",
              marginTop: 56,
            }}
            source={require("./assets/FlutterKicks.jpg")}
          />
        </View>
        <View style={{ marginTop: 45 }}>
          <Text style={{ textAlign: "center", fontSize: 34, fontWeight: 500 }}>
            Flutter Kicks
          </Text>
          <Text style={{ textAlign: "center", fontSize: 29 }}> 20 seconds</Text>

          <TouchableOpacity
            style={{
              paddingHorizontal: 125,
              paddingVertical: 25,
              backgroundColor: "rgb(202, 196, 188)",
              flexDirection: "row",
              alignSelf: "center",
              borderRadius: 50,
              marginTop: 95,
              marginBottom: 35,
            }}
            onPress={StartPause}
          >
            <Image
              style={{
                width: 50,
                height: 50,
                alignSelf: "center",
                display: startButton,
              }}
              source={require("./assets/Start.png")}
            />
            <Image
              style={{
                width: 50,
                height: 50,
                alignSelf: "center",
                display: pauseButton,
              }}
              source={require("./assets/Pause.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "rgb(37, 37, 37)",
              alignSelf: "center",
              paddingHorizontal: 55,
              paddingVertical: 10,
            }}
            onPress={goToNextModal}
          >
            <Text style={{ textAlign: "center", color: "white", fontSize: 22 }}>
              Next
            </Text>
          </TouchableOpacity>
        </View></View>
      {/*////////////////////////////////////////////// */}

      {/*Модальне вікно 15*/}

      <View
        style={{
          flex: 1,
          zIndex: 1,
          position: "absolute",
          width: screenWidth,
          height: screenHeight,
          backgroundColor: "white",
          display: modalScreen15,
        }}
      >
        <View
          style={{
            backgroundColor: "rgb(161, 156, 156)",
            width: screenWidth,
            height: screenWidth,
          }}
        >
          <Image
            style={{
              width: 300,
              height: 300,
              alignSelf: "center",
              marginTop: 56,
            }}
            source={require("./assets/MountainClimbers.jpg")}
          />
        </View>
        <View style={{ marginTop: 45 }}>
          <Text style={{ textAlign: "center", fontSize: 34, fontWeight: 500 }}>
         Mountain Climbers 
          </Text>
          <Text style={{ textAlign: "center", fontSize: 29 }}> 25 seconds</Text>

          <TouchableOpacity
            style={{
              paddingHorizontal: 125,
              paddingVertical: 25,
              backgroundColor: "rgb(202, 196, 188)",
              flexDirection: "row",
              alignSelf: "center",
              borderRadius: 50,
              marginTop: 95,
              marginBottom: 35,
            }}
            onPress={StartPause}
          >
            <Image
              style={{
                width: 50,
                height: 50,
                alignSelf: "center",
                display: startButton,
              }}
              source={require("./assets/Start.png")}
            />
            <Image
              style={{
                width: 50,
                height: 50,
                alignSelf: "center",
                display: pauseButton,
              }}
              source={require("./assets/Pause.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "rgb(37, 37, 37)",
              alignSelf: "center",
              paddingHorizontal: 55,
              paddingVertical: 10,
            }}
            onPress={goToNextModal}
          >
            <Text style={{ textAlign: "center", color: "white", fontSize: 22 }}>
              Next
            </Text>
          </TouchableOpacity>
        </View></View>
      {/*////////////////////////////////////////////// */}


      {/*Модальне вікно 16*/}

      <View
        style={{
          flex: 1,
          zIndex: 1,
          position: "absolute",
          width: screenWidth,
          height: screenHeight,
          backgroundColor: "white",
          display: modalScreen16,
        }}
      >
        <View
          style={{
            backgroundColor: "rgb(161, 156, 156)",
            width: screenWidth,
            height: screenWidth,
          }}
        >
          <Image
            style={{
              width: 300,
              height: 300,
              alignSelf: "center",
              marginTop: 56,
            }}
            source={require("./assets/Crunches.jpg")}
          />
        </View>
        <View style={{ marginTop: 45 }}>
          <Text style={{ textAlign: "center", fontSize: 34, fontWeight: 500 }}>
            Crunches
          </Text>
          <Text style={{ textAlign: "center", fontSize: 29 }}>  18 times</Text>

          <TouchableOpacity
            style={{
              paddingHorizontal: 125,
              paddingVertical: 25,
              backgroundColor: "rgb(202, 196, 188)",
              flexDirection: "row",
              alignSelf: "center",
              borderRadius: 50,
              marginTop: 95,
              marginBottom: 35,
            }}
            onPress={StartPause}
          >
            <Image
              style={{
                width: 50,
                height: 50,
                alignSelf: "center",
                display: startButton,
              }}
              source={require("./assets/Start.png")}
            />
            <Image
              style={{
                width: 50,
                height: 50,
                alignSelf: "center",
                display: pauseButton,
              }}
              source={require("./assets/Pause.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "rgb(37, 37, 37)",
              alignSelf: "center",
              paddingHorizontal: 55,
              paddingVertical: 10,
            }}
            onPress={goToNextModal}
          >
            <Text style={{ textAlign: "center", color: "white", fontSize: 22 }}>
              Next
            </Text>
          </TouchableOpacity>
        </View></View>
      {/*////////////////////////////////////////////// */}

      {/*Модальне вікно 17*/}
      <View
        style={{
          flex: 1,
          zIndex: 1,
          position: "absolute",
          width: screenWidth,
          height: screenHeight,
          backgroundColor: "white",
          display: modalScreen17,
        }}
      >
        <View
          style={{
            backgroundColor: "rgb(161, 156, 156)",
            width: screenWidth,
            height: screenWidth,
          }}
        >
          <Image
            style={{
              width: 300,
              height: 300,
              alignSelf: "center",
              marginTop: 56,
            }}
            source={require("./assets/CatCow.jpg")}
          />
        </View>
        <View style={{ marginTop: 45 }}>
          <Text style={{ textAlign: "center", fontSize: 34, fontWeight: 500 }}>
            Cat-Cow
          </Text>
          <Text style={{ textAlign: "center", fontSize: 29 }}>30 seconds</Text>

          <TouchableOpacity
            style={{
              paddingHorizontal: 125,
              paddingVertical: 25,
              backgroundColor: "rgb(202, 196, 188)",
              flexDirection: "row",
              alignSelf: "center",
              borderRadius: 50,
              marginTop: 95,
              marginBottom: 35,
            }}
            onPress={StartPause}
          >
            <Image
              style={{
                width: 50,
                height: 50,
                alignSelf: "center",
                display: startButton,
              }}
              source={require("./assets/Start.png")}
            />
            <Image
              style={{
                width: 50,
                height: 50,
                alignSelf: "center",
                display: pauseButton,
              }}
              source={require("./assets/Pause.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "rgb(37, 37, 37)",
              alignSelf: "center",
              paddingHorizontal: 55,
              paddingVertical: 10,
            }}
            onPress={goToNextModal}
          >
            <Text style={{ textAlign: "center", color: "white", fontSize: 22 }}>
              Next
            </Text>
          </TouchableOpacity>
        </View></View>
      {/*////////////////////////////////////////////// */}

      {/*Модальне вікно 18*/}
      <View
        style={{
          flex: 1,
          zIndex: 1,
          position: "absolute",
          width: screenWidth,
          height: screenHeight,
          backgroundColor: "white",
          display: modalScreen18,
        }}
      >
        <View
          style={{
            backgroundColor: "rgb(161, 156, 156)",
            width: screenWidth,
            height: screenWidth,
          }}
        >
          <Image
            style={{
              width: 300,
              height: 300,
              alignSelf: "center",
              marginTop: 56,
            }}
            source={require("./assets/CobraPose.jpg")}
          />
        </View>
        <View style={{ marginTop: 45 }}>
          <Text style={{ textAlign: "center", fontSize: 34, fontWeight: 500 }}>
            Cobra Pose
          </Text>
          <Text style={{ textAlign: "center", fontSize: 29 }}>30 seconds</Text>

          <TouchableOpacity
            style={{
              paddingHorizontal: 125,
              paddingVertical: 25,
              backgroundColor: "rgb(202, 196, 188)",
              flexDirection: "row",
              alignSelf: "center",
              borderRadius: 50,
              marginTop: 95,
              marginBottom: 35,
            }}
            onPress={StartPause}
          >
            <Image
              style={{
                width: 50,
                height: 50,
                alignSelf: "center",
                display: startButton,
              }}
              source={require("./assets/Start.png")}
            />
            <Image
              style={{
                width: 50,
                height: 50,
                alignSelf: "center",
                display: pauseButton,
              }}
              source={require("./assets/Pause.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "rgb(37, 37, 37)",
              alignSelf: "center",
              paddingHorizontal: 55,
              paddingVertical: 10,
            }}
            onPress={goToNextModal}
          >
            <Text style={{ textAlign: "center", color: "white", fontSize: 22 }}>
              Next
            </Text>
          </TouchableOpacity>
        </View></View>
      {/*////////////////////////////////////////////// */}

      {/*CONGRATULATIONS*/}
      <View
        style={{
          flex: 1,
          zIndex: 1,
          position: "absolute",
          width: screenWidth,
          height: screenHeight,
          backgroundColor: "rgb(183, 173, 154)",
          display: modalScreenFinish,
          paddingHorizontal: 35,
          paddingVertical: 200,
        }}
      >
        <View>
          <Text style={{ fontSize: 34, marginBottom: 45, textAlign: "center" }}>
            Congratulations
          </Text>
        </View>
        <View>
          <Text style={{ fontSize: 26, marginBottom: 35, textAlign: "center" }}>
            You finished your workout
          </Text>
        </View>
        <View>
          <Text style={{ fontSize: 25, marginBottom: 45, textAlign: "center" }}>
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
          <View style={{ alignSelf: "center" }}>
            <Text
              style={{ fontSize: 22, textAlign: "center", alignSelf: "center" }}
            >
              Time
            </Text>
            <Text
              style={{ fontSize: 22, textAlign: "center", alignSelf: "center" }}
            >
              {formatTime()}
            </Text>
          </View>
          <View style={{ alignSelf: "center" }}>
            <Text
              style={{ fontSize: 22, textAlign: "center", alignSelf: "center" }}
            >
              Calories
            </Text>
            <Text
              style={{ fontSize: 22, textAlign: "center", alignSelf: "center" }}
            >
              ± 180 kcal
            </Text>
          </View>
        </View>
      </View>
      {/*////////////////////////////////////////////// */}


      <View
        style={{
          flex: 1,
          backgroundColor: "rgb(217, 217, 217)",
          display: mainScreen,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ marginTop: 86 }}>
            <Text
              style={{
                fontWeight: 400,
                fontSize: 20,
                color: "rgb(0, 0, 0)",
                fontFamily: "Jersey25",
                width: "auto",
                height: 11,
                marginLeft: 6,
                marginBottom: 22,
              }}
            >
              Day 5
            </Text>
            <View style={{ flexDirection: "row", marginLeft: 1 }}>
              <Image
                style={{ width: 20, height: 20 }}
                source={require("./assets/batteryBlue.png")}
              />
              <Image
                style={{ width: 20, height: 20 }}
                source={require("./assets/batteryBlue.png")}
              />
              <Image
                style={{ width: 20, height: 20, marginRight: 5 }}
                source={require("./assets/batteryGrey.png")}
              />
              <Text
                style={{
                  color: "rgb(0, 0, 0)",
                  fontFamily: "Inter",
                  fontSize: 11,
                  fontWeight: 400,
                  marginTop: 4,
                }}
              >
                Intermediate
              </Text>
            </View>
          </View>
          <Image
            style={{ height: 196, width: 206 }}
            source={require("./assets/IntermediateMan.png")}
          />
        </View>

        {/*GENERAL WINDOW */}
        <View
          style={{
            height: 91,
            backgroundColor: "rgb(255, 255, 255)",
            borderRadius: 5,
            width: "auto",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: 17,
            paddingRight: 47,
            paddingLeft: 8,
            marginBottom: 11,
          }}
        >
          <View>
            <Text
              style={{
                color: "rgb(0, 0, 0)",
                fontFamily: "Homenaje",
                fontSize: 16,
                fontWeight: 400,
              }}
            >
              18
            </Text>
            <Text
              style={{
                color: "rgb(161, 156, 156)",
                fontFamily: "Homenaje",
                fontSize: 16,
                fontWeight: 400,
              }}
            >
              Exercises
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: "rgb(0, 0, 0)",
                fontFamily: "Homenaje",
                fontSize: 16,
                fontWeight: 400,
              }}
            >
              ± 12 min
            </Text>
            <Text
              style={{
                color: "rgb(161, 156, 156)",
                fontFamily: "Homenaje",
                fontSize: 16,
                fontWeight: 400,
              }}
            >
              Time
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: "rgb(0, 0, 0)",
                fontFamily: "Homenaje",
                fontSize: 16,
                fontWeight: 400,
              }}
            >
              ± 180 kcal
            </Text>
            <Text
              style={{
                color: "rgb(161, 156, 156)",
                fontFamily: "Homenaje",
                fontSize: 16,
                fontWeight: 400,
              }}
            >
              Calories
            </Text>
          </View>
        </View>
        {/*GENERAL WINDOW */}






        <View
          style={{
            backgroundColor: "rgb(255, 255, 255)",
            width: "auto",
            height: "auto",
            borderRadius: 5,
            gap: 10,
            paddingTop: 35,
          }}
        >

          {/*Exercise 1 */}
          <View style={styles.exerciseBlock}>
            <Image
              style={{ width: 120, height: "auto" }}
              source={require("./assets/HighKnees.jpg")}
            />
            <View style={{ width: 200, marginTop: 35 }}>
              <Text style={styles.exerciseTitle}>High Knees</Text>
              <Text style={styles.exerciseDuration}>30 seconds</Text>
            </View>
          </View>

          {/*Exercise 2 */}
          <View style={styles.exerciseBlock}>
            <Image
              style={{ width: 120, height: "auto" }}
              source={require("./assets/JumpingJacks.jpg")}
            />
            <View style={{ width: 200, marginTop: 35 }}>
              <Text style={styles.exerciseTitle}>Jumping Jacks</Text>
              <Text style={styles.exerciseDuration}>30 seconds</Text>
            </View>
          </View>

          {/*Exercise 3 */}
          <View style={styles.exerciseBlock}>
            <Image
              style={{ width: 120, height: "auto" }}
              source={require("./assets/BicycleCrunches.jpg")}
            />
            <View style={{ width: 200, marginTop: 35 }}>
              <Text style={styles.exerciseTitle}>Bicycle Crunches</Text>
              <Text style={styles.exerciseDuration}> 18 times</Text>
            </View>
          </View>

          {/*Exercise 4 */}
          <View style={styles.exerciseBlock}>
            <Image
              style={{ width: 120, height: "auto" }}
              source={require("./assets/StraightArmPlank.jpg")}
            />
            <View style={{ width: 200, marginTop: 35 }}>
              <Text style={styles.exerciseTitle}>Straight Arm Plank</Text>
              <Text style={styles.exerciseDuration}>30 seconds</Text>
            </View>
          </View>

          {/*Exercise 5 */}

          <View style={styles.exerciseBlock}>
            <Image
              style={{ width: 120, height: "auto" }}
              source={require("./assets/RussianTwists.jpg")}
            />
            <View style={{ width: 200, marginTop: 35 }}>
              <Text style={styles.exerciseTitle}> Russian Twists</Text>
              <Text style={styles.exerciseDuration}>20 times</Text>
            </View>
          </View>



          {/*Exercise 6 */}
          <View style={styles.exerciseBlock}>
            <Image
              style={{ width: 120, height: "auto" }}
              source={require("./assets/BoatPose.jpg")}
            />
            <View style={{ width: 200, marginTop: 35 }}>
              <Text style={styles.exerciseTitle}> Boat Pose</Text>
              <Text style={styles.exerciseDuration}>25 seconds</Text>
            </View>
          </View>

          {/*Exercise 7 */}
          <View style={styles.exerciseBlock}>
            <Image
              style={{ width: 120, height: "auto" }}
              source={require("./assets/FlutterKicks.jpg")}
            />
            <View style={{ width: 200, marginTop: 35 }}>
              <Text style={styles.exerciseTitle}>Flutter Kicks</Text>
              <Text style={styles.exerciseDuration}>20 seconds</Text>
            </View>
          </View>

          {/*Exercise 8 */}
          <View style={styles.exerciseBlock}>
            <Image
              style={{ width: 120, height: "auto" }}
              source={require("./assets/MountainClimbers.jpg")}
            />
            <View style={{ width: 200, marginTop: 35 }}>
              <Text style={styles.exerciseTitle}>Mountain Climbers </Text>
              <Text style={styles.exerciseDuration}>25 seconds</Text>
            </View>
          </View>

          {/*Exercise 9 */}
          <View style={styles.exerciseBlock}>
            <Image
              style={{ width: 120, height: "auto" }}
              source={require("./assets/Crunches.jpg")}
            />
            <View style={{ width: 200, marginTop: 35 }}>
              <Text style={styles.exerciseTitle}>Crunches  </Text>
              <Text style={styles.exerciseDuration}> 18 times</Text>
            </View>
          </View>

          {/*Exercise 10 */}

          <View style={styles.exerciseBlock}>
            <Image
              style={{ width: 120, height: "auto" }}
              source={require("./assets/BicycleCrunches.jpg")}
            />
            <View style={{ width: 200, marginTop: 35 }}>
              <Text style={styles.exerciseTitle}>Bicycle Crunches</Text>
              <Text style={styles.exerciseDuration}>18 times</Text>
            </View>
          </View>

          {/*Exercise 11 */}
          <View style={styles.exerciseBlock}>
            <Image
              style={{ width: 120, height: "auto" }}
              source={require("./assets/StraightArmPlank.jpg")}
            />
            <View style={{ width: 200, marginTop: 35 }}>
              <Text style={styles.exerciseTitle}>Straight Arm Plank</Text>
              <Text style={styles.exerciseDuration}>30 seconds</Text>
            </View>
          </View>



          {/*Exercise 12 */}

          <View style={styles.exerciseBlock}>
            <Image
              style={{ width: 120, height: "auto" }}
              source={require("./assets/RussianTwists.jpg")}
            />
            <View style={{ width: 200, marginTop: 35 }}>
              <Text style={styles.exerciseTitle}> Russian Twists</Text>
              <Text style={styles.exerciseDuration}>20 times</Text>
            </View>
          </View>


          {/*Exercise 13 */}

          <View style={styles.exerciseBlock}>
            <Image
              style={{ width: 120, height: "auto" }}
              source={require("./assets/BoatPose.jpg")}
            />
            <View style={{ width: 200, marginTop: 35 }}>
              <Text style={styles.exerciseTitle}> Boat Pose</Text>
              <Text style={styles.exerciseDuration}>25 seconds</Text>
            </View>
          </View>

          {/*Exercise 14 */}
          <View style={styles.exerciseBlock}>
            <Image
              style={{ width: 120, height: "auto" }}
              source={require("./assets/FlutterKicks.jpg")}
            />
            <View style={{ width: 200, marginTop: 35 }}>
              <Text style={styles.exerciseTitle}>Flutter Kicks</Text>
              <Text style={styles.exerciseDuration}>20 seconds</Text>
            </View>
          </View>



          {/*Exercise 15 */}
          <View style={styles.exerciseBlock}>
            <Image
              style={{ width: 120, height: "auto" }}
              source={require("./assets/MountainClimbers.jpg")}
            />
            <View style={{ width: 200, marginTop: 35 }}>
              <Text style={styles.exerciseTitle}>Mountain Climbers </Text>
              <Text style={styles.exerciseDuration}>25 seconds</Text>
            </View>
          </View>


          {/*Exercise 16 */}
          <View style={styles.exerciseBlock}>
            <Image
              style={{ width: 120, height: "auto" }}
              source={require("./assets/Crunches.jpg")}
            />
            <View style={{ width: 200, marginTop: 35 }}>
              <Text style={styles.exerciseTitle}>Crunches  </Text>
              <Text style={styles.exerciseDuration}> 18 times</Text>
            </View>
          </View>

          {/*Exercise 17 */}
          <View style={styles.exerciseBlock}>
            <Image
              style={{ width: 120, height: "auto" }}
              source={require("./assets/CatCow.jpg")}
            />
            <View style={{ width: 200, marginTop: 35 }}>
              <Text style={styles.exerciseTitle}>  Cat-Cow </Text>
              <Text style={styles.exerciseDuration}>30 seconds</Text>
            </View>
          </View>

          {/*Exercise 18 */}
          <View style={styles.exerciseBlock}>
            <Image
              style={{ width: 120, height: "auto" }}
              source={require("./assets/CobraPose.jpg")}
            />
            <View style={{ width: 200, marginTop: 35 }}>
              <Text style={styles.exerciseTitle}> Cobra Pose </Text>
              <Text style={styles.exerciseDuration}>30 seconds</Text>
            </View>
          </View>



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
            onPress={StartDayButton}
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
            >
              START
            </Text>
          </TouchableOpacity>
        </View>


      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  exerciseBlock: {
    width: "auto",
    height: 150,
    backgroundColor: "rgb(228, 228, 228)",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  exerciseTitle: {
    fontSize: 18,
    fontWeight: 500,
  },
  exerciseDuration: {
    fontSize: 16,
    fontWeight: 400,
  },
});
