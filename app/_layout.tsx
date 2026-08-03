import { Stack } from "expo-router";
import '@/globale.css';

export default function Tab() {
  return <Stack initialRouteName="(tabs)" screenOptions={{ headerShown: false }}/>;
}
