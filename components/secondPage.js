import React from 'react';
import Plank from './plank';
import { getHistory } from '../historyStorage';
class SecondPage extends React.Component {
    state = {
        sections : []
    }
    componentDidMount(){
        this.getAllDates();
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

    render(){
        return (
            <Plank sections={this.state.sections} 
            onUpdateSection={this.onUpdateSection}/>
        )
    }
}

export default SecondPage;