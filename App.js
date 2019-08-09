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
        style={styles.container}
        keyExtractor={item => item.id.toString()}
        data={photos}
        renderItem={({item}) =>
          <View>
            <View style={styles.cabecalho}>
              <Image
                style={styles.fotoDePerfil}
                source={{uri: 'https://www.alura.com.br/assets/api/cursos/512/react-native-parte-2.png'}}
              />
              <Text>{item.name}</Text>
            </View>
            <Image
              style={styles.foto}
              source={{uri: 'https://www.alura.com.br/assets/api/cursos/512/react-native-parte-2.png'}}
            />
          </View>
        }
      />
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
      marginTop: 20,
  },
  cabecalho: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  fotoDePerfil: {
    marginRight: 10,
    borderRadius: 20,
    width:40,
    height:40,
  },
  foto: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
  },
});

export default App;
