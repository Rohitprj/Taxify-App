import {
  View,
  Text,
  Dimensions,
  TextInput,
  Pressable,
  StyleSheet,
} from "react-native";
import React, { useRef } from "react";
import { Link, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function otpVerify() {
  const router = useRouter();
  const otpInputs = Array(5)
    .fill(null)
    .map(() => useRef(null));

  const handleChange = (text, index) => {
    if (text.length === 1 && index < otpInputs.length - 1) {
      otpInputs[index + 1].current.focus();
    }
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.backButtonContainer}>
            <Pressable onPress={() => router.back()}>
              <Ionicons name="chevron-back" size={24} color="black" />
            </Pressable>
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Taxify</Text>
          </View>
        </View>
        <View style={styles.otpTextContainer}>
          <Text style={styles.otpTitle}>OTP verification</Text>
          <Text>Enter OTP sent to +91-9988776655</Text>
        </View>
        <View style={styles.otpInputContainer}>
          <Text style={styles.otpLabel}>OTP</Text>
          <View style={styles.otpBoxes}>
            {otpInputs.map((ref, index) => (
              <TextInput
                key={index}
                ref={ref}
                style={styles.otpBox}
                keyboardType="number-pad"
                maxLength={1}
                onChangeText={(text) => handleChange(text, index)}
              />
            ))}
          </View>
        </View>
        <Link href="/Booking" style={styles.verifyLink}>
          <View style={styles.verifyButton}>
            <Text style={styles.verifyText}>Verify</Text>
          </View>
        </Link>
        <View style={styles.resendContainer}>
          <Text style={styles.resendText}>Not Received Yet ?</Text>
          <Text style={styles.resendLink}> Resend it</Text>
        </View>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height - 450,
    backgroundColor: "#f2f2f2",
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    padding: 15,
  },
  header: {
    flexDirection: "row",
    width: Dimensions.get("screen").width - 30,
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
  otpTextContainer: {
    paddingVertical: 10,
    marginTop: 20,
  },
  otpTitle: {
    fontSize: 20,
    fontWeight: "500",
  },
  otpInputContainer: {
    paddingVertical: 10,
  },
  otpLabel: {
    fontSize: 16,
    fontWeight: "500",
  },
  otpBoxes: {
    flexDirection: "row",
    paddingVertical: 10,
    justifyContent: "space-around",
  },
  otpBox: {
    height: 50,
    width: 50,
    backgroundColor: "white",
    borderRadius: 10,
    textAlign: "center",
    fontSize: 18,
  },
  verifyLink: {
    marginVertical: 10,
  },
  verifyButton: {
    width: Dimensions.get("screen").width - 30,
    height: 50,
    backgroundColor: "#1b1c1c",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  verifyText: {
    fontWeight: "700",
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
  resendContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  resendText: {
    color: "#b3b3b3",
  },
  resendLink: {
    fontWeight: "500",
  },
});
