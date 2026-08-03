import { Stack } from "expo-router";
import '@/globale.css';

export default function RootLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
