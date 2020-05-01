import React from 'react';
import { Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

class SetTimeButton extends React.Component{

    state = {
        isTimePicker : false
    }

    showTimePicker = () =>{
        this.setState({isTimePicker:true});
    }

    onTimeChange = (e) =>{
        if(e.nativeEvent && e.nativeEvent.timestamp){
            this.setState({isTimePicker:false})
            this.props.setTime(e.nativeEvent.timestamp);
        }
    }

    render(){
        let dateTimePicker = null;
        if(this.state.isTimePicker){
            dateTimePicker = <DateTimePicker
            value={new Date()}
            mode={"time"}
            is24Hour={true}
            display="default"
            onChange={this.onTimeChange}
          />
        }
        return (
            <>
            <Button title="Set" onPress={this.showTimePicker}/>
            {dateTimePicker}
          </>
        )
    }
}

export default SetTimeButton;