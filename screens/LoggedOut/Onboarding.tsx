import { Button, Text } from '@ui-kitten/components'
import { Image } from 'expo-image'
import React, { useRef, useState } from 'react'
import {
  Dimensions,
  StyleSheet,
  View,
  ViewComponent,
  useWindowDimensions
} from 'react-native'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import Carousel, { Pagination } from 'react-native-snap-carousel'

const renderCarouselItem = ({ item: { image, heading, additionalText } }) => (
  <View style={{ height: '60%', width: '100%' }}>
    <Image source={image} style={{ height: 420 }} contentFit="cover" />
    <View style={{ paddingLeft: 32, paddingRight: 32, alignContent: 'center' }}>
      <Text
        category="h4"
        style={{ marginTop: 16, marginBottom: 8, textAlign: 'center' }}
      >
        {heading}
      </Text>
      <Text category="p1" style={{ textAlign: 'center' }}>
        {additionalText}
      </Text>
    </View>
  </View>
)

export function OnboardingScreen() {
  const s = useSafeAreaInsets()
  const { width: screenWidth, height: screenHeight } = useWindowDimensions()
  const [activeSlide, setActiveSlide] = useState(0)
  const [bottomContainerHeight, setBottomContainerHeight] = useState(0)

  const carouselData = [
    {
      image: require('../../assets/onboarding/ob-img-1.jpeg'),
      heading: 'Welcome to {____NAME}.',
      additionalText:
        'You can shop local stores to get beer, wine, and liquor delivered in under 60 minutes.'
    },
    {
      image: require('../../assets/onboarding/ob-img-2.jpeg'),
      heading: 'Shop downtown Memphis.',
      additionalText: 'Browse your faves from downtown liquor stores.'
    },
    {
      image: require('../../assets/onboarding/ob-img-3.jpeg'),
      heading: 'Get your drinks delivered.',
      additionalText:
        'Just place an order, and boom! At your door in less than an hour.'
    }
  ]

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          height: screenHeight - s.bottom * 3 - s.top - bottomContainerHeight
        }}
      >
        <Carousel
          data={carouselData}
          renderItem={renderCarouselItem}
          itemWidth={screenWidth}
          sliderWidth={screenWidth}
          removeClippedSubviews={false}
          containerCustomStyle={{
            marginTop: 128
          }}
          onSnapToItem={setActiveSlide}
        />
      </View>
      <View>
        <Pagination
          dotsLength={carouselData.length}
          activeDotIndex={activeSlide}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 8,
            backgroundColor: 'rgba(0, 0, 0, 0.92)'
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </View>

      <View
        style={[styles.ctaButtonsContainer, { bottom: s.bottom }]}
        onLayout={(e) => {
          setBottomContainerHeight(e.nativeEvent.layout.height)
        }}
      >
        <View style={styles.singleButtonContainer}>
          <Button
            style={styles.ctaButton}
            appearance="outline"
            status="basic"
            size="large"
          >
            Log In
          </Button>
        </View>
        <View style={styles.singleButtonContainer}>
          <Button style={styles.ctaButton} size="large">
            Sign Up
          </Button>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  ctaButton: {
    width: '100%'
  },
  ctaButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute'
  },
  singleButtonContainer: {
    flex: 1,
    paddingHorizontal: 16,
    width: '50%'
  }
})
