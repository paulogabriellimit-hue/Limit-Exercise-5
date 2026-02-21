import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Login" }} />
      <Stack.Screen name="register" options={{ title: "Register" }} />
      <Stack.Screen name="setup" options={{ title: "Setup Account" }} />
      <Stack.Screen name="homepage" options={{ title: "Homepage" }} />
    </Stack>
  );
}
