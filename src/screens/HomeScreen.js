import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Menu from 'react-native-vector-icons/Entypo';
import Search from 'react-native-vector-icons/FontAwesome';
import CarouselCard from '../components/CarouselCard';
import HeadlinesCard from '../components/HeadlinesCard';
import axios from 'axios';

const HomeScreen = ({navigation}) => {
  const [topStories, setTopStories] = useState([]);
  const [highlights, setHighlights] = useState([]);
  useEffect(() => {
    axios
      .get(
        'https://newsapi.org/v2/top-headlines?country=in&apiKey=3e245ce78beb481a825e7b08d1cff161',
      )
      .then(res => {
        const articles = res.data.articles;
        setTopStories(articles.slice(0, 5));
        setHighlights(articles.slice(5));
      })
      .then(err => console.log(err));

    console.log(topStories.length);
  }, []);

  return (
    <View style={{padding: 12}}>
      <View
        style={{
          // backgroundColor: 'red',
          flexDirection: 'row',
          justifyContent: 'space-between',
          // marginTop: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginVertical: 10,
          }}>
          <Menu size={30} color={'black'} name="menu" />
          <Text style={styles.forYou}>For You</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Pressable onPress={() => navigation.navigate('Search')}>
            <Search
              name="search"
              size={30}
              color={'black'}
              style={{marginTop: 7}}
            />
          </Pressable>

          <Image
            source={require('../../assets/F1.jpg')}
            style={styles.avatar}
          />
        </View>
      </View>
      <View style={styles.line} />
      <ScrollView>
        <Text style={styles.dateText}>Monday, September 12</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.topStories}>Top Stories</Text>
          <Text style={styles.seeAll}>See all</Text>
        </View>
        <FlatList
          horizontal
          data={topStories}
          renderItem={({item}) => <CarouselCard item={item} />}
          keyExtractor={item => item.content}
          snapToAlignment="center"
          pagingEnabled
        />
        <View
          style={{
            marginVertical: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={[styles.topStories]}>Highlights</Text>
          <Text style={[styles.seeAll, {marginLeft: 'auto'}]}>See All</Text>
        </View>
        <FlatList
          contentContainerStyle={{marginBottom: 50}}
          data={highlights}
          keyExtractor={item => item.content}
          renderItem={({item}) => <HeadlinesCard item={item} />}
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  /* Icon Button 2 */
  forYou: {
    // font-family: IBM Plex Serif; /* Heading */
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 30,
    color: '#171A1FFF',
    marginHorizontal: 15,
  },
  /* Avatar 1 */
  avatar: {
    width: 44,
    height: 44,
    opacity: 1,
    borderRadius: 22,
    marginHorizontal: 15,
  },
  /* Line 3 */
  line: {
    width: 390,
    height: 0,
    borderWidth: 1,
    borderColor: '#F3F4F6FF',
    borderStyle: 'solid',
    marginVertical: 5,
  },
  dateText: {
    // font-family: Poppins; /* Body */
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
    color: '#9095A0FF' /* neutral-500 */,
    marginVertical: 10,
  },
  topStories: {
    // font-family: IBM Plex Serif; /* Heading */
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 36,
    color: '#171A1FFF',
  },
  carouselContainer: {
    position: 'absolute',
    top: 230,
    left: 20,
    width: 350,
    height: 336,
    borderRadius: 4 /* border-m */,
  },
  /* Button 6 */
  seeAll: {
    // font-family: Poppins;
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
    color: '#EE6D33FF' /* primary-500 */,
    opacity: 1,
  },
});
