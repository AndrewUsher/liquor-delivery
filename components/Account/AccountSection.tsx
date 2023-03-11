import { Icon, Text, useTheme } from '@ui-kitten/components'
import { Pressable, StyleSheet, View } from 'react-native'
import { commonStyles } from '../../styles/common'

type Option = {
  text: string
  onPress: () => void
}

type Props = {
  sectionTitle: string
  optionsList: Option[]
}

export function AccountSection({ sectionTitle, optionsList }: Props) {
  const theme = useTheme()
  return (
    <>
      <View
        style={[
          commonStyles.horizontalPaddingContainer,
          styles.categoryNameContainer
        ]}
      >
        <Text category="h3">{sectionTitle}</Text>
      </View>
      {optionsList.map((option) => (
        // <Pressable onPress={option.onPress} key={option.text}>
        <View style={styles.outerOptionsContainer} key={option.text}>
          <View
            style={[
              commonStyles.horizontalPaddingContainer,
              styles.optionsContainer
            ]}
          >
            <Text>{option.text}</Text>
            <Icon
              name="arrow-ios-forward-outline"
              fill={theme['color-basic-1000']}
              style={styles.arrowIcon}
            />
          </View>
        </View>
        // </Pressable>
      ))}
    </>
  )
}

const styles = StyleSheet.create({
  arrowIcon: {
    width: 16,
    height: 16
  },
  categoryNameContainer: {
    marginBottom: 24
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  outerOptionsContainer: {
    marginBottom: 16
  }
})
