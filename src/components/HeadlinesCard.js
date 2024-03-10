import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const HeadlinesCard = ({item}) => {
  const {urlToImage, content} = item;
  const navigation = useNavigation();
  return (
    <>
      {urlToImage && content && (
        <Pressable
          onPress={() => navigation.navigate('Detail', {article: item})}>
          <View style={styles.highlightContainer}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <View>
                <Text style={styles.url}>{item.author}</Text>
                <Text numberOfLines={2} style={styles.description}>
                  {item.content}
                </Text>
              </View>
              <Image src={item.urlToImage} style={styles.image} />
            </View>
            <Text style={styles.TimeText}>2h ago</Text>
            {/* <View style={styles.line} /> */}
          </View>
        </Pressable>
      )}
    </>
  );
};

export default HeadlinesCard;

const styles = StyleSheet.create({
  highlightContainer: {
    justifyContent: 'center',
    elevation: 6,
    backgroundColor: 'white',
    width: 384,
    height: 140,
    background: '#FFFFFFFF',
    borderRadius: 6,
    marginVertical: 5,

    // padding: 8,
  },
  url: {
    // top: 0,
    // left: 0,
    //   font-family: Poppins; /* Body */
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 20,
    color: '#6E7787FF' /* neutral-550 */,
  },
  description: {
    width: 242,
    height: 52,
    //   font-family: IBM Plex Serif; /* Heading */
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 26,
    color: '#171A1FFF',
  },
  /* Image 9 */
  image: {
    width: 84,
    height: 84,
    borderRadius: 4 /* border-m */,
  },
  TimeText: {
    //   font-family: Poppins; /* Body */
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 20,
    color: '#9095A0FF' /* neutral-500 */,
    paddingLeft: 10,
  },
  /* Line 4 */
  line: {
    width: '100%',
    height: 0,
    borderWidth: 1,
    borderColor: 'gray',
    borderStyle: 'solid',
  },
});
