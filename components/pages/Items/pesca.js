import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';

export default function Pesca() {
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
            <Text style={estilo.titulo}>Pesca</Text>
            <Text style={estilo.texto}>
              Peixes podem ser capturados em oceanos, lagos, rios e certos
              locais subterrâneos. A maioria dos peixes pode ser capturada com
              Varas de Pesca. Os outros exigem Covos para capturar. Alguns
              peixes aparecem apenas em certas horas do dia, durante certas
              estações ou climas específicos. Ao pegar um peixe, o nome do peixe
              e seu comprimento são exibidos. Os jogadores podem acompanhar
              quantos peixes pescaram e seus comprimentos recordes em seu Menu
              de Coleções. Peixes podem ser usados ​​como ingredientes na
              Culinária e são necessários para restaurar o Aquário no Centro
              Comunitário. Embora os jogadores possam pescar perto de qualquer
              corpo de água, alguns lugares têm taxas de sucesso mais baixas.
              Estas áreas são mais propensas a produzir lixo, a maioria dos
              quais pode ser transformada em itens úteis usando a Máquina de
              reciclagem, desbloqueada com nível 4 em Pesca. Todos os peixes
              podem ser capturados independentemente do clima, hora ou estação
              usando Isca Mágica.
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
