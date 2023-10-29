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
            <Text style={estilo.titulo}>Energia</Text>
            <Text style={estilo.texto}>
              Um jogador precisa de Energia para usar ferramentas, pescar ou
              entrar em combate. A energia atualmente disponível está refletida
              na barra de energia do jogador, no canto inferior direito, que
              reflete a diminuição da energia enquanto o dia passa. A energia
              pode ser reabastecida para seu máximo ao comer comidas que dão
              energia positiva. Consumir itens que dão energia negativa como a
              Seiva reduz a energia do jogador. Para consumir comida, coloque-a
              na hotbar e pressione o Botão direito do mouse com ela na mão. Uma
              notificação aparecerá no canto inferior esquerdo da tela mostrando
              a energia e saúde ganha ao comer essa comida. Normalmente, comidas
              mais caras providenciam mais energia do que comidas mais baratas.
              Ficar no Spa também restaura energia. Em um jogo multijogador,
              jogadores podem restaurar energia lentamente ao deitar na cama sem
              dormir.
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
