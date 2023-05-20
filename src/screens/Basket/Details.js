import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import Texto from '../../components/Texto';

export default function Details({ basketName, farmName, farmLogo, description, price, button}) {
  return <>
    <View>
      <Texto style={styles.name}>{ basketName }</Texto>
      <View style={styles.farm}>
        <Image source={farmLogo} style={styles.farmLogo} />
        <Texto style={styles.farmName}>{ farmName }</Texto>
      </View>
      <Texto style={styles.description}>{ description }</Texto>
      <Texto style={styles.price}>{ price }</Texto>
      <TouchableOpacity style={styles.button} onPress={() => {console.warn('pressed')}}>
        <Texto style={styles.buttonText}>{ button }</Texto>
      </TouchableOpacity>
    </View>
  </>
}

const styles = StyleSheet.create({
  name: {
    fontSize: 26,
    lineHeight: 42,
    color: '#464646',
    fontWeight: 'bold'
  },
  farm: {
    flexDirection: 'row',
    paddingVertical: 12
  },
  farmLogo: {
    width: 32,
    height: 32
  },
  farmName: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
    fontWeight: 'bold'
  },
  description: {
    color: '#A3A3A3',
    fontSize: 16,
    lineHeight: 26
  },
  price: {
    color: '#2A9F85',
    fontWeight: 'bold',
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8
  },
  button: {
    marginTop: 16,
    paddingVertical: 16,
    borderRadius: 6,
    backgroundColor: '#2A9F85'
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 16,
    lineHeight: 26,
    fontWeight: 'bold'
  }
});