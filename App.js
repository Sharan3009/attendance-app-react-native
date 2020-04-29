/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
class App extends React.Component{
  onChange = () =>{
    //do nothing
  }
  render() {
    return(
      <DateTimePicker
        value={new Date()}
        mode={"time"}
        display="default"
        onChange={this.onChange}
    />
    );
  };
};

export default App;
