import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import SetTimeButton from './setTimeButton';

class AddAttendeeForm extends React.Component{

    state = {
        name:null,
        inTime:null,
        outTime:null,
        duration: "NA"
    }

    setTime(param,time){
        console.log(param,time)
        this.setState({[param]:time});
    }

    onChangeText = (e) =>{
        this.setState({name:e});
    }

    render(){
        return (
            <View>
                <TextInput
                    placeholder="Enter the member name..."
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin:5 }}
                    onChangeText={this.onChangeText}
                    value={this.state.name}
                />
                <View style={{margin:5, flexDirection:"row", alignItems:"center"}}>
                    <Text style={{fontWeight:"bold"}}>In: </Text>
                    <Text style={{marginRight:10}}>{this.state.inTime || '--:--'}</Text>
                    <SetTimeButton setTime={(e)=>this.setTime("inTime",e)} />
                </View>
                <View style={{margin:5, flexDirection:"row", alignItems:"center"}}>
                    <Text style={{fontWeight:"bold"}}>Out: </Text>
                    <Text style={{marginRight:10}}>{this.state.outTime || '--:--'}</Text>
                    <SetTimeButton setTime={(e)=>this.setTime("outTime",e)} />
                </View>
                <View style={{margin:5, flexDirection:"row"}}>
                    <Text style={{fontWeight:"bold"}}>Duration: </Text>
                    <Text>{this.state.duration}</Text>
                </View>
                <View style={{margin:5}}>
                    <Button title="Add member" color="#633689" />
                </View>
            </View>
        )
    }
}

export default AddAttendeeForm;