import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
    fundo: {
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    caixa: {
        height: Platform.OS === "web" ? "100vh" : "100%"
    },
    produtos: {
        justifyContent: 'center',
        alignItems: 'center',
    height: '40%',
    },
    texto:{
        fontSize:40,
        color:"#00FFFF",
     },
     prods:{
         fontSize: 17,
         color: "white",
     },
     bot:{
        backgroundColor: "#6495ED", 
        alignItems: 'center',
        marginTop: 11,
        padding: 7,
        borderRadius: 8 
     },
    botao:{
        fontSize:20,
        color: "white"
     }
})
export default styles;