import React from 'react';
import { Button,Modal,View } from 'react-native';
import DatePicker from './datePicker';

class SetTimeButton extends React.Component{

    state = {
        isTimePicker : false
    }

    showTimePicker = () =>{
        this.setState({isTimePicker:true});
    }

    hideTimePicker = () =>{
        this.setState({isTimePicker:false});
    }

    onTimeChange = (e) =>{
        if(e.nativeEvent && e.nativeEvent.timestamp){
            this.setState({isTimePicker:false})
            this.props.setTime(e.nativeEvent.timestamp);
        }
    }

    render(){
        return (
            <>
            <Button title="Set" onPress={this.showTimePicker}/>
            {this.state.isTimePicker && <DatePicker onChange={this.onTimeChange} onClose={this.hideTimePicker}/>}
          </>
        )
    }
}

export default SetTimeButton;