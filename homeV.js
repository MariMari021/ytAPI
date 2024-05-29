import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, ScrollView, KeyboardAvoidingView } from 'react-native';
import { WebView } from 'react-native-webview';
import { buscarVideosVimeo } from './vimeo';

export function HomeV() {
  const [pesquisa, setPesquisa] = useState('');
  const [videos, setVideos] = useState([]);
  const [pesquisaRealizada, setPesquisaRealizada] = useState(false);

  const pesquisar = async () => {
    try {
      const resultados = await buscarVideosVimeo(pesquisa);
      setVideos(resultados);
      setPesquisaRealizada(true);
    } catch (erro) {
      console.error('Erro ao pesquisar vídeos do YouTube:', erro);
    }
  };

  return (
    <KeyboardAvoidingView style={estilos.container}>
      <View style={estilos.tituloContainer}>
        <Text style={estilos.titulo1}>Acesse os vídeos do <Text style={estilos.subtitulo}>Vimeo</Text>  aqui!</Text>
        <Text style={estilos.titulo2}>De modo facilitado para você.</Text>
      </View>
      <View style={estilos.containerPesquisa}>
        <TextInput
          style={estilos.entrada}
          placeholder="Digite sua pesquisa"
          value={pesquisa}
          onChangeText={setPesquisa}
        />
        <TouchableOpacity style={estilos.botao} onPress={pesquisar}>
          <Text style={estilos.textoBotao}>Pesquisar</Text>
        </TouchableOpacity>
      </View>
      {pesquisaRealizada ? (
        <ScrollView style={estilos.scrollView}>
          {videos.map(video => (
            <View key={video.uri} style={estilos.containerVideo}>
              <Text style={estilos.tituloVideo}>{video.name}</Text>
              <WebView
                style={estilos.webview}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                source={{ html: `<iframe width="100%" height="100%" src="https://player.vimeo.com/video/${video.uri.split('/').pop()}" frameborder="0" allowfullscreen></iframe>` }}
              />
            </View>
          ))}
        </ScrollView>
      ) : (
        <View style={estilos.containerTexto}>
          <Text style={estilos.texto}>Pesquise acima para encontrar vídeos do Vimeo.</Text>
        </View>
      )}
    </KeyboardAvoidingView>
  );
}


const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 50,
  },
  subtitulo: {
    color: '#1AB7EA',
  },
  containerTexto: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50
  },
  texto: {
    fontSize: 22,
    fontWeight: '400',
    textAlign: 'center'

  },
  containerPesquisa: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#000',
    borderRadius: 8,
    margin: 20,
  },
  entrada: {
    height: 40,
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 4,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  botao: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
  },
  textoBotao: {
    color: '#000',
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  containerVideo: {
    marginBottom: 20,
    backgroundColor: '#000',
    borderRadius: 8,
    padding: 22,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tituloVideo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white'
  },
  webview: {
    width: '100%',
    aspectRatio: 16 / 9,
  },
  tituloContainer: {
    paddingTop: 25,
    paddingStart: 25,
    paddingEnd: 25
  },
  titulo1: {
    fontWeight: '800',
    fontSize: 25
  },
  titulo2: {
    fontWeight: '500',
    fontSize: 20
  }
});