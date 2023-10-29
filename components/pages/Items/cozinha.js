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
            <Text style={estilo.titulo}>Cozinha</Text>
            <Text style={estilo.texto}>
              Cozinhar é um mecanismo do jogo que se torna disponível depois de
              atualizar a Casa da Fazenda pela primeira vez. A melhoria da casa
              adiciona uma cozinha, que inclui um fogão e uma geladeira. O fogão
              é a interface da cozinha, enquanto o refrigerador fornece 36
              espaços de armazenamento, semelhante a um baú. A geladeira é a
              única que é diretamente ligada à interface de cozinha, como se
              fosse uma extensão do inventário do jogador. Somente ingredientes
              no inventário do jogador ou na geladeira são vistos como itens
              utilizáveis para uma receita. O jogador deve aprender cada receita
              antes de ser desbloqueada para cozinhar. As receitas bloqueadas
              são exibidas como uma silhueta preta do ícone da receita, com uma
              descrição de dica que diz "???". Os ícones de receita
              desbloqueadas aparecerão acinzentados se algum dos ingredientes
              estiver faltando, mas a dica de ferramenta fornecerá informações
              sobre a receita. Qualquer ingrediente ausente será destacado em
              vermelho. Se todos os ingredientes necessários para uma receita
              estiverem presentes no inventário do jogador ou na geladeira (ou
              uma combinação dos dois), o ícone da receita ficará totalmente
              destacado.
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
