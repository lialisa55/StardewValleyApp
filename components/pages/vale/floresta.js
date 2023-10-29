import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';

export default function Floresta() {
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
            <Text style={estilo.titulo}>Floresta</Text>
            <Text style={estilo.texto}>
              Floresta Cinzaseiva é a área localizada ao sul da Casa da Fazenda,
              e inclui o Carrinho de Viagem, a Torre do mago, a Casa Arruinada,
              a Cabana da Leah, e o Rancho da Marnie. Tem saídas ao norte até a
              fazenda, no leste até a Vila Pelicanos, ao sul até Os Esgotos, e
              ao noroeste até o Bosque Secreto. Como esperado, a Floresta
              Cinzaseiva contém uma grande variedade de Árvores. Essas árvores
              se comportam normalmente, mas não precisam ser replantadas depois
              de terem sido cortadas: uma nova Árvore reaparecerá em seu lugar
              dentro do tempo médio que leva uma Árvore a crescer. Durante o
              início da Primavera (nos dias 1-14) você pode encontrar Cebolinha
              sobre os pontos de terra no sudeste do mapa, perto dos esgotos.
              Aqueles são uma fonte de energia realmente útil quando o jogador
              está começando um jogo novo.
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
