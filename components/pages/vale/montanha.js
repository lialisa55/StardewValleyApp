import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';

export default function Montanha() {
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
            <Text style={estilo.titulo}>Montanha</Text>
            <Text style={estilo.texto}>
              A Montanha É a região localizada ao norte da Vila Pelicanos. Para
              o oeste é uma saída para o Bosque, uma rota que liga a fazenda. E
              ao Sul temos uma passagem que liga a Vila Pelicanos, no início do
              jogo essas são as duas únicas saídas disponíveis nessa área, porém
              ao decorrer da jogatina, diversos eventos ocorrem nesse local que
              liberam outras passagens: No dia 5 da Primavera, a pedra presente
              na ponte é removida, dando acesso as Minas e a Guilda dos
              Aventureiros No dia 3 do Verão, um terremoto abre uma passagem ao
              Norte para a Ferrovia A ponte que leva a Pedreira pode ser
              reparada. (completando um conjunto no centro comunitário ou por
              Gold.png25 000 ouros na Joja). A pedra brilhante na frente da
              ponte que leva as Minas pode ser retirada. (completando um
              conjunto no centro comunitário ou por Gold.png20 000 ouros na
              Joja).
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
