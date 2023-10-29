import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';

export default function Saude() {
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
            <Text style={estilo.titulo}>Ferramentas</Text>
            <Text style={estilo.texto}>
              Ferramentas lhe ajudam a fazer muitas coisas. Você pode
              carregá-las com você em seu inventário para serem usadas, ou
              armazená-las em um baú quando não são necessárias de imediato.
              Você pode melhorar suas ferramentas no Ferreiro pagando moedas e
              barras de metal. O processo de melhoramento leva dois dias para
              estar completo. Durante o melhoramento, você não poderá comprar
              nada nem pedir para Clint abrir geodos. As ferramentas precisam
              ser melhoradas para materiais em uma ordem. Ferramentas de cobre
              não podem ser melhoradas diretamente para ferramentas de iridio
              por exemplo.
            </Text>
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
});
