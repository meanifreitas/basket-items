import React from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';

import Texto from './../../components/Texto';
import top from '../../../assets/topo.png';


export default function Top({ title }) {
  return <>
  <Image source={top} style={styles.top} />
  <Texto style={styles.title}>{ title }</Texto>
  </>
}

const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  top: {
    width: '100%',
    height: 578 / 768 * width,
  },
  title: {
    position: 'absolute',
    textAlign: 'center',
    width: '100%',
    fontSize: 16,
    lineHeight: 26,
    color: 'white',
    fontWeight: 'bold',
    padding: 16
  }
});