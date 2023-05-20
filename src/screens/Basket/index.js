import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import Top from './Top';
import Details from './Details';
import Item from './Item';
import Texto from '../../components/Texto';

export default function Basket({ top, details, items }) {
  return <>
    <FlatList 
      data={items.list}
      renderItem={Item}
      keyExtractor={({ name }) => name}
      ListHeaderComponent={() => {
        return <>
          <Top {...top }/>
          <View style={styles.basket}>
            <Details {...details }/>
            <Texto style={styles.title}>{ items.title }</Texto>
          </View>
        </>
      }}
    />
  </>
}

const styles = StyleSheet.create({
  basket: {
    paddingVertical: 8,
    paddingHorizontal: 16
  },
  
  title: {
    color: '#464646',
    fontWeight: 'bold',
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32
  },
});