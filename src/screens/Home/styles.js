import {StyleSheet, Platform} from 'react-native';
import { color } from 'react-native-reanimated';
const styles = StyleSheet.create({
    caixa: {
        height: Platform.OS === "web" ? "100vh" : "100%"
    },
    fundo: {
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    textHome:{
        fontSize:30,
        color: "white"        
    },
    frase:{
        fontSize: 15,
        color: "white"
    },
    btn:{
        backgroundColor: "#6495ED", 
        alignItems: 'center',
        marginTop: 11,
        padding: 7,
        borderRadius: 8 
     },
})
export default styles;