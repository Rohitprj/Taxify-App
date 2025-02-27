import React from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const index = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.back()} style={styles.backButton}>
        <Ionicons name="chevron-back" size={24} color="black" />
      </Pressable>

      <Text style={styles.logo}>🚖 Taxify</Text>

      <Text style={styles.heading}>Create your account</Text>
      <Text style={styles.subText}>
        Explore your life by joining with Ride.
      </Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>User Name</Text>
        <TextInput style={styles.input} placeholder="Enter your name" />

        <Text style={styles.label}>Mobile Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your number"
          keyboardType="numeric"
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          keyboardType="email-address"
        />

        <Text style={styles.label}>Referral ID</Text>
        <TextInput style={styles.input} placeholder="Enter referral id" />

        <Pressable style={styles.signupButton}>
          <Text style={styles.signupText}>Sign Up</Text>
        </Pressable>
        <View style={styles.bottomText}>
          <Text style={styles.loginText}>Already have an account? </Text>
          <Pressable onPress={() => router.back()}>
            <Text style={styles.signIn}>Sign in</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    padding: 20,
  },
  backButton: {
    backgroundColor: "#f2f2f2",
    borderRadius: 50,
    width: 42,
    padding: 8,
  },
  logo: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  subText: {
    textAlign: "center",
    color: "gray",
    marginBottom: 20,
  },
  inputContainer: {
    marginTop: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    backgroundColor: "white",
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
    borderColor: "#ddd",
  },
  signupButton: {
    backgroundColor: "black",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  signupText: {
    color: "white",
    fontWeight: "bold",
  },
  loginText: {
    textAlign: "center",
    color: "gray",
  },
  signIn: {
    color: "black",
    fontWeight: "bold",
  },
  bottomText: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    marginTop: 15,
  },
});

export default index;
