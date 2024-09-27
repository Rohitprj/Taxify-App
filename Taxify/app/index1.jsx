import { View, Text, Dimensions } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function index() {
  return (
    // <SafeAreaView></SafeAreaView>
    <View
      style={{
        backgroundColor: "#f2f2f2",
        height: Dimensions.get("screen").height,
      }}
    >
      <View
        style={{
          backgroundColor: "#1b1c1c",
          height: 300,
          width: Dimensions.get("screen").width,
          borderBottomRightRadius: 200,
          borderBottomLeftRadius: 210,
        }}
      ></View>
      <View
        style={{
          width: Dimensions.get("screen").width - 80,
          height: 200,
          backgroundColor: "white",
          alignSelf: "center",
          borderRadius: 10,
          padding: 20,
          gap: 15,
          top: 220,
        }}
      >
        <Text style={{ fontWeight: "600", fontSize: 18, textAlign: "center" }}>
          Taxify App
        </Text>
        <Text style={{ textAlign: "center" }}>
          Welcome to taxify app, the smartest way to book a cab! long waits and
          unpredictable fares.
        </Text>
        <View
          style={{
            borderWidth: 2,
            backgroundColor: "#1b1c1c",
            borderRadius: 50,
            width: 48,
            padding: 8,
            alignSelf: "center",
          }}
        >
          <Link href="/MobNo">
            <MaterialIcons name="arrow-forward-ios" size={26} color="white" />
          </Link>
        </View>
      </View>
    </View>
  );
}
