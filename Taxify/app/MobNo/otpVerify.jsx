import { View, Text, Dimensions, TextInput } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function otpVerify() {
  return (
    <View
      style={{
        width: Dimensions.get("screen").width,
        height: Dimensions.get("screen").height - 450,
        backgroundColor: "#f2f2f2",
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        padding: 15,
      }}
    >
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
          <Link href="/MobNo">
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
      <View style={{ paddingVertical: 10, marginTop: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: "500" }}>
          OTP verification
        </Text>
        <Text>Enter OTP send to +91-9988776655</Text>
      </View>
      <View style={{ paddingVertical: 10 }}>
        <Text style={{ fontSize: 16, fontWeight: "500" }}>OTP</Text>
        <View style={{ flexDirection: "row", gap: 20, paddingVertical: 10 }}>
          <TextInput
            style={{
              height: 50,
              width: 50,
              backgroundColor: "white",
              borderRadius: 10,
            }}
          />
          <TextInput
            style={{
              height: 50,
              width: 50,
              backgroundColor: "white",
              borderRadius: 10,
            }}
          />
          <TextInput
            style={{
              height: 50,
              width: 50,
              backgroundColor: "white",
              borderRadius: 10,
            }}
          />
          <TextInput
            style={{
              height: 50,
              width: 50,
              backgroundColor: "white",
              borderRadius: 10,
            }}
          />
          <TextInput
            style={{
              height: 50,
              width: 50,
              backgroundColor: "white",
              borderRadius: 10,
            }}
          />
        </View>
      </View>
      <Link
        href="/Booking"
        style={{
          marginVertical: 10,
        }}
      >
        <View
          style={{
            width: Dimensions.get("screen").width - 30,
            height: 50,
            backgroundColor: "#1b1c1c",
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "700",
              fontSize: 16,
              color: "white",
              textAlign: "center",
            }}
          >
            Verify
          </Text>
        </View>
      </Link>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Text style={{ color: "#b3b3b3" }}>Not Received Yet ?</Text>
        <Text style={{ fontWeight: "500" }}> Resend it</Text>
      </View>
    </View>
  );
}
