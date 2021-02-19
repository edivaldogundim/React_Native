import React from 'react';
import {
    View, 
    Text, 
    ImageBackground, 
    TextInput, 
    TouchableOpacity,
} from 'react-native';

import styles from './styles';

import Fundo from '../../../assets/fundo.png';

function Home({navigation}){
  
    return(
        <View style={styles.caixa}>
            <ImageBackground source={Fundo} style={styles.fundo}>
        <View>
            
            <Text style={styles.textHome}>Sejam, bem vindos Devs!</Text>
        </View>
        <View>
            <Text style={styles.frase}>Em nossas lojas, progamadores tem desconto nos produtos!</Text>
        </View>
        <View>
        <TouchableOpacity style={styles.btn} onPress={() =>
                    navigation.navigate('Login')}>
            <Text style={styles.texto}>Faça seu login!</Text>
        </TouchableOpacity>
        </View>
        </ImageBackground>
        </View>
    )
}
export default Home;