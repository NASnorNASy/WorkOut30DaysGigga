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

export default function BeginnerDay2Screen() {
  const [font] = useFonts({
    Jersey25: require("./assets/fonts/Jersey25-Regular.ttf"),
    Homenaje: require("./assets/fonts/Homenaje-Regular.ttf"),
    Konkhmer: require("./assets/fonts/KonkhmerSleokchher-Regular.ttf"),
  });

  const [mainScreen, setMainScreen] = useState("block");
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
  const [modalScreenFinish, setModalScreenFinish] = useState("none");

  const [pauseButton, setPauseButton] = useState("none");
  const [startButton, setStartButton] = useState("block");

  const StartDayButton = () => {
    setMainScreen("none");
    setModalScreen1("block");
    setRunning(!running);
  };

  const StartPause1 = () => {
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

  const StartPause2 = () => {
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

  const StartPause3 = () => {
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

  const StartPause4 = () => {
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

  const StartPause5 = () => {
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

  const StartPause6 = () => {
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

  const StartPause7 = () => {
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

  const StartPause8 = () => {
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

  const StartPause9 = () => {
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

  const StartPause10 = () => {
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

  const StartPause11 = () => {
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

  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  const NextScreen1 = () => {
    setModalScreen1("none");
    setModalScreen2("block");
  };
  const NextScreen2 = () => {
    setModalScreen2("none");
    setModalScreen3("block");
  };
  const NextScreen3 = () => {
    setModalScreen3("none");
    setModalScreen4("block");
  };
  const NextScreen4 = () => {
    setModalScreen4("none");
    setModalScreen5("block");
  };
  const NextScreen5 = () => {
    setModalScreen5("none");
    setModalScreen6("block");
  };
  const NextScreen6 = () => {
    setModalScreen6("none");
    setModalScreen7("block");
  };
  const NextScreen7 = () => {
    setModalScreen7("none");
    setModalScreen8("block");
  };
  const NextScreen8 = () => {
    setModalScreen8("none");
    setModalScreen9("block");
  };
  const NextScreen9 = () => {
    setModalScreen9("none");
    setModalScreen10("block");
  };
  const NextScreen10 = () => {
    setModalScreen10("none");
    setModalScreen11("block");
  };
  const NextScreen11 = () => {
    setModalScreen11("none");
    setModalScreenFinish("block");
    setRunning(!running);
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

  return (
    <ScrollView>
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
            source={require("./assets/JumpingJacks.jpg")}
          />
        </View>
        <View style={{ marginTop: 45 }}>
          <Text style={{ textAlign: "center", fontSize: 34, fontWeight: 500 }}>
            Jumping Jacks
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
            onPress={StartPause1}
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
            onPress={NextScreen1}
          >
            <Text style={{ textAlign: "center", color: "white", fontSize: 22 }}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////       */}
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
            onPress={StartPause2}
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
            onPress={NextScreen2}
          >
            <Text style={{ textAlign: "center", color: "white", fontSize: 22 }}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////       */}
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
            source={require("./assets/StraightArmPlank.jpg")}
          />
        </View>
        <View style={{ marginTop: 45 }}>
          <Text style={{ textAlign: "center", fontSize: 34, fontWeight: 500 }}>
            Straight Arm Plank
          </Text>
          <Text style={{ textAlign: "center", fontSize: 29 }}>20 seconds</Text>

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
            onPress={StartPause3}
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
            onPress={NextScreen3}
          >
            <Text style={{ textAlign: "center", color: "white", fontSize: 22 }}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////       */}
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
            source={require("./assets/ReverseCrunches.jpg")}
          />
        </View>
        <View style={{ marginTop: 45 }}>
          <Text style={{ textAlign: "center", fontSize: 34, fontWeight: 500 }}>
            Reverse Crunches
          </Text>
          <Text style={{ textAlign: "center", fontSize: 29 }}>10 times</Text>

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
            onPress={StartPause4}
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
            onPress={NextScreen4}
          >
            <Text style={{ textAlign: "center", color: "white", fontSize: 22 }}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////       */}
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
            source={require("./assets/Crunches.jpg")}
          />
        </View>
        <View style={{ marginTop: 45 }}>
          <Text style={{ textAlign: "center", fontSize: 34, fontWeight: 500 }}>
            Crunches
          </Text>
          <Text style={{ textAlign: "center", fontSize: 29 }}>10 times</Text>

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
            onPress={StartPause5}
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
            onPress={NextScreen5}
          >
            <Text style={{ textAlign: "center", color: "white", fontSize: 22 }}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////       */}
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
            source={require("./assets/Plank.jpg")}
          />
        </View>
        <View style={{ marginTop: 45 }}>
          <Text style={{ textAlign: "center", fontSize: 34, fontWeight: 500 }}>
            Plank
          </Text>
          <Text style={{ textAlign: "center", fontSize: 29 }}>20 seconds</Text>

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
            onPress={StartPause6}
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
            onPress={NextScreen6}
          >
            <Text style={{ textAlign: "center", color: "white", fontSize: 22 }}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////       */}
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
            source={require("./assets/StraightArmPlank.jpg")}
          />
        </View>
        <View style={{ marginTop: 45 }}>
          <Text style={{ textAlign: "center", fontSize: 34, fontWeight: 500 }}>
            Straight Arm Plank
          </Text>
          <Text style={{ textAlign: "center", fontSize: 29 }}>20 seconds</Text>

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
            onPress={StartPause7}
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
            onPress={NextScreen7}
          >
            <Text style={{ textAlign: "center", color: "white", fontSize: 22 }}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////       */}
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
            source={require("./assets/ReverseCrunches.jpg")}
          />
        </View>
        <View style={{ marginTop: 45 }}>
          <Text style={{ textAlign: "center", fontSize: 34, fontWeight: 500 }}>
            Reverse Crunches
          </Text>
          <Text style={{ textAlign: "center", fontSize: 29 }}>10 times</Text>

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
            onPress={StartPause8}
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
            onPress={NextScreen8}
          >
            <Text style={{ textAlign: "center", color: "white", fontSize: 22 }}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////       */}
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
          <Text style={{ textAlign: "center", fontSize: 29 }}>10 times</Text>

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
            onPress={StartPause9}
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
            onPress={NextScreen9}
          >
            <Text style={{ textAlign: "center", color: "white", fontSize: 22 }}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////       */}
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
            source={require("./assets/CatCow.jpg")}
          />
        </View>
        <View style={{ marginTop: 45 }}>
          <Text style={{ textAlign: "center", fontSize: 34, fontWeight: 500 }}>
            Cat Cow
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
            onPress={StartPause10}
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
            onPress={NextScreen10}
          >
            <Text style={{ textAlign: "center", color: "white", fontSize: 22 }}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////       */}
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
            onPress={StartPause11}
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
            onPress={NextScreen11}
          >
            <Text style={{ textAlign: "center", color: "white", fontSize: 22 }}>
              Finish
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////       */}
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
              ± 105 kcal
            </Text>
          </View>
        </View>
      </View>
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////       */}
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
              Day 2
            </Text>
            <View style={{ flexDirection: "row", marginLeft: 1 }}>
              <Image
                style={{ width: 20, height: 20 }}
                source={require("./assets/batteryBlue.png")}
              />
              <Image
                style={{ width: 20, height: 20 }}
                source={require("./assets/batteryGrey.png")}
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
                Beginner
              </Text>
            </View>
          </View>
          <Image
            style={{ height: 196, width: 206 }}
            source={require("./assets/BeginnerMan.png")}
          />
        </View>
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
              11
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
              ± 7 min
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
              ± 105 kcal
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
          <View style={styles.packsExercises}>
            <Image
              style={{ width: 120, height: "auto" }}
              source={require("./assets/JumpingJacks.jpg")}
            />
            <View style={{ width: 200, marginTop: 35 }}>
              <Text style={styles.exerciseName}>Jumping Jacks</Text>
              <Text style={styles.exerciseAmount}>25 seconds</Text>
            </View>
          </View>
          <View style={styles.packsExercises}>
            <Image
              style={{ width: 120, height: "auto" }}
              source={require("./assets/HighKnees.jpg")}
            />
            <View style={{ width: 200, marginTop: 35 }}>
              <Text style={styles.exerciseName}>High Knees</Text>
              <Text style={styles.exerciseAmount}>25 seconds</Text>
            </View>
          </View>
          <View style={styles.packsExercises}>
            <Image
              style={{ width: 120, height: "auto" }}
              source={require("./assets/StraightArmPlank.jpg")}
            />
            <View style={{ width: 200, marginTop: 35 }}>
              <Text style={styles.exerciseName}>Straight Arm Plank</Text>
              <Text style={styles.exerciseAmount}>20 seconds</Text>
            </View>
          </View>
          <View style={styles.packsExercises}>
            <Image
              style={{ width: 120, height: "auto" }}
              source={require("./assets/ReverseCrunches.jpg")}
            />
            <View style={{ width: 200, marginTop: 35 }}>
              <Text style={styles.exerciseName}>Reverse Crunches</Text>
              <Text style={styles.exerciseAmount}>10 times</Text>
            </View>
          </View>
          <View style={styles.packsExercises}>
            <Image
              style={{ width: 120, height: "auto" }}
              source={require("./assets/Crunches.jpg")}
            />
            <View style={{ width: 200, marginTop: 35 }}>
              <Text style={styles.exerciseName}>Crunches</Text>
              <Text style={styles.exerciseAmount}>10 times</Text>
            </View>
          </View>
          <View style={styles.packsExercises}>
            <Image
              style={{ width: 120, height: "auto" }}
              source={require("./assets/Plank.jpg")}
            />
            <View style={{ width: 200, marginTop: 35 }}>
              <Text style={styles.exerciseName}>Plank</Text>
              <Text style={styles.exerciseAmount}>20 seconds</Text>
            </View>
          </View>
          <View style={styles.packsExercises}>
            <Image
              style={{ width: 120, height: "auto" }}
              source={require("./assets/StraightArmPlank.jpg")}
            />
            <View style={{ width: 200, marginTop: 35 }}>
              <Text style={styles.exerciseName}>Straight Arm Plank</Text>
              <Text style={styles.exerciseAmount}>20 seconds</Text>
            </View>
          </View>
          <View style={styles.packsExercises}>
            <Image
              style={{ width: 120, height: "auto" }}
              source={require("./assets/ReverseCrunches.jpg")}
            />
            <View style={{ width: 200, marginTop: 35 }}>
              <Text style={styles.exerciseName}>Reverse Crunches</Text>
              <Text style={styles.exerciseAmount}>10 times</Text>
            </View>
          </View>
          <View style={styles.packsExercises}>
            <Image
              style={{ width: 120, height: "auto" }}
              source={require("./assets/Crunches.jpg")}
            />
            <View style={{ width: 200, marginTop: 35 }}>
              <Text style={styles.exerciseName}>Crunches</Text>
              <Text style={styles.exerciseAmount}>10 times</Text>
            </View>
          </View>
          <View style={styles.packsExercises}>
            <Image
              style={{ width: 120, height: "auto" }}
              source={require("./assets/CatCow.jpg")}
            />
            <View style={{ width: 200, marginTop: 35 }}>
              <Text style={styles.exerciseName}>Cat Cow</Text>
              <Text style={styles.exerciseAmount}>30 seconds</Text>
            </View>
          </View>
          <View style={styles.packsExercises}>
            <Image
              style={{ width: 120, height: "auto" }}
              source={require("./assets/CobraPose.jpg")}
            />
            <View style={{ width: 200, marginTop: 35 }}>
              <Text style={styles.exerciseName}>Cobra Pose</Text>
              <Text style={styles.exerciseAmount}>30 seconds</Text>
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
  packsExercises: {
    width: "auto",
    height: 150,
    backgroundColor: "rgb(228, 228, 228)",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: 500,
  },
  exerciseAmount: {
    fontSize: 16,
    fontWeight: 400,
  },
});
