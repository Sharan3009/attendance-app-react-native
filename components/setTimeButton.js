import React from 'react';
import { Button,Modal,View } from 'react-native';
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
            let dateTimePicker = <Modal
                visible={this.state.isTimePicker}
                animationType={"fade"}
                transparent={true}>
                    <View style={{height:"100%",justifyContent:"center",alignItems:"center", backgroundColor: "rgba(0,0,0,0.5)"}}>
                        <DateTimePicker
                        style={{width:'70%',backgroundColor:"white"}}
                        value={new Date()}
                        mode={"time"}
                        is24Hour={true}
                        display="default"
                        onChange={this.onTimeChange}
                    />
                    </View>
                </Modal>
        return (
            <>
            <Button title="Set" onPress={this.showTimePicker}/>
            {dateTimePicker}
          </>
        )
    }
}

export default SetTimeButton;