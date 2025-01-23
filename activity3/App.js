import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const BoldAndBeautiful = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <Text style={styles.baseText}>
        Erica
        <Text style={styles.innerText}> Compania </Text>
      </Text>
       <Text style={styles.baseText}>
        "You will face many defeats in life,
        <Text style={styles.innerText}>  but never let yourself be defeated." </Text>
      </Text>
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  baseText: {
    fontWeight: 'Bold',
    fontFamily: 'Conchin',
    textAlign: 'Center',
    fontSize: 25,
  },
  innerText: {
    color: 'red',
  },
});

export default BoldAndBeautiful;
