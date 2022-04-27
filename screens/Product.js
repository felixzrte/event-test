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
  ImageBackground,
} from 'react-native';

import {COLORS, FONTS, icons, images, SIZES} from '../constants';
import {McIcon, McText} from '../components';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {BottomBarSection} from '../constants/styles';
const Product = ({route, navigation}) => {
  const {item} = route.params;

  return (
    <View>
      <ScrollView>
        {/* Navigation Header */}
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: SIZES.radius,
            height: 65,
            alignItems: 'flex-end',
          }}>
          <TouchableOpacity
            style={{marginLeft: SIZES.base}}
            onPress={() => navigation.goBack()}>
            <Image
              source={icons.left_arrow}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: COLORS.black,
              }}
            />
          </TouchableOpacity>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <McText h3 color={'black'}>
              Club Merch
            </McText>
          </View>
          <TouchableOpacity
            style={{marginRight: SIZES.base}}
            onPress={() => navigation.navigate('UpdateProduct')}>
            <Image
              source={icons.menu_dots}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: 'transparent',
                alignSelf: 'flex-end',
              }}
            />
          </TouchableOpacity>
        </View>
        {/* Product */}
        <ImageBackground
          resizeMode="contain"
          source={{uri: item.pic}}
          style={{
            marginTop: 24,
            width: SIZES.width,
            height: SIZES.height / 2,
          }}
        />
        {/* Description */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 15,
            paddingHorizontal: 16,
          }}>
          <View>
            <McText body3 style={{opacity: 0.5, letterSpacing: 1.5}}>
              {item.club}
            </McText>
            <McText h2 style={{letterSpacing: 1.5}}>
              {item.merchItemName}
            </McText>
            <McText body3 style={{letterSpacing: 1.5}}>
              ${item.merchItemPrice}.00
            </McText>
            <McText h3 style={{marginTop: 16}}>
              About
            </McText>
            <McText body3 style={{marginVertical: 8}}>
              {item.description}
            </McText>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 5,
              }}>
              <Image
                source={icons.phone}
                style={{
                  width: 14,
                  height: 14,
                  marginRight: 8,
                  opacity: 0.65,
                }}
              />
              <McText body3 style={{opacity: 0.65, letterSpacing: 1.5}}>
                {item.contactNumber}
              </McText>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 5,
              }}>
              <Image
                source={icons.email}
                style={{
                  width: 14,
                  height: 14,
                  marginRight: 8,
                  opacity: 0.65,
                }}
              />
              <McText body3 style={{opacity: 0.65, letterSpacing: 1.5}}>
                {item.contactEmail}
              </McText>
            </View>
          </View>
        </View>
        <View style={{paddingBottom: '20%'}} />
        <View />
      </ScrollView>
    </View>
  );
};

export default Product;
