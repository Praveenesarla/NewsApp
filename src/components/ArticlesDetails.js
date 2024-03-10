import {
  Alert,
  Button,
  Image,
  Linking,
  Pressable,
  Share,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useCallback} from 'react';
import Close from 'react-native-vector-icons/AntDesign';
import ShareIcon from 'react-native-vector-icons/Octicons';
import Options from 'react-native-vector-icons/SimpleLineIcons';
import {useNavigation} from '@react-navigation/native';

const ArticlesDetails = ({route}) => {
  const navigation = useNavigation();
  const {article} = route.params;

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  const OpenURLButton = ({url, children, style}) => {
    const handlePress = useCallback(async () => {
      await Linking.openURL(url);
    }, [url]);

    return <Button title={children} onPress={handlePress} />;
  };

  return (
    <View style={{padding: 15}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 18,
        }}>
        <Pressable onPress={() => navigation.goBack()}>
          <Close name="close" size={28} color="black" />
        </Pressable>

        <Text>{article.source.name}</Text>
        <View style={{flexDirection: 'row'}}>
          <Pressable onPress={onShare}>
            <ShareIcon
              size={25}
              color="black"
              name="share"
              style={{marginRight: 14}}
            />
          </Pressable>
          <Options size={25} color="black" name="options" />
        </View>
      </View>
      <View style={styles.line} />
      <View>
        <View style={styles.tag}>
          <Text>SPORT</Text>
        </View>
        <Text numberOfLines={2} style={styles.title}>
          {article.title}
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.author}>
            By{' '}
            <Text style={{textDecorationStyle: 'dashed'}}>
              {article.author}
            </Text>{' '}
          </Text>
          <Text>{article.publishedAt}</Text>
        </View>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 15,
        }}>
        <Image src={article.urlToImage} style={styles.image} />
        <Text style={styles.imageText}>{article.title}</Text>
      </View>
      <View>
        <Text style={styles.description}>{article.content}</Text>
      </View>
      <View style={{marginTop: 80}}>
        <OpenURLButton url={article.url}>
          Click to View Full Article
        </OpenURLButton>
      </View>
    </View>
  );
};

export default ArticlesDetails;

const styles = StyleSheet.create({
  line: {
    width: 390,
    height: 0,
    borderWidth: 1,
    borderColor: '#F3F4F6FF',
    borderStyle: 'solid',
    marginVertical: 10,
  },
  /* Tag 9 */
  tag: {
    borderColor: 'black',
    borderWidth: 1,
    width: 51,
    height: 24,
    alignItems: 'center',
    justifyContent: 'space-between',
    // font-family: Poppins; /* Body */
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 18,
    opacity: 1,
  },
  title: {
    marginVertical: 15,
    width: 350,
    // font-family: IBM Plex Serif; /* Heading */
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 36,
    color: '#171A1FFF',
  },
  author: {
    // font-family: Poppins; /* Body */
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
    color: '#323842FF',
  },
  /* Image 30 */
  image: {
    width: '100%',
    height: 220,
    borderRadius: 4 /* border-m */,
  },
  imageText: {
    width: 350,
    // font-family: Poppins; /* Body */
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 20,
    color: '#9095A0FF' /* neutral-500 */,
  },
  description: {
    width: 350,
    // font-family: Poppins; /* Body */
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
    color: '#323842FF' /* neutral-700 */,
  },
  button: {
    marginTop: 'auto',
  },
});
