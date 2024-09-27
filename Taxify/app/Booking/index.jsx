import { View, Text, Dimensions } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import MapView from "react-native-maps";

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
      <MapView
        style={{
          width: Dimensions.get("screen").width,
          height: 520,
        }}
      ></MapView>
      <View
        style={{
          borderTopRightRadius: 30,
          borderTopLeftRadius: 40,
          backgroundColor: "black",
          top: -120,
          height: Dimensions.get("screen").height - 500,
          paddingTop: 30,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 30,
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: 14,
              color: "white",
            }}
          >
            Select Service Location
          </Text>
          <Link href="/Booking/newLoc">
            <Text
              style={{
                color: "#ffcc00",
                textDecorationLine: "underline",
              }}
            >
              Change
            </Text>
          </Link>
        </View>
        <View
          style={{
            borderTopRightRadius: 30,
            borderTopLeftRadius: 40,
            backgroundColor: "white",
            top: 20,
            height: Dimensions.get("screen").height - 160,
            width: Dimensions.get("screen").width,
            alignItems: "center",
            paddingTop: 30,
            gap: 20,
          }}
        >
          <View
            style={{
              width: Dimensions.get("screen").width - 55,
              height: 140,
              backgroundColor: "#f2f2f2",
              borderRadius: 10,
              padding: 20,
            }}
          >
            <View style={{ flexDirection: "row", gap: 10 }}>
              <View
                style={{
                  backgroundColor: "white",
                  borderRadius: 50,
                  width: 30,
                  height: 30,
                  padding: 5,
                }}
              >
                <Ionicons name="location-sharp" size={20} color="black" />
              </View>
              <View style={{ gap: 5 }}>
                <Text style={{ fontWeight: "900" }}>Saket Road</Text>
                <Text>
                  195, Lower Ground, Lane-1,{"\n"}Western Marg, Saidulajab,
                  {"\n"}
                  Near Saket Metro Gate No-2,{"\n"}Delhi, India 110030
                </Text>
              </View>
            </View>
          </View>

          <Link href="/(tabs)">
            <View
              style={{
                width: Dimensions.get("screen").width - 55,
                height: 50,
                backgroundColor: "#1b1c1c",
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 6,
              }}
            >
              <Text
                style={{
                  fontWeight: "500",
                  fontSize: 16,
                  color: "white",
                  textAlign: "center",
                }}
              >
                Confirm Loaction
              </Text>
            </View>
          </Link>
        </View>
      </View>
    </View>
  );
}
