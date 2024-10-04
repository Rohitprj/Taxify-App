import { View, Text, Dimensions } from "react-native";
import React from "react";
import { Fontisto, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Link } from "expo-router";

export default function Notification() {
  return (
    <View>
      <View
        style={{
          width: Dimensions.get("screen").width - 30,
          flexDirection: "row",
          marginTop: 40,
          alignSelf: "center",
        }}
      >
        <View
          style={{
            padding: 10,
            borderRadius: 30,
            backgroundColor: "lightgrey",
          }}
        >
          <Link href="/(tabs)">
            <Ionicons name="chevron-back" size={24} color="black" />
          </Link>
        </View>
        <View
          style={{
            alignItems: "center",
            width: Dimensions.get("screen").width - 110,
            right: 7,
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "900",
            }}
          >
            Notifications
          </Text>
        </View>
      </View>
      <View style={{ padding: 20, gap: 15 }}>
        <View
          style={{
            backgroundColor: "lightgrey",
            padding: 15,
            borderRadius: 10,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              width: Dimensions.get("screen").width - 120,
            }}
          >
            <View>
              <Text style={{ fontWeight: "700", lineHeight: 18 }}>
                Account Alert!
              </Text>
              <Text style={{ color: "grey", lineHeight: 18 }}>
                This allow you to retrieve your account if you lose access.
              </Text>
            </View>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: 60,
            }}
          >
            <MaterialCommunityIcons
              name="clock-outline"
              size={24}
              color="black"
            />
          </View>
        </View>
        <View
          style={{
            backgroundColor: "white",
            padding: 15,
            borderRadius: 10,
            flexDirection: "row",
            elevation: 5,
          }}
        >
          <View
            style={{
              width: Dimensions.get("screen").width - 120,
            }}
          >
            <View>
              <Text style={{ fontWeight: "700", lineHeight: 18 }}>
                Receive 20% discount for first ride
              </Text>
              <Text style={{ color: "grey", lineHeight: 18 }}>
                You have booked plumber service today at 6:30pm
              </Text>
            </View>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: 60,
            }}
          >
            <MaterialCommunityIcons
              name="brightness-percent"
              size={24}
              color="black"
            />
          </View>
        </View>
        <View
          style={{
            backgroundColor: "white",
            padding: 15,
            borderRadius: 10,
            flexDirection: "row",
            elevation: 5,
          }}
        >
          <View
            style={{
              width: Dimensions.get("screen").width - 120,
            }}
          >
            <View>
              <Text style={{ fontWeight: "700", lineHeight: 18 }}>
                New year shopping with rider!
              </Text>
              <Text style={{ color: "grey", lineHeight: 18 }}>
                You have booked plumber service today at 6:30pm.
              </Text>
            </View>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: 60,
            }}
          >
            <Fontisto name="train" size={24} color="black" />
          </View>
        </View>
        <View
          style={{
            backgroundColor: "white",
            padding: 15,
            borderRadius: 10,
            flexDirection: "row",
            elevation: 5,
          }}
        >
          <View
            style={{
              width: Dimensions.get("screen").width - 120,
            }}
          >
            <View>
              <Text style={{ fontWeight: "700", lineHeight: 18 }}>
                You have received 1 coupon
              </Text>
              <Text style={{ color: "grey", lineHeight: 18 }}>
                You have booked plumber service today at 6:30pm
              </Text>
            </View>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: 60,
            }}
          >
            <MaterialCommunityIcons
              name="card-text-outline"
              size={24}
              color="black"
            />
          </View>
        </View>
      </View>
    </View>
  );
}
