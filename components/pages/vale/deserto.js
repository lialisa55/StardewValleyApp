import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';

export default function Deserto() {
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
            <Text style={estilo.titulo}>Deserto</Text>
            <Text style={estilo.texto}>
              O Deserto Calico está localizado muito ao noroeste da Vila
              Pelicanos. Não é acessível até que o ônibus no Ponto de Ônibus
              tenha sido reparado completando os Conjuntos do cofre no Centro
              Comunitário ou comprando o Reparo do Ônibus por Gold.png40 000
              ouros do Formulário de Melhorias Comunitárias Joja. Uma vez
              reparado, Pam retornará ao trabalho como a motorista do ônibus. Um
              bilhete para transportar o ônibus para o deserto custa Gold.png500
              ouros cada vez, embora a viagem de volta seja gratuita. Os
              bilhetes só podem ser comprados quando Pam estiver presente no
              ônibus (10:10 - 17:00). Os cocos e frutos do cacto podem ser
              encontrados em toda a área, juntamente com uma série de Árvores
              cortáveis. Elas não possuem itens especiais, no entanto, e as
              Torneirinhas não possuem itens também.
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
