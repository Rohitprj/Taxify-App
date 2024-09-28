import { View, Text, Dimensions, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native";
import Google from "../../assets/images/GoogleIcon.png";
import { Link } from "expo-router";

export default function MobileNo() {
  return (
    <SafeAreaView>
      <View
        style={{
          width: Dimensions.get("screen").width,
          height: Dimensions.get("screen").height - 350,
          backgroundColor: "#f2f2f2",
          borderBottomRightRadius: 30,
          borderBottomLeftRadius: 30,
          padding: 15,
        }}
      >
        <View>
          <Text
            style={{ alignSelf: "center", fontSize: 20, fontWeight: "900" }}
          >
            Taxify
          </Text>
        </View>
        <View style={{ paddingVertical: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "500" }}>Lets you in</Text>
          <Text>Hey, You have been missed !</Text>
        </View>
        <Text style={{ fontWeight: "500", paddingVertical: 10 }}>
          Mobile Number
        </Text>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <TextInput
            placeholder="+1-121"
            style={{
              height: 40,
              width: 60,
              backgroundColor: "white",
              borderRadius: 10,
            }}
          ></TextInput>
          <TextInput
            placeholder="Enter your number"
            style={{
              height: 40,
              width: 260,
              backgroundColor: "white",
              borderRadius: 10,
            }}
          ></TextInput>
        </View>
        <Link
          href="/MobNo/otpVerify"
          style={{
            marginTop: 30,
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
              Get OTP
            </Text>
          </View>
        </Link>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Text style={{ color: "#b3b3b3" }}>New User ?</Text>
          <Text style={{ fontWeight: "500" }}> Sign up</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            gap: 10,
            paddingVertical: 25,
          }}
        >
          <View
            style={{
              height: 3,
              width: 60,
              backgroundColor: "grey",
              alignSelf: "center",
            }}
          />
          <Text style={{ fontWeight: "500" }}>OR</Text>

          <View
            style={{
              height: 3,
              width: 60,
              backgroundColor: "grey",
              alignSelf: "center",
            }}
          />
        </View>
        <View
          style={{
            width: Dimensions.get("screen").width - 30,
            height: 50,
            backgroundColor: "white",
            borderRadius: 10,
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
          }}
        >
          <Image source={Google} style={{ height: 30, width: 30 }} />
          <Text
            style={{
              fontWeight: "700",
              fontSize: 16,
              color: "grey",
            }}
          >
            Continue with Google
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
