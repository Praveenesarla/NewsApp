import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const CarouselCard = ({item}) => {
  // console.log('item ------->', item);
  const navigation = useNavigation();
  const {urlToImage} = item;
  console.log(item);
  return (
    <Pressable onPress={() => navigation.navigate('Detail', {article: item})}>
      <View style={styles.container}>
        <Image style={styles.image} src={urlToImage} />
        <View style={{padding: 7, justifyContent: 'space-evenly'}}>
          <Text style={styles.title}>{item.author}</Text>
          <Text numberOfLines={1.5} style={styles.description}>
            {item.content}
          </Text>
          <Text style={styles.time}>{item.publishedAt}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default CarouselCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    // marginLeft: 18,
    width: 400,
    height: 336,
    borderRadius: 15,
  },
  image: {
    width: 360,
    height: 200,
    borderRadius: 4 /* border-m */,
  },
  title: {
    //   font-family: Poppins; /* Body */
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 20,
    color: '#6E7787FF' /* neutral-550 */,
  },
  description: {
    width: 350,
    // font-family: IBM Plex Serif; /* Heading */
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 26,
    color: '#171A1FFF' /* neutral-900 */,
  },
  time: {
    // font-family: Poppins; /* Body */
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 20,
    color: '#9095A0FF',
  },
});
