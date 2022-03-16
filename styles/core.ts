import { StyleSheet } from 'react-native'
import color from './color'

export default StyleSheet.create({
  // BACKGROUNDS
  backgroundDark: {
    backgroundColor: color.dark,
  },

  backgroundLight: {
    backgroundColor: color.light,
  },

  backgroundGrey100: {
    backgroundColor: color.grey[100],
  },

  backgroundGrey500: {
    backgroundColor: color.grey[500],
  },

  backgroundGrey900: {
    backgroundColor: color.grey[900],
  },
  // TEXT-COLORS
  textDark: {
    color: color.dark,
  },

  textLight: {
    color: color.light,
  },

  container: {
    marginHorizontal: 16,
  },

  // STYLING
  rounded: {
    borderRadius: 16,
  },
})
