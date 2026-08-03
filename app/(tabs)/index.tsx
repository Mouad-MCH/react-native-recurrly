import "@/globale.css";
import { Link } from "expo-router";
import { FlatList, Text, View, ScrollView } from "react-native";
import { SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";
import { styled } from "nativewind";

const SafeAreaView = styled(RNSafeAreaView);


const DATA = [
  { id: '1', title: 'Item 1' },
  { id: '2', title: 'Item 2' },
  { id: '3', title: 'Item 3' },
  { id: '4', title: 'Item 4' },
  { id: '5', title: 'Item 5' },
  { id: '6', title: 'Item 6' },
  { id: '7', title: 'Item 7' },
  { id: '8', title: 'Item 8' },
  { id: '9', title: 'Item 9' },
  { id: '10', title: 'Item 10' }
];

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link href="/onboarding" className="mt-4 rounded bg-primary text-white p-4">
        Go to Onboarding
      </Link>
      <View className="flex-row mt-3 space-x-4 gap-1 justify-center mb-3">
          <Link href="/(auth)/sign-in" className="mt-4 rounded bg-foreground/50 text-white p-4">
            Sign In
          </Link>
          <Link href="/(auth)/sign-up" className="mt-4 rounded bg-foreground text-white p-4">
            Sign Up
          </Link>
      </View>

      <Link
        href={{
          pathname: "/subscriptions/[id]",
          params: { id: "spotify" },
        }}
      >
        Spotify subscription
      </Link>
      <Link
       href={
        {
          pathname: "/subscriptions/[id]",
          params: { id: "claude" }
        }
       }
      >
        claude Max Subscription
      </Link>


      {/* <ScrollView className="mt-4 w-full border border-primary rounded">
        <FlatList
          data={DATA}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View className="p-4 border-b border-gray-200">
              <Text className="text-lg">{item.title}</Text>
            </View>
          )}
        />
      </ScrollView> */}
    </SafeAreaView>
  );
}
