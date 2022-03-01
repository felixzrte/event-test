import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  Button,
  Alert,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import {COLORS, FONTS, icons, images, SIZES} from '../constants';
import AppleHeader from 'react-native-apple-header';
import {StatusBar} from 'expo-status-bar';
import ClubCard from '../components/ClubCard';
import {McIcon, McText, CustomButton} from '../components';
import {SubHeader} from '../constants/styles';

const Suggestion = () => {
  return (
    <View style={{backgroundColor: '#0277bd'}}>
      <SafeAreaView>
      <View style={{backgroundColor: 'white'}}>
            <View style={styles.header}>
              <McText
                h1
                style={{
                  marginTop: '7%',
                  marginLeft: '5%',
                  marginBottom: '10%',
                  color: 'white',
                }}>
                Suggestions
              </McText>
            </View>
            

            <TextInput
              style={{
                borderRadius: 15,
                borderColor: 'black',
                borderWidth: 0.5,
                marginLeft: '5%',
                marginRight: '5%',
                alignItems: 'center',
                padding: '5%',
              }}
            />
            <View
              alignItems="center"
              justifyContent="center"
              style={{
                width: '95%',
                marginLeft: '3%',
                marginRight: '10%',
                marginTop: '15%',
                marginBottom: '50%',
              }}>
              <TouchableOpacity style={styles.button}>
                <Text>Send</Text>
              </TouchableOpacity>
            </View>
          </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderWidth: 0,
    borderRadius: 10,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  image2: {
    width: 200,
    height: 200,
    borderRadius: 225 / 2,
    overflow: 'hidden',
    borderWidth: 0,
    borderColor: 'black',
    alignItems: 'center',
    marginLeft: '25%',
    marginBottom: '10%',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#89CFF0',
    padding: '7%',
    borderRadius: 15,
    paddingHorizontal: '30%',
  },
  header: {
    borderColor: 'black',
    borderWidth: 0.25,
    borderRadius: 25,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopColor: '#0277bd',
    backgroundColor: '#0277bd',
  },
});
export default Suggestion;
