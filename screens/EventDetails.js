/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Pressable,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  Logo,
} from 'react-native';
import {COLORS, FONTS, icons, images, SIZES} from '../constants';
import {McIcon, McText} from '../components';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from '../components/MerchProductStyles.js';

const ITEM_WIDTH = SIZES.width * 1;
const ITEM_HEIGHT = ITEM_WIDTH * 1;

const EventDetails = ({route, navigation}) => {
  const {item} = route.params;

  return (
      <ScrollView>
        <View style={{flex: 0, alignItems: 'center', justifyContent: 'center'}}>
          <View style={styles.productItemContainer}>
            <Image
              source={{uri: item.image}}
              style={{
                height: ITEM_HEIGHT,
                width: ITEM_WIDTH,
                borderRadius: SIZES.radius,
              }}
            />
            </View>
          </View>
        <View style={styles.leftMargin}>
        <McText h1>{item.club}</McText>
        <McText h1>{item.eventName}</McText>
        <McText h2>About This Event</McText>
        <McText></McText>
        <McText style={styles.descText}>{item.desc}</McText>
        <McText></McText>
        <McText style={styles.descText} >{item.date}</McText>
        <McText style={styles.descText} >{item.location}</McText>
        <McText style={styles.descText} >{item.attendence}</McText>
        <McText style={styles.descText} >{item.favorite}</McText>
        <McText style={styles.bottomText}>{item.extraNotes}</McText>
        </View>
      </ScrollView>
  );
};

export default EventDetails;

/* 
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <McText h1 style={{marginBottom: 20}}>
            Event Details
          </McText>
          <View
            style={styles.eventdetails}
            paddingVertical={50}
            paddingHorizontal={100}>
            <McText h2 style={{marginBottom: 10}}>
              {item.eventName}
            </McText>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: 'https://loveincorporated.blob.core.windows.net/contentimages/gallery/70bc81c8-b277-407d-8c3a-5c1a3e501732-4-hamburger.jpg',
              }}
            />
            <McText body2 style={{marginTop: 20}}>
              Club: {item.clubName}
            </McText>
            <McText body3> Synopsis: </McText>
            <McText body4> {item.desc}</McText>
          </View>
          <View
            style={styles.eventdetails}
            paddingVertical={50}
            paddingHorizontal={138}>
            <Pressable style={styles.button}>
              <Text style={styles.text}>Signup</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>

*/