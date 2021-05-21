import React from 'react';
import { View, Text, Button } from 'react-native';

export default ({ navigation }) => (
  <View>
    <Text>This Tab is about the Movies.</Text>
    <Button title='Movie' onPress={() => navigation.navigate('Detail')} />
  </View>
);
