// WelcomeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.parteBranca}>
        <View style={styles.header}>
          <Image
            source={require('./assets/logo.png')}
            style={styles.image}
          />

          <Text style={styles.app}>Streamify</Text>
        </View>
        <Text style={styles.title1}>Bem-vindo!</Text>
        <Text style={styles.title}>Veja vídeos do YT e Vimeo, com a melhor experiência possível.</Text>
        <View style={styles.imagemPrincipal}>
          <Image
            source={require('./assets/imagem.gif')}
            style={styles.imagem}
          />
        </View>

      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tabs')}>
          <Text style={styles.buttonText}>Ir para Pesquisa</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    height: '100%'
  },
  title1: {
    paddingTop: 15,
    fontWeight: '500',
    fontSize: 21,
    width: 340
  },
  title: {
    paddingTop: 10,
    fontWeight: '400',
    fontSize: 19,
    width: 340,
  },
  parteBranca: {
    backgroundColor: '#fff',
    height: '80%',
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    paddingStart: '10%',
    paddingEnd: '10%',
    paddingTop: '12%',
  },
  image: {
    width: 63,
    height: 63
  },
  imagem: {
    width: 250,
    height: 250
  },
  imagemPrincipal: {
    paddingTop: 27,
    alignItems: 'center'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  app: {
    fontSize: 19,
    fontWeight: '700'
  },
  button: {
    backgroundColor: '#fff',
    height: 52,
    width: '100%',
    borderRadius:13,
    justifyContent:'center',
    alignItems:'center'
  },
  buttonText:{
    fontSize:18,
    fontWeight:'700'
  },
  containerButton: {
    padding:'10%',
    paddingStart: '12%',
    paddingEnd: '12%',
  }
});
