import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface ListHeadingProp extends ListHeadingProps {
  onPress: () => void
}

const ListHeading = ({ title, onPress }: ListHeadingProp) => {
  return (
    <View className='list-head'>
      <Text className="list-title">{title}</Text>

      <TouchableOpacity className='list-action' onPress={onPress}>
        <Text className="list-action-text">View all</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ListHeading