import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack'

import Overview from './Overview'
import New from './New'
import Edit from './Edit'
import color from '../../styles/color'

export default () => {
  const Stack = createStackNavigator()

  const screenOptions: StackNavigationOptions = {
    headerShown: false,
    cardStyle: {
      backgroundColor: color.dark,
    },
  }

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Overview" component={Overview} />
      <Stack.Screen name="New" component={New} />
      <Stack.Screen name="Edit" component={Edit} />
    </Stack.Navigator>
  )
}
