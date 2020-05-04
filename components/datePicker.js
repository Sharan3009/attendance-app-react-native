import React from 'react';
import { TouchableOpacity, Platform, Text, StyleSheet, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const styles = StyleSheet.create({
    container:{
        backgroundColor: `${Platform.OS==="ios"?"#00000066":"transparent"}`,
        position: "absolute",
        justifyContent:"flex-end",
        width:"100%",
        height:"100%"
    },
    header:{
        width:"100%",
        padding: 16,
        justifyContent:"flex-end",
        alignItems:"flex-end",
        backgroundColor:"white",
        borderBottomWidth:1,
        borderColor:"grey"
    }
})

class DatePicker extends React.Component {
  
  state = {
    timePicked:new Date()
  }

  onTimerChange = (e) =>{
    switch(e.type){
      case "set":{
        if(e && e.nativeEvent && e.nativeEvent.timestamp){
          const timePicked = new Date(e.nativeEvent.timestamp);
          if(Platform.OS === "ios"){
            this.setState({timePicked});
          } else {
            this.props.onChange(timePicked)
          }
        }
        break;
      }
      case "dismissed":{
        this.props.onClose();
        break;
      }
    }
  }

  render() {
    return (
      <TouchableOpacity onPress={this.props.onClose} style={styles.container}>
        {Platform.OS === 'ios' && (
          <View style={styles.header}>
            <TouchableOpacity onPress={()=>this.props.onChange(this.state.timePicked)}>
              <Text style={{fontWeight:"bold", color:"blue"}}>Done</Text>
            </TouchableOpacity>
          </View>
        )}
        <DateTimePicker
          value={this.state.timePicked}
          mode="time"
          display="default"
          onChange={this.onTimerChange}
          is24Hour={true}
         style={{ backgroundColor: 'white' }}
       />
     </TouchableOpacity>
   );
  }
}

export default DatePicker;