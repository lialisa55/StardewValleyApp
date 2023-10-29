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
            <Text style={estilo.titulo}>O jogador</Text>
            <Text style={estilo.texto}>
              Quando se inicia um novo jogo, é solicitado a criação de personagem, entre as opções pode se escolher:

Aparência. Inclui 24 tons de pele, 56 penteados, 112 camisas, 4 calças e 20 acessórios. Todas elas podem ser usadas por ambos os gêneros, e também sendo possível escolher a aparência aleatoriamente. Ela não tem nenhum efeito no jogo e pode ser alterada na Torre do mago e é possível incrementá-la com chapéus e calçados.
Nome / Nome da Fazenda. Eles são usados em diálogos algumas vezes. São limitados a maioria dos Sinais gráficos da ASCII (do inglês American Standard Code for Information Interchange; Código Padrão Americano para o Intercâmbio de Informação), que são espaços, caixa alta e caixa baixa, números e ~!@#$%^&*()-=+[]}\|;:,.>/?_. O tamanho do nome é determinado pelo número total da largura de pixeis, e o máximo permitido é restrito a largura da caixa de texto. (Embora  está na lista de sinais gráficos, ou imprimíveis, da ASCII, a caixa de texto parece não aceitar esse caractere.)
Animal Favorito. Determina o tipo de gato ou cachorro que será recebido ao dia 12 da Primavera do ano 1.
Coisa Favorita. Isso afeta o texto exibido depois de comer uma Fruta-estrela. Os limites de caracteres são os mesmos que as caixas de texto Nome / Nome da Fazenda.
Gênero. Tem pequenos efeitos no jogo:
Personagens usarão o pronome apropriado quando referirem-se a você.
Você está restrito a entrada ou masculina ou feminina do spa. (Nota: Alex às vezes trabalha no vestiário dos homens.)
Você pode casar com quaisquer personagens habilitados independentemente de seu gênero, embora ele afetará como você terá filhos depois do Casamento. Numa relação heterossexual, você ou sua esposa ficarão grávidos por 14 dias (com nenhum efeito na movimentação da mãe) e dará a luz a uma criança, e em uma relação homossexual, você poderá adotar crianças.
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
