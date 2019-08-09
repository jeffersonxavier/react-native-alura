/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';

const App = () => {
  const photos = [
    { id: 1, name: 'Fulano' },
    { id: 2, name: 'Siclano' },
  ];

  return (
    <Fragment>
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={photos}
        renderItem={({item}) =>
          <View>
            <Text>{item.name}</Text>
            <Image
              style={{width: Dimensions.get('window').width, height: Dimensions.get('window').width}}
              source={{uri: 'https://www.alura.com.br/assets/api/cursos/512/react-native-parte-2.png'}}
            />
          </View>
        }
      />
    </Fragment>
  );
};

export default App;
