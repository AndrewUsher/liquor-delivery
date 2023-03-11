import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Button, Text } from '@ui-kitten/components'
import { Image } from 'expo-image'
import React, { useState } from 'react'
import { StyleSheet, View, useWindowDimensions } from 'react-native'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { LoggedOutStackParamsList } from '../../types/navigator/LoggedOutNavigatior'

type Props = NativeStackScreenProps<LoggedOutStackParamsList, 'Onboarding'>

export function OnboardingScreen(props: Props) {
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
          height: 60,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 64,
          paddingTop: 64
        }}
      >
        <View style={{ width: 80, height: 80, backgroundColor: 'blue' }}></View>
      </View>
      <View
        style={
          {
            // flex: 5
          }
        }
      >
        <Carousel
          data={carouselData}
          renderItem={renderCarouselItem}
          itemWidth={screenWidth}
          sliderWidth={screenWidth}
          removeClippedSubviews={false}
          containerCustomStyle={{
            flexGrow: 1,
            paddingBottom: 20
          }}
          onSnapToItem={setActiveSlide}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Pagination
          dotsLength={carouselData.length}
          activeDotIndex={activeSlide}
          dotStyle={{
            width: 8,
            height: 8,
            borderRadius: 4,
            marginHorizontal: 4,
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
            onPress={() => {
              props.navigation.navigate('Login')
            }}
          >
            Log In
          </Button>
        </View>
        <View style={styles.singleButtonContainer}>
          <Button
            style={styles.ctaButton}
            size="large"
            onPress={() => {
              props.navigation.navigate('Signup')
            }}
          >
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

function renderCarouselItem({ item: { image, heading, additionalText } }) {
  return (
    <View style={{ height: '60%', width: '100%' }}>
      <Image source={image} style={{ height: 420 }} contentFit="cover" />
      <View
        style={{ paddingLeft: 32, paddingRight: 32, alignContent: 'center' }}
      >
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
}
