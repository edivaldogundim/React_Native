import React from 'react';
import {
  View, 
  Text, 
  StatusBar

}from 'react-native';
import Routes from './src/routes';
//import Tarefas from './src/screens/Tarefas';
//import Login from './src/screens/Login';

//import Whats from './assets/whats.jpeg';

function App(){
  return(
    <View>
    <StatusBar />
    <Routes/>
    </View>
  )
}

export default App;