import { View, Text, Dimensions, Pressable, StyleSheet } from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import MapView from "react-native-maps";

export default function index() {
  const router = useRouter();
  return (
    <View>
      <View style={styles.headerContainer}>
        <View style={styles.backButtonContainer}>
          <Pressable onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={24} color="black" />
          </Pressable>
        </View>
      </View>
      <MapView style={styles.map} />
      <View style={styles.bottomContainer}>
        <View style={styles.serviceLocationContainer}>
          <Text style={styles.serviceLocationText}>
            Select Service Location
          </Text>
          <Link href="/Booking/newLoc">
            <Text style={styles.changeText}>Change</Text>
          </Link>
        </View>

        {/* Bottom section */}
        <View style={styles.detailsContainer}>
          <View style={styles.locationBox}>
            <View style={styles.locationRow}>
              <View style={styles.locationIconContainer}>
                <Ionicons name="location-sharp" size={20} color="black" />
              </View>
              <View style={styles.locationTextContainer}>
                <Text style={styles.locationTitle}>Saket Road</Text>
                <Text style={{ height: 75 }}>
                  195, Lower Ground, Lane-1,{"\n"}Western Marg, Saidulajab,
                  {"\n"}
                  Near Saket Metro Gate No-2,{"\n"}Delhi, India 110030
                </Text>
              </View>
            </View>
          </View>
          <Link href="/(tabs)">
            <View style={styles.confirmButton}>
              <Text style={styles.confirmButtonText}>Confirm Location</Text>
            </View>
          </Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    width: Dimensions.get("screen").width - 30,
    position: "absolute",
    zIndex: 50,
    top: 30,
    left: 20,
  },
  backButtonContainer: {
    backgroundColor: "white",
    borderRadius: 50,
    width: 42,
    padding: 8,
    alignSelf: "center",
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("screen").width - 110,
  },
  title: {
    fontSize: 20,
    fontWeight: "900",
    alignContent: "center",
  },
  map: {
    width: Dimensions.get("screen").width,
    height: 520,
  },
  bottomContainer: {
    borderTopRightRadius: 30,
    borderTopLeftRadius: 40,
    backgroundColor: "black",
    top: -70,
    height: Dimensions.get("screen").height - 500,
    paddingTop: 30,
  },
  serviceLocationContainer: {
    flexDirection: "row",
    paddingHorizontal: 30,
    justifyContent: "space-between",
  },
  serviceLocationText: {
    fontSize: 14,
    color: "white",
  },
  changeText: {
    color: "#ffcc00",
    textDecorationLine: "underline",
  },
  detailsContainer: {
    borderTopRightRadius: 30,
    borderTopLeftRadius: 40,
    backgroundColor: "white",
    top: 10,
    height: Dimensions.get("screen").height - 160,
    width: Dimensions.get("screen").width,
    alignItems: "center",
    paddingTop: 30,
    gap: 20,
  },
  locationBox: {
    width: "90%",
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    padding: 20,
    // backgroundColor: "pink",
  },
  locationRow: {
    flexDirection: "row",
    gap: 10,
  },
  locationIconContainer: {
    backgroundColor: "white",
    borderRadius: 50,
    width: 30,
    height: 30,
    padding: 5,
  },
  locationTextContainer: {
    gap: 5,
    // height: 200,
  },
  locationTitle: {
    fontWeight: "900",
  },
  confirmButton: {
    width: Dimensions.get("screen").width - 55,
    height: 50,
    backgroundColor: "#1b1c1c",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 6,
  },
  confirmButtonText: {
    fontWeight: "500",
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
});
