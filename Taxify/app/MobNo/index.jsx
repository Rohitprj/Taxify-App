import { View, Text, Dimensions, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native";
import Google from "../../assets/images/GoogleIcon.png";
import { Link } from "expo-router";

export default function MobileNo() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>Taxify</Text>
        <View style={styles.welcomeTextContainer}>
          <Text style={styles.welcomeText}>Lets you in</Text>
          <Text style={styles.subtitle}>Hey, You have been missed!</Text>
        </View>

        <Text style={styles.label}>Mobile Number</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="+1-121"
            keyboardType="numeric"
            style={styles.smallInput}
          />
          <TextInput
            placeholder="Enter your number"
            keyboardType="numeric"
            style={styles.largeInput}
          />
        </View>

        <Link href="/MobNo/otpVerify" style={styles.linkContainer}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Get OTP</Text>
          </View>
        </Link>
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomContainer}>
        <View style={styles.signUpContainer}>
          <Text style={styles.newUserText}>New User?</Text>
          <Link href="../SignUp">
            <Text style={styles.signUpText}> Sign up</Text>
          </Link>
        </View>

        <View style={styles.orContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.line} />
        </View>

        <View style={styles.googleButton}>
          <Image source={Google} style={styles.googleIcon} />
          <Text style={styles.googleText}>Continue with Google</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = {
  safeContainer: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  topContainer: {
    width: Dimensions.get("screen").width,
    backgroundColor: "#f2f2f2",
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    padding: 15,
  },
  title: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "900",
  },
  welcomeTextContainer: {
    paddingVertical: 10,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: "500",
  },
  subtitle: {
    color: "#555",
  },
  label: {
    fontWeight: "500",
    paddingVertical: 10,
  },
  inputContainer: {
    flexDirection: "row",
    gap: 10,
  },
  smallInput: {
    height: 40,
    width: "20%",
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  largeInput: {
    height: 40,
    width: "76%",
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  linkContainer: {
    marginTop: 30,
    marginVertical: 10,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#1b1c1c",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "700",
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },

  // Bottom Section
  bottomContainer: {
    alignItems: "center",
    paddingVertical: 20,
    backgroundColor: "#f2f2f2",
  },
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  newUserText: {
    color: "#b3b3b3",
  },
  signUpText: {
    fontWeight: "500",
  },
  orContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    paddingVertical: 20,
  },
  line: {
    height: 3,
    width: 60,
    backgroundColor: "grey",
    alignSelf: "center",
  },
  orText: {
    fontWeight: "500",
  },
  googleButton: {
    width: Dimensions.get("screen").width - 30,
    height: 50,
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  googleIcon: {
    height: 30,
    width: 30,
  },
  googleText: {
    fontWeight: "700",
    fontSize: 16,
    color: "grey",
  },
};
