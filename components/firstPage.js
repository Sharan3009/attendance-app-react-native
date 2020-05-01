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
        this.getDayAttendance()
    }

    getDayAttendance = () =>{
        const route = this.props.route;
        let day = moment().format("MM-DD-yyyy");
        if(route.params && route.params.title){
            day = route.params.title;
        }
        getHistory().then((data)=>{
            let dayAttendance = data[day];
            if(dayAttendance){
                this.setState({sections:dayAttendance});
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
            <AddButton route={this.props.route}/>
            </>
        )
    }
}

export default FirstPage;