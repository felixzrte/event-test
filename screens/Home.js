/* eslint-disable react-native/no-inline-styles */
import {StatusBar, View, Image, FlatList} from 'react-native';
import {McText, McAvatar} from '../components';
import {LinearGradient} from 'expo-linear-gradient';
import {
  Container,
  HeaderSection,
  Header2Section,
  BannerSection,
  Line,
  ClubItemBox,
  BigClubLogo,
  EventItemBox,
} from '../constants/styles';
import React from 'react';
import {COLORS, images, dummyData} from '../constants';
import useFetch from '../useFetch';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

const Home = ({navigation}) => {
  const renderClubItem = ({item, index}) => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() =>
          navigation.navigate('Club', {
            item: item,
          })
        }>
        <ClubItemBox
          style={{
            marginLeft: index === 0 ? 16 : 0,
            marginRight: index === item.length - 1 ? 16 : 16,
          }}>
          <BigClubLogo source={{uri: item.logoImage}}/>
        </ClubItemBox>
      </TouchableOpacity>
    );
  };
  const {
    data: clubs,
    loadingClubs,
    errorClubs,
  } = useFetch('https://mcapp-api.herokuapp.com/api/v1/clubs');
  /*
    if (loading) {
      return null;
    }
  */
  if (errorClubs) {
    console.log(errorClubs);
  }
  console.log(clubs);

  const renderEventItem = ({item, index}) => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() =>
          navigation.navigate('EventDetails', {
            item: item,
          })
        }>
        <EventItemBox
          style={{
            marginLeft: index === 0 ? 16 : 0,
            marginRight: index === dummyData.Clubs.length - 1 ? 16 : 16,
          }}>
          <McText body4>{item.eventName}</McText>
        </EventItemBox>
      </TouchableOpacity>
    );
  };

  const {
    data: events,
    loadingEvents,
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

  return (
    <Container>
      <ScrollView
        contentContainerStyle={{}}
        style={{}}
        showsVerticalScrollIndicator={false}>
        <StatusBar hidden={false} barStyle={'dark-content'} />
        {/* Header Section */}
        <HeaderSection>
          <McText h1>Discover</McText>
          <McText style={{marginTop: 10}} body4 color="gray">
            Explore all the Multicultural Clubs have to offer!
          </McText>
          <Line />
        </HeaderSection>
        {/* Banner Section */}
        <BannerSection>
          <LinearGradient
            colors={['#4C4478', '#0C0C69']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={{
              height: 150,
              borderRadius: 16,
              backgroundColor: 'green',
              justifyContent: 'space-between',
              flexDirection: 'row',
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
            }}>
            <View
              style={{width: 175, margin: 20, justifyContent: 'space-between'}}>
              <McText h2 color="white">
                International Gala Auditions End Today!
              </McText>
              <McText body3 color="white">
                Ends @7pm
              </McText>
            </View>
          </LinearGradient>
        </BannerSection>
        <McText></McText>
        <View style={{flexDirection:'row'}}>
            <McText style={{textAlign:'left'}} h2>   Announcements</McText>
            <McText onPress={() => navigation.navigate('AddAnnouncement')} style={{ textAlign:'right', right: -10}} h1 > + </McText>
          </View>
        {/* Clubs Section */}
        <Header2Section>
        <View style={{flexDirection:'row'}}>
            <McText style={{textAlign:'left'}} h2 >Multicultural Clubs</McText>
            <McText onPress={() => navigation.navigate('AddClub')} style={{ textAlign:'right',right: -10}} h1 > + </McText>
          </View>
        </Header2Section>
        <View>
          <FlatList
            data={clubs.clubs}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{}}
            keyExtractor={(item, index) => 'key' + index}
            renderItem={renderClubItem}
          />
        </View>
        {/* Events Section */}
        <Header2Section>
        <View style={{flexDirection:'row'}}>
            <McText style={{textAlign:'left'}} h2 >Upcoming Events</McText>
            <McText onPress={() => navigation.navigate('AddEvent')} style={{ textAlign:'right', position: 'absolute', right: -35}} h1 >+</McText>
          </View>
        </Header2Section>

        <View>
          <FlatList
            data={events.events}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{}}
            keyExtractor={(item, index) => 'key' + index}
            renderItem={renderEventItem}
          />
        </View>

        {/* Features Section */}
        <Header2Section>
          <McText h2>More Features</McText>
        </Header2Section>
        <LinearGradient
          colors={['#4C4478', '#0C0C69']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={{
            height: 110,
            borderRadius: 16,
            marginHorizontal: 16,
            marginTop: 10,
          }}>
          <TouchableOpacity
            style={{margin: 20}}
            onPress={() => navigation.navigate('Suggestion')}>
            <McText color={'white'} h2>
              Suggestions
            </McText>
            <McText color={'white'} body3>
              Leave a suggestion on what you want to see in the MCC!
            </McText>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient
          colors={['#4C4478', '#0C0C69']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={{
            height: 110,
            borderRadius: 16,
            marginHorizontal: 16,
            marginTop: 10,
          }}>
          <TouchableOpacity
            style={{margin: 20}}
            onPress={() => navigation.navigate('Merch')}>
            <McText color={'white'} h2>
              Merch
            </McText>
            <McText color={'white'} body3>
              Explore all the club merchandise we are selling this semester!
            </McText>
          </TouchableOpacity>
        </LinearGradient>
        <View style={{marginTop: 100}} />
      </ScrollView>
    </Container>
  );
};

export default Home;
