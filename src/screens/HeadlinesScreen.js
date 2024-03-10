import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Menu from 'react-native-vector-icons/Entypo';
import Search from 'react-native-vector-icons/FontAwesome';
import HeadlinesCard from '../components/HeadlinesCard';

const categories = [
  {
    id: 'Business',
    name: 'business',
  },
  {
    id: 'Entertainment',
    name: 'entertainment',
  },
  {
    id: 'General',
    name: 'general',
  },
  {
    id: 'Health',
    name: 'health',
  },
  {
    id: 'Science',
    name: 'science',
  },
  {
    id: 'Sports',
    name: 'sports',
  },
  {
    id: 'Technology',
    name: 'technology',
  },
];

const HeadlinesScreen = () => {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState('business');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const resp = await fetch(
      `https://newsapi.org/v2/top-headlines/sources?category=${category}&sortBy=popularity&apiKey=3e245ce78beb481a825e7b08d1cff161`,
    );
    const data = await resp.json();
    console.log(data);
  };

  return (
    <View style={{flex: 1}}>
      {console.log(category)}
      <View
        style={{
          // backgroundColor: 'red',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginVertical: 2,
          }}>
          <Menu size={30} color={'black'} name="menu" />
          <Text style={styles.forYou}>Headlines</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Search
            name="search"
            size={30}
            color={'black'}
            style={{marginTop: 7}}
          />
          <Image
            source={require('../../assets/F1.jpg')}
            style={styles.avatar}
          />
        </View>
      </View>
      <View style={styles.line} />
      <FlatList
        horizontal
        data={categories}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Pressable onPress={setCategory(item.name)}>
            <View
              style={{
                backgroundColor: 'grey',
                height: 40,
                marginVertical: 10,
                justifyContent: 'center',
                width: 'auto',
                padding: 10,
              }}>
              <Text style={{fontWeight: '500'}}>{item.id}</Text>
            </View>
          </Pressable>
        )}
      />
      <FlatList
        data={news}
        renderItem={({item}) => <HeadlinesCard itemnews={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default HeadlinesScreen;

const styles = StyleSheet.create({
  avatar: {
    width: 44,
    height: 44,
    opacity: 1,
    borderRadius: 22,
    marginHorizontal: 15,
  },
  line: {
    width: 390,
    height: 0,
    borderWidth: 1,
    borderColor: '#F3F4F6FF',
    borderStyle: 'solid',
    marginVertical: 5,
  },
  forYou: {
    // font-family: IBM Plex Serif; /* Heading */
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 30,
    color: '#171A1FFF',
    marginHorizontal: 15,
  },
});
