// eslint-disable-next-line prettier/prettier
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import History from 'react-native-vector-icons/Ionicons';
import Delete from 'react-native-vector-icons/MaterialCommunityIcons';

const fakeHistory = [
  {
    id: 1,
    keyWord: 'mortgage interest rate',
  },
  {
    id: 2,
    keyWord: 'mortgage interest rate',
  },
  {
    id: 3,
    keyWord: 'mortgage interest rate',
  },
];

const HistoryCard = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10,
        marginRight: 8,
      }}>
      <History size={30} color={'#9095A0FF'} name="time-outline" />
      <Text style={styles.text}>mortgage interest rate</Text>
      <Delete size={30} color={'#9095A0FF'} name="delete" />
    </View>
  );
};
const SearchHistory = () => {
  return (
    <>
      <HistoryCard />
      <HistoryCard />
      <HistoryCard />
    </>
  );
};

export default SearchHistory;

const styles = StyleSheet.create({
  text: {
    //   font-family: Poppins; /* Body */
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 22,
    color: 'black' /* neutral-700 */,
  },
  /* Line 8 */
});
