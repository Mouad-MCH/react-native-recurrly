import { SplashScreen, Stack } from "expo-router";
import '@/globale.css';
import { useFonts } from 'expo-font';
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function Tab() {
  const [fontsloaded, error] = useFonts({
    'sans-regular': require('../assets/fonts/PlusJakartaSans-Regular.ttf'),
    'sans-bold': require('../assets/fonts/PlusJakartaSans-Bold.ttf'),
    'sans-semibold': require('../assets/fonts/PlusJakartaSans-SemiBold.ttf'),
    'sans-medium': require('../assets/fonts/PlusJakartaSans-Medium.ttf'),
    'sans-extrabold': require('../assets/fonts/PlusJakartaSans-ExtraBold.ttf'),
    'sans-light': require('../assets/fonts/PlusJakartaSans-Light.ttf'),
  })

  useEffect(() => {
    if(fontsloaded || error) {
      SplashScreen.hideAsync();
    }
  }, [fontsloaded, error]);

  if(!fontsloaded && !error) {
    return null;
  }


  return <Stack initialRouteName="(tabs)" screenOptions={{ headerShown: false }}/>;
}
