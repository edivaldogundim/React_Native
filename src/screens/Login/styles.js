import {StyleSheet, Platform} from 'react-native';

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
    titulo: {
        color: "white",
        fontSize: 32        
    },
    input:{
    backgroundColor: "white",
    width: "100%",
    padding: 7, 
    marginTop: 11 
    
    },
    inputs:{
        width:"100%",
        padding: 7
    },
    btn:{
       backgroundColor: "#6495ED", 
       alignItems: 'center',
       marginTop: 11,
       padding: 7,
       borderRadius: 8 
    },
    texto:{
        fontSize:18,
        color: "white"
    }

})
export default styles;