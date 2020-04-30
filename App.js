/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, Text,TextInput , Button, AsyncStorage } from 'react-native';
class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      text : null,
      finalText:null
    }
  }

  componentDidMount(){
    this.getTextFromStorage();
  }

  onChangeText = (e) =>{
    this.setState({text:e})
  }

  saveTextToStorage = () =>{
    AsyncStorage.setItem("finalText",this.state.text).then(
      (e)=>{
        this.setState({finalText:this.state.text,text:null});
      }
    )
  }

  getTextFromStorage = () =>{
    AsyncStorage.getItem("finalText").then(
      (e)=>{
        this.setState({finalText:e})
      }
    )
  }

  render() {
    return(
      <View style={{height:"100%", flexDirection:"column", justifyContent:"center"}}>
       <View style={{flexDirection:"row"}}>
        <TextInput 
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, flex:1 }} 
        onChangeText={this.onChangeText}
        value={this.state.text}/>
        <Button title="Save" onPress={this.saveTextToStorage}/>
      </View>
      <View style={{alignItems:"center"}}>
        <Text>{this.state.finalText}</Text>
      </View>
    </View>
    );
  };
};

export default App;
