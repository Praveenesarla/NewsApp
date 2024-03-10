import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Arrow from 'react-native-vector-icons/Ionicons';
import Bookmark from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import HeadlinesCard from '../components/HeadlinesCard';
const NewsListing = ({navigation, route}) => {
  const [searchResults, setSearchResults] = useState([]);
  const {searchKeyword} = route.params;

  useEffect(() => {
    console.log(searchKeyword);
    fetchData();
  }, []);

  const fetchData = async () => {
    const resp = await fetch(
      `https://newsapi.org/v2/everything?q=${searchKeyword}&language=en&apiKey=3e245ce78beb481a825e7b08d1cff161`,
    );
    const data = await resp.json();
    const articles = data.articles;
    const slicedData = articles.slice(0, 15);
    setSearchResults(slicedData);
  };

  return (
    <View style={{padding: 15, flex: 1}}>
      <View style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
        <Pressable onPress={() => navigation.goBack()}>
          <Arrow size={30} name="arrow-back" color={'black'} />
        </Pressable>
        <Text style={styles.text}>{searchKeyword}</Text>
      </View>
      <View
        style={{
          // backgroundColor: 'red',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 20,
        }}>
        <View>
          <Text style={styles.SearchText}>{searchKeyword}</Text>
          <Text style={styles.searchResults}>Search results</Text>
        </View>
        <Bookmark size={28} color={'black'} name="bookmark-outline" />
      </View>
      <View style={styles.line} />
      <FlatList
        contentContainerStyle={{marginBottom: 50}}
        data={searchResults}
        keyExtractor={item => item.article_id}
        renderItem={({item}) => <HeadlinesCard item={item} />}
      />
    </View>
  );
};

export default NewsListing;

const styles = StyleSheet.create({
  text: {
    //   font-family: Poppins; /* Body */
    fontSize: 18,
    fontWeight: '400',
    marginLeft: 15,
    lineHeight: 22,
    color: '#171A1FFF',
  },
  SearchText: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 30,
    color: '#171A1FFF',
  },
  searchResults: {
    //   font-family: Poppins; /* Body */
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 20,
    color: '#323842FF',
    marginLeft: 10,
  },
  /* Line 12 */
  line: {
    marginVertical: 5,
    width: 350,
    height: 1,
    borderwidth: 5,
    backgroundColor: '#EE6D33FF' /* primary-500 */,
    borderStyle: 'solid',
  },
});
