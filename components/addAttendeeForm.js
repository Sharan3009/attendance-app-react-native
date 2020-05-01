import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { getHistory, setHistory } from '../historyStorage';
import moment from 'moment';
import AccordionContent from './accordionContent';

class AddAttendeeForm extends React.Component{

    state = {
        name:null,
        inTime:null,
        outTime:null,
        duration: "NA",
    }

    setTime(param,time){
        let formattedTime = moment(time).format("HH:mm")
        this.setState({[param]:formattedTime});
        this.setDuration();
    }

    getMemberData =() =>{
        const {name,inTime,outTime,duration} = this.state;
        return {
            header : name,
            content : [
                {
                    id: "inTime",
                    key: "In",
                    value: inTime,
                    default: "--:--",
                    isTime:true
                },
                {
                    id: "outTime",
                    key: "Out",
                    value: outTime,
                    default: "--:--",
                    isTime:true
                },
                {
                    id: "duration",
                    key: "Duration",
                    value: duration,
                    default: "NA"
                }
            ]
        }
    }

    setDuration=()=>{
        const {inTime,outTime} = this.state;
        if(inTime && outTime){
            const momentOutTime = moment(outTime,"HH:mm");
            const momentInTime = moment(inTime,"HH:mm");
            let duration = moment.duration(momentOutTime.diff(momentInTime));
            duration = duration.asHours().toFixed(2);
            const prefix = (duration>1)?"hours":"hour"
            this.setState({duration: `${duration} ${prefix}`});
        }
    }

    onChangeText = (e) =>{
        this.setState({name:e});
    }

    addMember = () =>{
        const route = this.props.route;
        let day = moment().format("MM-DD-yyyy");;
        if(route.params && route.params.day){
            day = route.params.day
        }
        getHistory()
        .then((data)=>{
            let newData = this.getMemberData();
            let storageData = data || {};
            let dayData = storageData[day] || [];
            dayData.push(newData);
            storageData[day] = dayData;
            setHistory(storageData).then(()=>{
                this.props.navigation.goBack();
            })
        })
    }

    isButtonDisable = () =>{
        const {name,inTime} = this.state;
        if(!name || (name && !name.trim())){
            return true;
        } else if (!inTime || (inTime && !inTime.trim())){
            return true;
        }
        return false;
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
                <AccordionContent section={this.getMemberData()} setTime={this.setTime.bind(this)}/>
                <View style={{margin:5}}>
                    <Button title="Add member" color="#633689" onPress={this.addMember} disabled={this.isButtonDisable()} />
                </View>
            </View>
        )
    }
}

export default AddAttendeeForm;