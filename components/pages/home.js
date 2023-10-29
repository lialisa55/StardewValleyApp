import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';

export default function Home() {
  return (
    <View style={estilo.container}>
      <ImageBackground
        style={estilo.imgbackGround}
        resizeMode="cover"
        source={require('../../assets/StardewValleyBackGround.jpeg')}></ImageBackground>
      <ScrollView>
        <View>
          <Image
            style={estilo.imgTitulo}
            source={require('../../assets/titulo.png')}></Image>

          <View style={estilo.conteudo}>
            <Text style={estilo.titulo}>Sobre</Text>
            <Text style={estilo.texto}>
              Stardew Valley é um RPG sem fim da vida no campo! Você herdou a
              antiga fazenda de seu avô no Vale do Orvalho. Equipado com
              ferramentas de segunda mão e algumas moedas, você irá começar sua
              nova vida. Será que você consegue aprender a viver da terra e
              transformar esses campos absurdamente vegetados em uma casa
              próspera? Não vai ser fácil. Desde que Corporação Joja veio à
              cidade, os antigos modos de vida quase desapareceram. O Centro
              Comunitário, uma vez o lugar mais visitado da cidade, agora está
              em ruínas. Mas o vale parece cheio de oportunidades. Com um pouco
              de dedicação, você pode ser a pessoa que restaurará a grandeza do
              Vale do Orvalho!
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
