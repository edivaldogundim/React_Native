import React from 'react';
import { Text, View, ImageBackground, TouchableOpacity } from 'react-native';

import styles from './styles';

import Fundo from '../../../assets/fundo.png';

const produto = [
    {
        nome: "Geladeira   -   R$ 1.999,99"
    },
    {
        nome: "Microondas   -   R$ 559,99"
    },
    {
        nome: "Lava-louças   -   R$ 1.099,99"
    },
    {
        nome: "Fogão   -   R$ 789,99"
    },
    {
        nome: "Lavadora de Roupas   -   R$ 2.000,99"
    },
    {
        nome: "Guarda-roupa   -   R$ 1.699,99"
    },
    {
        nome: "Gabinetes   -   R$ 829,99"
    },
    {
        nome: "Armários   -   R$ 1.200,99"
    },
]


function Produtos({navigation}){
    return(
        <View style={styles.caixa}>

            <ImageBackground source={Fundo} style={styles.fundo}>

       <View style={styles.produtos}>
           <Text style={styles.texto}>Lista de Produtos</Text>
        {
                produto.map((produto, index) => 
                <Text style={styles.prods} key={index}>{produto.nome}</Text>)
            }

        <TouchableOpacity style={styles.bot} onPress={() =>
                    navigation.navigate('Home')}>
            <Text style={styles.botao}>HOME</Text>
        </TouchableOpacity>

            </View>
        </ImageBackground>
        </View>
    )
}
export default Produtos;