import { Stack } from "expo-router/stack";

export default function Layout() {
  return (
    <Stack>
      {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
      <Stack.Screen name="/(tabs)/index" options={{ headerShown: false }} />
      <Stack.Screen name="MobNo/index" options={{ headerShown: false }} />
      <Stack.Screen name="MobNo/otpVerify" options={{ headerShown: false }} />
      <Stack.Screen name="Booking/index" options={{ headerShown: false }} />
      <Stack.Screen name="Booking/newLoc" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
