import React from 'react';
import {Text, View, Image, ScrollView, TextInput} from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <Text > Erica Compania </Text>
        <View
        style={{
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Text> IT 302 ADVANCE MOBILE </Text>
        <Image
        source={{
          uri: 'https://th.bing.com/th/id/R.68cf9eeb816abd9f914cfa9360a5fb8b?rik=slrVKTwyYC91JA&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2fb%2fb2%2fUS_Navy_080730-N-5277R-003_A_Commander%2c_Naval_Forces_Japan_firefighter_douses_a_fire_on_a_dummy_aircraft_during_the_annual_off-station_mishap_drill_at_Naval_Support_Facility_Kamiseya.jpg&ehk=c4pPMU5tJIoHaZnLcp4SHUPH3BZvU8EokACgmdDQPrk%3d&risl=1&pid=ImgRaw&r=0',
        }}
        style={{width: 200, height: 200}}
        />
      </View>
      <TextInput
      style={{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      defaultValue="You can type me in"
    />
    </ScrollView>
  );
};

export default App;
