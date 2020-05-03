import React from 'react';
import { Button, Platform, Modal } from 'react-native';
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

    getDatePickerUI = () => {
        if(Platform.OS === "ios"){
            return <Modal visible={this.state.isTimePicker} animationType={"fade"} transparent={true}>
                <DatePicker onChange={this.onTimeChange} onClose={this.hideTimePicker}/>
            </Modal>
        } else {
            if(this.state.isTimePicker){
                return <DatePicker onChange={this.onTimeChange} onClose={this.hideTimePicker}/>
            }
            return null;
        }
    }

    render(){
        return (
            <>
            <Button title="Set" onPress={this.showTimePicker}/>
            {this.getDatePickerUI()}
          </>
        )
    }
}

export default SetTimeButton;