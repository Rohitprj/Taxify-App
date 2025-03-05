import React from "react";
import { View, Text, Switch } from "react-native";
import { useSelector, useDispatch } from "react-redux";

export default function HomeScreen() {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  return (
    <View
      style={{
        backgroundColor: theme.background,
      }}
    >
      <Text style={{ color: theme.text }}>Current Theme: {theme.mode}</Text>
    </View>
  );
}
