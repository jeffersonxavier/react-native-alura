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
  FlatList,
} from 'react-native';
import Post from './components/Post';

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
          <Post name={item.name}/>
        }
      />
    </Fragment>
  );
};

export default App;
