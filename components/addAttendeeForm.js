import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

class AddAttendeeForm extends React.Component{

    state = {
        name:null,
        inTime:null,
        outTime:null,
        duration: "NA"
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
                    <Text style={{marginRight:10}}>--:--</Text>
                    <Button title="Set"/>
                </View>
                <View style={{margin:5, flexDirection:"row", alignItems:"center"}}>
                    <Text style={{fontWeight:"bold"}}>Out: </Text>
                    <Text style={{marginRight:10}}>--:--</Text>
                    <Button title="Set"/>
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