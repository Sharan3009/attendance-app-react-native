/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

class App extends React.Component {
  onChange = () =>{
    // do nothing just to prevent crash
  }
  render() {
    <DateTimePicker
      value={new Date()}
      mode={"time"}
      onChange={this.onChange}
    />
  }
};

export default App;
