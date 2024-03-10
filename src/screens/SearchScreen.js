import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import Arrow from 'react-native-vector-icons/Ionicons';
import SearchHistory from '../components/SearchHistory';
import Search from 'react-native-vector-icons/Ionicons';

const SearchScreen = ({navigation}) => {
  const [searchKeyword, setSearchKeyword] = useState('');
  return (
    <View>
      <View style={styles.textbox}>
        <Pressable onPress={() => navigation.navigate('Tab')}>
          <Arrow size={30} name="arrow-back" color={'black'} />
        </Pressable>

        <TextInput
          style={styles.textboxInput}
          placeholder="Search"
          value={searchKeyword}
          onChangeText={t => setSearchKeyword(t)}
        />
        <Pressable
          onPress={() => navigation.navigate('NewsList', {searchKeyword})}>
          <Search size={43} color={'black'} name="search-circle" />
        </Pressable>
      </View>
      <SearchHistory />
      <View style={styles.line} />
      <Text style={styles.Topictext}>Topics</Text>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  /* Textbox 2 */
  textbox: {
    alignItems: 'center',
    padding: 10,
    opacity: 1,
    flexDirection: 'row',
    marginTop: 20,
  },
  textboxInput: {
    width: 330,
    height: 44,
    paddingLeft: 16,
    paddingRight: 16,
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 26,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#9095A0FF' /* neutral-500 */,
  },
  line: {
    width: 390,
    height: 0,
    borderWidth: 4,
    borderColor: '#F3F4F6FF' /* neutral-200 */,
    borderStyle: 'solid',
  },
  Topictext: {
    //   font-family: IBM Plex Serif; /* Heading */
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 22,
    color: '#323842FF',
    marginLeft: 15,
  },
});
