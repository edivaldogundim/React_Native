import React from 'react';
import {
    View, 
    Text, 
    ImageBackground, 
    TextInput, 
    TouchableOpacity,
    Alert,
    Platform
} from 'react-native';

import Fundo from '../../../assets/fundo.png';

import styles from './styles';

const apiUsuario = {
    id: 1,
    email: "edivaldogundim@gmail.com",
    senha: "123"
}

function Login({navigation}) {

    function autenticacao(){
        if(apiUsuario.email === usuario && apiUsuario.senha === senha){
            navigation.navigate("Produtos");
        }
        else{
            Alert.alert("Usuário inválido!")
        }
    }

    const [usuario, setUsuario] = React.useState("");
    const [senha, setSenha] = React.useState("");

    return(
    <View style={styles.caixa}>
        <ImageBackground source={Fundo} style={styles.fundo}>
        <View>
            <Text style={styles.titulo}>Login</Text>
        </View>
        <View style={styles.inputs}>
        <TextInput placeholder="Digite o email..." 
        style={styles.input}
        value={usuario}
        onChangeText={(text) => setUsuario(text)}
        />
        
        <TextInput placeholder="Digite sua senha..." 
        style={styles.input} secureTextEntry={true}
        value={senha}
        onChangeText={(text) => setSenha(text)}
        />
        
        <TouchableOpacity style={styles.btn} onPress={autenticacao}>
            <Text style={styles.texto}>Entrar</Text>
        </TouchableOpacity>
        
        </View>
        </ImageBackground>
    </View>
    )
}

export default Login;