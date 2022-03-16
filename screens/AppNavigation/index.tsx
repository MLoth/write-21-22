import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'
import { ParamListBase, RouteProp } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'

import Documents from '../Documents'
import Reader from '../Reader'
import Settings from '../Settings'
import color from '../../styles/color'
import { ComponentProps } from 'react'
import core from '../../styles/core'

const Tab = createBottomTabNavigator()

// TODO: geef elke tab screen een andere icon
// TODO: maak de tab dark
const screenOptions = ({
  route,
}: {
  route: RouteProp<ParamListBase>
}): BottomTabNavigationOptions => ({
  tabBarIcon: ({
    focused,
    color,
    size,
  }: {
    focused: boolean
    color: string
    size: number
  }) => {
    let icon: ComponentProps<typeof Ionicons>['name'] = 'help'

    if (route.name === 'Documents') icon = 'ios-folder'
    if (route.name === 'Reader Mode') icon = 'ios-bookmarks'
    if (route.name === 'Settings') icon = 'md-settings'

    return <Ionicons color={color} name={icon} size={size} />
  },

  tabBarActiveTintColor: color.light,
  tabBarInactiveTintColor: color.grey[500],
  tabBarStyle: {
    backgroundColor: color.dark,
    borderTopWidth: 1,
    borderTopColor: color.grey[900],
  },

  headerStyle: {
    backgroundColor: color.dark,
  },
  headerTitleStyle: {
    color: color.light,
  },
})

// Zonder naam -> import zonder {}
export default () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Documents" component={Documents} />
      <Tab.Screen name="Reader Mode" component={Reader} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  )
}
