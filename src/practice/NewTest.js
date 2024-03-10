import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const NewTest = () => {
  const [name, setName] = useState('Praveen');

  const time = () => {
    setTimeout(() => {
      setName('Praveen');
    }, 6000);
  };
  return (
    <View>
      <Text style={{backgroundColor: 'red'}}>{name}</Text>
      <Button title="Click Me" onPress={time} />
    </View>
  );
};

export default NewTest;

const styles = StyleSheet.create({});
