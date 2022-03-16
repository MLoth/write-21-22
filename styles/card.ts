import { StyleSheet, Dimensions } from 'react-native'
import color from './color'

export default StyleSheet.create({
  card: {
    padding: 24,
  },

  cardSmall: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 200, // Will be tested
    marginBottom: 16,
  },

  cardAdd: {
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // width: '50%',
  },

  cardDate: {
    color: color.grey[100],
    fontSize: 12,
  },

  cardTitle: {
    fontFamily: 'PlayfairDisplay_700Bold',
  },

  cardAmountOfPages: {
    color: color.grey[100],
    fontSize: 12,
  },
})
