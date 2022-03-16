import { StyleSheet, TextInput } from 'react-native'
import color from '../styles/color'

export default () => {
  return (
    <TextInput
      style={styles.textSearch}
      placeholder={'Search'}
      placeholderTextColor={color.grey[100]}
    />
  )
}

const styles = StyleSheet.create({
  textSearch: {
    backgroundColor: color.grey[500],
    color: color.light,
    paddingVertical: 10,
    paddingHorizontal: 16,
    textAlign: 'center',
    marginVertical: 8,
    borderRadius: 10,
  },
})
