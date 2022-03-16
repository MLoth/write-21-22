import { Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import AppLoading from 'expo-app-loading'
import {
  useFonts,
  PlayfairDisplay_400Regular,
  PlayfairDisplay_700Bold,
} from '@expo-google-fonts/playfair-display'

export default function App() {
  const [fontsLoaded, error] = useFonts({
    PlayfairDisplay_400Regular,
    PlayfairDisplay_700Bold,
  })

  // FONT INLADEN: fonts zijn overal nodig, pas nadat fonts geladen zijn, kan de app verder runnen!
  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <View>
        <StatusBar style="auto" />

        <Text
          style={{
            fontFamily: 'PlayfairDisplay_700Bold',
            marginTop: 64,
          }}
        >
          Open up App.tsx to start working on your app!
        </Text>
      </View>
    )
  }
}
