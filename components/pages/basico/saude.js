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
            <Text style={estilo.titulo}>Saúde</Text>
            <Text style={estilo.texto}>
              A Saúde (Inglês: Health) é medida por uma barra ao lado da barra
              de Energia do jogador, no canto direito inferior da interface do
              usuário (UI). A Barra de Vida somente é visível quando o jogador
              está dentro da Mina ou quando não está cheia a saúde. Do lado de
              fora da Mina, a única maneira de perder saúde é ser atingido pelo
              trem na Ferrovia, pelas gosmas no Bosque Secreto, pelas gosmas na
              Casa de gosmas ou na Caverna do Vulcão. Alguns jogadores podem
              escolher o Fazenda Remota, ou oferecer um Pão estranho para o
              Templo Negro dos Terrores Noturnos, na cabana da bruxa para
              habilitar o aparecimento de monstros na fazenda, que vão causar
              dano ao jogador. A Saúde pode ser recuperada não só ao consumir
              comida como também ao dormir, utilizar o Spa e comer
              Frutas-estrela. No modo multijogador, a Saúde e a Energia podem
              ser recuperadas por ficar deitado na cama sem selecionar a opção
              de dormir. A capacidade de saúde máxima é aumentada em 5 para cada
              nível ganho na habilidade de Combate do jogador, e pode ser
              ampliada ao escolher as profissões Lutador e Defensor na árvore de
              habilidades de Combate. Encontrando o Recado Secreto #10 e
              chegando ao nível 100 da Caverna da Caveira, o jogador verá uma
              cena onde o Mr. QI dá ao jogador um "Leite de cobra de irídio",
              que aumenta a saúde do jogador permanentemente em 25 pontos. Uma
              vez que a saúde do jogador chega a zero, ele desmaiará. Depois,
              será acordado por ou Clint, ou Linus, ou Maru, ou Robin, ou
              Harvey, dependendo de quem possui maior amizade. Você pode ser
              acordado na entrada da mina, em sua cama, ou na Clínica do Harvey,
              a depender de quem te acordar. O jogador que desmaiar dentro da
              Caverna da Caveira acordará dentro do hospital. Quando ficar
              inconsciente, o jogador perderá dinheiro, itens e seu progresso
              atual. Você só consegue recuperar um item com o serviço de
              recuperação de itens falando com o Marlon na Guilda dos
              Aventureiros, então é uma boa ideia manter seus itens valiosos num
              baú enquanto for explorar. A quantia de dinheiro perdida é
              definida pela quantia que você tinha no momento que desmaiou.
              Pode-se perder até Gold.png5 000 ouros (na versão 1.06) durante o
              período de inconsciência. Se o jogador desmaiar dentro da Mina, os
              elevadores de checkpoint serão perdidos e o jogador terá de
              reativá-los.
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
