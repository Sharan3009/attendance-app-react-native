import React from 'react';
import Plank from './plank';
import AddButton from './addButton';
import { getHistory } from '../historyStorage';
import moment from 'moment';

class FirstPage extends React.Component {
    state = {
        sections : []
    };

    componentDidMount = () =>{
        this.getTodayAttendance()
    }

    getTodayAttendance = () =>{
        let today = moment().format("MM-DD-yyyy");
        getHistory().then((data)=>{
            let todayAttendance = data[today];
            if(todayAttendance){
                this.setState({sections:todayAttendance});
            }
        })
    }

    onUpdateSection = () =>{
    }

    render(){
        return (
            <>
            <Plank sections={this.state.sections}
            onUpdateSection={this.onUpdateSection}/>
            <AddButton />
            </>
        )
    }
}

export default FirstPage;