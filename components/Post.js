/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';

export default class Post extends Component {
  render() {
    return (
      <View>
        <View style={styles.cabecalho}>
          <Image
            style={styles.fotoDePerfil}
            source={{uri: 'https://www.alura.com.br/assets/api/cursos/512/react-native-parte-2.png'}}
          />
          <Text>{this.props.name}</Text>
        </View>
        <Image
          style={styles.foto}
          source={{uri: 'https://www.alura.com.br/assets/api/cursos/512/react-native-parte-2.png'}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
