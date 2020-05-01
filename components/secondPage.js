import React from 'react';
import Plank from './plank';
import { getHistory } from '../historyStorage';
import { View, Text } from 'react-native';
class SecondPage extends React.Component {
    state = {
        sections : []
    }
    componentDidMount = () =>{
        this.getAllDates();
        this.navigationFocusEvent("addListener");
    }

    componentWillUnmount = () =>{
        this.navigationFocusEvent("removeListener");
    }

    navigationFocusEvent = (fun) =>{
        this.props.navigation[fun]("focus",()=>{
            this.getAllDates();
        })
    }

    getAllDates = () =>{
        getHistory().then((data)=>{
            if(data){
                let sections = Object.keys(data).map((date)=>({header:date}));
                this.setState({sections})
            }
        })
    }

    onUpdateSection = (i) =>{
        const {sections} = this.state;
        let header = null;
        if(sections[i]){
            header = sections[i].header
        }
        this.props.navigation.push("Details",{title:header});
    }

    showAptUI = () =>{
        if(this.state.sections.length){
            return <Plank sections={this.state.sections} 
            onUpdateSection={this.onUpdateSection}/>
        } else {
            return <View style={{justifyContent:"center",alignItems:"center",flex:1}}>
                <Text>No history found.</Text>
                <Text>Your day-wise attendance records will be reflected here.</Text>
            </View>
        }
    }

    render(){
        return (
            this.showAptUI()
        )
    }
}

export default SecondPage;