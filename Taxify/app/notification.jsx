import { View, Text, Dimensions, Pressable, StyleSheet } from "react-native";
import React from "react";
import { Fontisto, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useSelector } from "react-redux";

export default function Notification() {
  const router = useRouter();
  const theme = useSelector((state) => state.theme.theme);

  return (
    <View style={{ ...styles.container, backgroundColor: theme.background }}>
      <View style={styles.header}>
        <View style={styles.backButton}>
          <Pressable onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={24} color="black" />
          </Pressable>
        </View>
        <View style={styles.headerTitleContainer}>
          <Text style={{ ...styles.headerTitle, color: theme.text }}>
            Notifications
          </Text>
        </View>
      </View>
      <View style={styles.notificationsContainer}>
        {notifications.map((notification, index) => (
          <View
            key={index}
            style={[styles.notificationCard, notification.backgroundStyle]}
          >
            <View style={styles.notificationTextContainer}>
              <Text style={styles.notificationTitle}>{notification.title}</Text>
              <Text style={styles.notificationDescription}>
                {notification.description}
              </Text>
            </View>
            <View style={styles.notificationIconContainer}>
              <notification.icon
                name={notification.iconName}
                size={24}
                color="black"
              />
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "red",
  },
  header: {
    width: Dimensions.get("screen").width - 30,
    flexDirection: "row",
    marginTop: 40,
    alignSelf: "center",
  },
  backButton: {
    padding: 10,
    borderRadius: 30,
    backgroundColor: "lightgrey",
  },
  headerTitleContainer: {
    alignItems: "center",
    width: Dimensions.get("screen").width - 110,
    right: 7,
    alignSelf: "center",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "900",
  },
  notificationsContainer: {
    padding: 20,
    gap: 15,
  },
  notificationCard: {
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    elevation: 5,
  },
  notificationTextContainer: {
    width: Dimensions.get("screen").width - 120,
  },
  notificationTitle: {
    fontWeight: "700",
    lineHeight: 18,
  },
  notificationDescription: {
    color: "grey",
    lineHeight: 18,
  },
  notificationIconContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 60,
  },
});

const notifications = [
  {
    title: "Account Alert!",
    description: "This allows you to retrieve your account if you lose access.",
    icon: MaterialCommunityIcons,
    iconName: "clock-outline",
    backgroundStyle: { backgroundColor: "lightgrey" },
  },
  {
    title: "Receive 20% discount for first ride",
    description: "You have booked plumber service today at 6:30pm",
    icon: MaterialCommunityIcons,
    iconName: "brightness-percent",
    backgroundStyle: { backgroundColor: "white" },
  },
  {
    title: "New year shopping with rider!",
    description: "You have booked plumber service today at 6:30pm.",
    icon: Fontisto,
    iconName: "train",
    backgroundStyle: { backgroundColor: "white" },
  },
  {
    title: "You have received 1 coupon",
    description: "You have booked plumber service today at 6:30pm",
    icon: MaterialCommunityIcons,
    iconName: "card-text-outline",
    backgroundStyle: { backgroundColor: "white" },
  },
];
