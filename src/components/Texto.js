import React from 'react';
import { StyleSheet, Text } from 'react-native';


export default function Texto({ children, style }) {
  let estilo = styles.text;

  if (style?.fontWeight == 'bold') {
    estilo = styles.boldText;
  }

  return <Text style={[style, estilo]}>{ children }</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'MontserratRegular',
    fontWeight: 'normal'
  },
  boldText: {
    fontFamily: 'MontserratBold',
    fontWeight: 'normal'
  }
});