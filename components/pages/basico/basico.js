import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default function Basico(props) {
  return (
    <View style={estilo.container}>
      <ImageBackground
        style={estilo.imgbackGround}
        resizeMode="cover"
        source={require('../../../assets/StardewValleyBackGround.jpeg')}></ImageBackground>
      <ScrollView>
        <View>
          <Image
            style={estilo.imgTitulo}
            source={require('../../../assets/titulo.png')}></Image>
          <View style={estilo.conteudo}>
            <TouchableOpacity style={estilo.botao} onPress={() => {
              props.navigation.navigate('Saude');
            }}>
              <Image style={estilo.btnImg} source={require('../../../assets/saudeIcon.png')}></Image>
              <Text style={estilo.btnTitle}>Saúde</Text>
            </TouchableOpacity>
            <TouchableOpacity style={estilo.botao} onPress={() => {
              props.navigation.navigate('Energia');
            }}>
              <Image style={estilo.btnImg} source={require('../../../assets/energiaIcon.png')}></Image>
              <Text style={estilo.btnTitle}>Energia</Text>
            </TouchableOpacity>
            <TouchableOpacity style={estilo.botao} onPress={() => {
              props.navigation.navigate('Npcs');
            }}>
              <Image style={estilo.btnImg} source={require('../../../assets/AldeoesIcon.png')}></Image>
              <Text style={estilo.btnTitle}>Aldeões</Text>
            </TouchableOpacity>
            <TouchableOpacity style={estilo.botao} onPress={() => {
              props.navigation.navigate('Player');
            }}>
              <Image style={estilo.btnImg} source={require('../../../assets/playerIcon.png')}></Image>
              <Text style={estilo.btnTitle}>O Jogador</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const estilo = StyleSheet.create({
  container:{
    height: '100%',
  },
  imgTitulo: {
    marginTop: 50,
    marginBottom: 40,
    width: 325,
    height: 150,
    zIndex: 1,
    alignSelf: 'centre',
  },
  imgbackGround: {
    width: 400,
    height: 1060,
    flex: 1,
  },
  titulo: {
    backgroundColor: '#00FF00',
    padding: 5,
    textAlign: 'center',
    marginBottom: 10,
    borderStyle: 'dotted',
    fontSize: 20,
  },
  texto: {
    padding: 10,
    textAlign: 'justify',
    fontSize: 20,
    marginBottom: 20,
  },
  conteudo: {
    margin: 20,
    backgroundColor: 'rgba(250, 250, 250, 0.6)',
  },
  botao: {
    margin: 10,
    alignItems: 'center',
    backgroundColor: 'rgba(234, 187, 37, 0.6)',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  btnTitle: {
    padding: 10,
    textAlign: 'justify',
    fontSize: 25,
  },
  btnImg: {
    width: 40,
    height: 40,
  }
});
