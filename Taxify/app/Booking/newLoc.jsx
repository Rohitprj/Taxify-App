import {
  View,
  Text,
  Dimensions,
  Pressable,
  ScrollView,
  TextInput,
  StyleSheet,
} from "react-native";
import React, { useMemo, useState } from "react";
import { Link, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { RadioGroup } from "react-native-radio-buttons-group";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function newLoc() {
  const radioBtn = useMemo(
    () => [
      { id: "1", label: "Home", value: "option1" },
      { id: "2", label: "Work", value: "option2" },
      { id: "3", label: "Other", value: "option3" },
    ],
    []
  );

  const [selected, isSelected] = useState();
  const router = useRouter();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          {/* Header */}
          <View style={styles.header}>
            <Pressable onPress={() => router.back()} style={styles.backButton}>
              <Ionicons name="chevron-back" size={24} color="black" />
            </Pressable>
            <Text style={styles.headerTitle}>Add New Location</Text>
          </View>

          {/* Radio Buttons */}
          <View style={styles.radioContainer}>
            <Text style={styles.label}>Select Category</Text>
            <RadioGroup
              radioButtons={radioBtn}
              onPress={isSelected}
              selectedId={selected}
              layout="row"
            />
          </View>

          {/* Input Fields */}
          <View style={styles.formContainer}>
            {["Street", "City", "State", "Country", "Zip"].map(
              (placeholder, index) => (
                <View key={index} style={styles.inputWrapper}>
                  <Text style={styles.inputLabel}>{placeholder}</Text>
                  <View style={styles.inputBox}>
                    <TextInput
                      style={styles.input}
                      placeholder={`Enter ${placeholder.toLowerCase()}`}
                      placeholderTextColor="grey"
                    />
                  </View>
                </View>
              )
            )}

            {/* Submit Button */}
            <Pressable onPress={() => router.back()}>
              <View style={styles.submitButton}>
                <Text style={styles.submitText}>Add Location</Text>
              </View>
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  scrollView: { paddingBottom: 40 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    paddingHorizontal: 20,
    gap: 10,
  },
  backButton: { padding: 0 },
  headerTitle: {
    fontSize: 20,
    fontWeight: "900",
    textAlign: "center",
  },

  radioContainer: { paddingHorizontal: 30, paddingVertical: 20 },
  label: { fontWeight: "600", fontSize: 16, paddingBottom: 10 },

  formContainer: {
    backgroundColor: "#f2f2f2",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 30,
    paddingVertical: 40,
    height: "100%",
  },
  inputWrapper: { marginBottom: 20 },
  inputLabel: { fontSize: 16, fontWeight: "600", color: "grey" },
  inputBox: {
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 5,
    height: 50,
    justifyContent: "center",
  },
  input: { fontSize: 16, color: "black", flex: 1 },

  submitButton: {
    borderRadius: 10,
    backgroundColor: "black",
    paddingVertical: 15,
    alignItems: "center",
    width: "100%",
  },
  submitText: { color: "white", fontSize: 18, fontWeight: "600" },
});
