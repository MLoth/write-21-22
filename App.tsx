import { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import AppLoading from 'expo-app-loading'
import {
  useFonts,
  PlayfairDisplay_400Regular,
  PlayfairDisplay_700Bold,
} from '@expo-google-fonts/playfair-display'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import AppNavigation from './screens/AppNavigation'

import { setBackgroundColorAsync } from 'expo-navigation-bar'
import { osName } from 'expo-device'
import color from './styles/color'

export default function App() {
  const [fontsLoaded, error] = useFonts({
    PlayfairDisplay_400Regular,
    PlayfairDisplay_700Bold,
  })

  useEffect(() => {
    // Android bottom color
    if (osName === 'Android') setBackgroundColorAsync(color.dark)
  }, [])

  // FONT INLADEN: fonts zijn overal nodig, pas nadat fonts geladen zijn, kan de app verder runnen!
  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <NavigationContainer>
        <SafeAreaProvider>
          <StatusBar style="inverted" />

          <AppNavigation />
        </SafeAreaProvider>
      </NavigationContainer>
    )
  }
}
