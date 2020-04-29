/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Text } from 'react-native';
class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      time : null
    }
  }
  onChange = (e) =>{
    this.setState({time:e.nativeEvent.timestamp})
  }
  render() {
    return(
      <>
      <Text>{this.state.time}</Text>
      <DateTimePicker
        value={new Date()}
        mode={"time"}
        display="default"
        onChange={this.onChange}
    />
    </>
    );
  };
};

export default App;
