import { View, Text } from 'react-native'

const onboarding = () => {
  return (
    <View className="flex-1 items-center justify-center bg-background p-5">
      <Text className="m-5 text-xl font-sans uppercase font-bold text-red-400">
        onboarding 👌
      </Text>
    </View>
  )
}

export default onboarding