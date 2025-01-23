import React, {useState} from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const TextInANest = () => {
  const [titleText, setTitleText] = useState("Erica");
  const bodyText = '';

  const onPressTitle = () => {
    setTitleText("Erica [Compania]");
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.baseText}>
          <Text style={styles.titleText} onPress={onPressTitle}> 
            {titleText}
            {'\n'}
            {'\n'}
          </Text>
          <Text numberOfLines={5}>{bodyText}</Text>
        </Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
 const styles = StyleSheet. create({
   container: {
     flex: 1,
   },
   baseText: {
     fontFamily: 'Conchin',
     textAlign: 'Center'
   },
   titleText: {
     fontSize: 20,
     fontWeight: 'bold',
   },
});

export default TextInANest;
