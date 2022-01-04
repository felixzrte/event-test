/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ScrollView,
  TextInput,
  ImageBackground,
  Image,
  Animated,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS, FONTS, icons, images, SIZES} from '../constants';
import styled from 'styled-components/native';
import {McIcon, McText} from '../components';
import useFetch from '../useFetch';
import {ceil} from 'react-native-reanimated';
import {EvilIcons} from '@expo/vector-icons';

const OVERFLOW_HEIGHT = 70;
const SPACING = 10;
const ITEM_WIDTH = SIZES.width * 0.76;
const ITEM_HEIGHT = ITEM_WIDTH * 1.7;
const VISIBLE_ITEMS = 3;
const ITEM_SIZE = SIZES.width * 0.8;
const ITEM_SPACING = (SIZES.width - ITEM_SIZE) / 2;

const Home = ({navigation}) => {
  const {
    data: events,
    loading,
    error,
  } = useFetch('https://mcapp-api.herokuapp.com/api/v1/events');
  /*
    if (loading) {
      return null;
    }
  */
  if (error) {
    console.log(error);
  }
  console.log(events);

  const scrollX = React.useRef(new Animated.Value(0)).current;

  const eventCard = ({item, index}) => {
    const inputRange = [
      (index - 1) * SIZES.itemSize,
      index * SIZES.itemSize,
      (index + 1) * SIZES.itemSize,
    ];
    const opacity = scrollX.interpolate({
      inputRange,
      outputRange: [0.4, 1, 0.4],
    });
    const scale = scrollX.interpolate({
      inputRange,
      outputRange: [0.9, 1, 0.9],
    });
    return (
      <Animated.View style={{opacity, transform: [{scale}]}}>
        <View style={styles.itemContainer}>
          <McText style={[styles.title]} numberOfLines={1}>
            {item.eventName}
          </McText>
          <McText body4>{item.date}</McText>

          <View style={styles.itemContainerRow}>
            <McText style={[styles.location]}>
              <EvilIcons
                name="location"
                size={16}
                color="white"
                style={{marginRight: 5}}
              />
              {item.location}
            </McText>
            {/* <McText style={[styles.date]}>{item.date}</McText> */}
          </View>
        </View>
        <View
          style={{
            width: ITEM_SIZE,
            alignItems: 'center',
            paddingBottom: 120,
          }}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1548600916-dc8492f8e845?w=800&q=80',
            }}
            style={{
              height: ITEM_HEIGHT,
              width: ITEM_WIDTH,
              borderRadius: SIZES.radius,
            }}
          />
        </View>
      </Animated.View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <McText body4>EVENTS</McText>
      </View>
      <ScrollView>
        <Animated.FlatList
          data={events.events}
          keyExtractor={(item, index) => 'key' + index}
          renderItem={eventCard}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: true},
          )}
          horizontal
          bounces={false}
          showsHorizontalScrollIndicator={false}
          snapToInterval={ITEM_SIZE}
          decelerationRate="fast"
          style={{flexGrow: 1}}
          contentContainerStyle={{
            paddingHorizontal: ITEM_SPACING,
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.black,
  },
  title: {
    fontSize: 22,
    fontWeight: '900',
    textTransform: 'uppercase',
    letterSpacing: -1,
  },
  location: {
    fontSize: 16,
  },
  date: {
    fontSize: 12,
  },
  itemContainer: {
    height: OVERFLOW_HEIGHT,
    padding: SPACING * 2,
    marginBottom: 25,
  },
  itemContainerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  overflowContainer: {
    height: OVERFLOW_HEIGHT,
    overflow: 'hidden',
  },
  /* Header */
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
