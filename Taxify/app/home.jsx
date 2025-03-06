import { View, Text, useWindowDimensions } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import Steering from "../assets/images/Steering";

export default function index() {
  const { height, width } = useWindowDimensions();

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.header, { height: height * 0.35, width }]} />
      <View style={[styles.card, { width: width - 80, top: height * 0.7 }]}>
        <Text style={styles.title}>Taxify App</Text>
        <Steering />
        <Text style={styles.description}>
          Welcome to Taxify App, the smartest way to book a cab! No more long
          waits and unpredictable fares.
        </Text>
        <View style={styles.arrowContainer}>
          <Link href="/MobNo">
            <MaterialIcons name="arrow-forward-ios" size={26} color="white" />
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  header: {
    backgroundColor: "#1b1c1c",
    borderBottomRightRadius: 200,
    borderBottomLeftRadius: 210,
  },
  card: {
    height: 200,
    backgroundColor: "white",
    alignSelf: "center",
    borderRadius: 10,
    padding: 20,
    gap: 15,
    position: "absolute",
  },
  title: {
    fontWeight: "600",
    fontSize: 18,
    textAlign: "center",
  },
  description: {
    textAlign: "center",
  },
  arrowContainer: {
    borderWidth: 2,
    backgroundColor: "#1b1c1c",
    borderRadius: 50,
    width: 48,
    padding: 8,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
