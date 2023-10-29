import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';

export default function Pelicanos() {
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
            <Text style={estilo.titulo}>Pelicanos</Text>
            <Text style={estilo.texto}>
              Vila Pelicanos é para onde o jogador se move no início do jogo,
              localizado em Stardew Valley. Vila Pelicanos é onde a maioria dos
              moradores vive, trabalha e socializa. Lewis é o prefeito da Vila
              Pelicanos e tem sido por muitos anos; Ele comenta que ele não teve
              concorrência para o papel desde que se tornou prefeito. A entrada
              noroeste da cidade liga-se ao Ponto de Ônibus e à Fazenda. A
              passagem do sudoeste conecta-se à Floresta Cinzaseiva, que contem
              o Rancho da Marnie, a Cabana da Leah, e a Torre do mago.
              Diretamente ao sul da cidade é A Praia. O norte da cidade
              conecta-se A Montanha, com a Carpintaria da Robin, As Minas, a
              Guilda dos Aventureiros, a Ferrovia, e a Pedreira.
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
