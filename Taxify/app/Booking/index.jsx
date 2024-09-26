import { View, Text, Dimensions } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function index() {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          width: Dimensions.get("screen").width - 30,
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 50,
            width: 42,
            padding: 8,
            alignSelf: "center",
          }}
        >
          <Link href="/MobNo/otpVerify">
            <Ionicons name="chevron-back" size={24} color="black" />
          </Link>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: Dimensions.get("screen").width - 110,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "900",
              alignContent: "center",
            }}
          >
            Taxify
          </Text>
        </View>
      </View>
    </View>
  );
}
