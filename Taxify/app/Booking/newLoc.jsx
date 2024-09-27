import { View, Text, Dimensions, Pressable, ScrollView } from "react-native";
import React, { useMemo, useState } from "react";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native";
import { RadioGroup } from "react-native-radio-buttons-group";

export default function newLoc() {
  const radioBtn = useMemo(
    () => [
      {
        id: "1",
        label: "Home",
        value: "option1",
      },
      {
        id: "2",
        label: "Work",
        value: "option2",
      },
      {
        id: "3",
        label: "Other",
        value: "option3",
      },
    ],
    []
  );
  const [selected, isSelected] = useState();
  return (
    <ScrollView>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <View
          style={{
            paddingHorizontal: 10,
          }}
        >
          <Link href="/Booking">
            <Ionicons name="chevron-back" size={24} color="black" />
          </Link>
        </View>
        <View
          style={{
            alignItems: "center",
            width: Dimensions.get("screen").width - 110,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "900",
            }}
          >
            Add New Location
          </Text>
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: 30,
          paddingVertical: 40,
        }}
      >
        <Text
          style={{
            fontWeight: "600",
            paddingVertical: 10,
            fontSize:16
          }}
        >
          Select Category
        </Text>
        <RadioGroup
          radioButtons={radioBtn}
          onPress={isSelected}
          selectedId={selected}
          layout="row"
        />
      </View>
      <View
        style={{
          backgroundColor: "#f2f2f2",
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
        }}
      >
        <View style={{ paddingHorizontal: 30, paddingVertical: 40, gap: 20 }}>
          <View>
            <Text style={{ fontSize: 16, fontWeight: "600", color: "grey" }}>
              Street
            </Text>
            <View
              style={{
                width: Dimensions.get("screen").width - 60,
                borderRadius: 10,
                padding: 10,
                marginTop: 10,
                backgroundColor: "white",
                flexDirection: "row",
                gap: 5,
                alignItems: "center",
              }}
            >
              <TextInput
                style={{
                  fontSize: 16,
                  borderWidth: 1,
                  borderColor: "white",
                  height: 30,
                  width: 270,
                  fontWeight: "600",
                }}
                placeholderTextColor="grey"
                placeholder="Enter street"
              />
            </View>
          </View>
          <View>
            <Text style={{ fontSize: 16, fontWeight: "600", color: "grey" }}>
              City
            </Text>
            <View
              style={{
                width: Dimensions.get("screen").width - 60,
                borderRadius: 10,
                padding: 10,
                marginTop: 10,
                backgroundColor: "white",
                flexDirection: "row",
                gap: 5,
                alignItems: "center",
              }}
            >
              <TextInput
                style={{
                  fontSize: 16,
                  borderWidth: 1,
                  borderColor: "white",
                  height: 30,
                  width: 270,
                  fontWeight: "600",
                }}
                placeholderTextColor="grey"
                placeholder="Enter city"
              />
            </View>
          </View>
          <View>
            <Text style={{ fontSize: 16, fontWeight: "600", color: "grey" }}>
              State
            </Text>
            <View
              style={{
                width: Dimensions.get("screen").width - 60,
                borderRadius: 10,
                padding: 10,
                marginTop: 10,
                backgroundColor: "white",
                flexDirection: "row",
                gap: 5,
                alignItems: "center",
              }}
            >
              <TextInput
                style={{
                  fontSize: 16,
                  borderWidth: 1,
                  borderColor: "white",
                  height: 30,
                  width: 270,
                  fontWeight: "600",
                }}
                placeholderTextColor="grey"
                placeholder="Enter state"
              />
            </View>
          </View>

          <View>
            <Text style={{ fontSize: 16, fontWeight: "600", color: "grey" }}>
              Country
            </Text>
            <View
              style={{
                width: Dimensions.get("screen").width - 60,
                borderRadius: 10,
                padding: 10,
                marginTop: 10,
                backgroundColor: "white",
                flexDirection: "row",
                gap: 5,
                alignItems: "center",
              }}
            >
              <TextInput
                style={{
                  fontSize: 16,
                  borderWidth: 1,
                  borderColor: "white",
                  height: 30,
                  width: 270,
                  fontWeight: "600",
                }}
                placeholderTextColor="grey"
                placeholder="Enter country"
              />
            </View>
          </View>

          <View>
            <Text style={{ fontSize: 16, fontWeight: "600", color: "grey" }}>
              Zip
            </Text>
            <View
              style={{
                width: Dimensions.get("screen").width - 60,
                borderRadius: 10,
                padding: 10,
                marginTop: 10,
                backgroundColor: "white",
                flexDirection: "row",
                gap: 5,
                alignItems: "center",
              }}
            >
              <TextInput
                style={{
                  fontSize: 16,
                  borderWidth: 1,
                  borderColor: "white",
                  height: 30,
                  width: 270,
                  fontWeight: "600",
                }}
                placeholderTextColor="grey"
                placeholder="Enter zip"
              />
            </View>
          </View>

          <Link href="/Booking">
            <View
              style={{
                borderRadius: 10,
                backgroundColor: "black",
                width: Dimensions.get("screen").width - 50,
                paddingVertical: 20,
              }}
            >
              <Text
                style={{
                  color: "#ffff",
                  alignSelf: "center",
                  fontSize: 20,
                }}
              >
                Add Location
              </Text>
            </View>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
}
