/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Text } from 'react-native';
class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      text : "Haye ni tera koka"
    }
  }

  render() {
    return(
      <>
      <Text>{this.state.text}</Text>
      
    </>
    );
  };
};

export default App;
