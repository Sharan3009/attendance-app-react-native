import React from 'react';
import Plank from './plank';
import AddButton from './addButton';
import { View,Text } from 'react-native';
import { getHistory, setHistory } from '../historyStorage';
import moment from 'moment';

class FirstPage extends React.Component {
    state = {
        sections : []
    };

    componentDidMount = () =>{
        this.getDayAttendance();
        this.navigationFocusEvent("addListener");
    }

    componentWillUnmount = () =>{
        this.navigationFocusEvent("removeListener");
    }

    navigationFocusEvent = (fun) =>{
        this.props.navigation[fun]("focus",()=>{
            this.getDayAttendance();
        })
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

    updateDayAttendance = () =>{
        const route = this.props.route;
        let day = moment().format("MM-DD-yyyy");
        if(route.params && route.params.title){
            day = route.params.title;
        }
        getHistory().then((data)=>{
            data[day] = this.state.sections;
            setHistory(data)
        })
    }

    setTime = (param,time,i)=>{
        const sections = [...this.state.sections];
        const section = sections[i];
        if(section){
            const content = [...section.content]
            let index = content.findIndex((c)=>c.id===param);
            if(~index){
                content[index].value = moment(time).format("HH:mm");
            }
            this.setDuration(content);
            this.setState({sections});
            this.updateDayAttendance();
        }
    }

    setDuration=(content)=>{
        const inTimeIndex = content.findIndex((c)=>c.id==="inTime");
        const outTimeIndex = content.findIndex((c)=>c.id==="outTime");
        const durationIndex = content.findIndex((c)=>c.id==="duration");
        let inTime = null;
        let outTime = null;
        if(~inTimeIndex){
            inTime = content[inTimeIndex].value;
        }
        if(~outTimeIndex){
            outTime = content[outTimeIndex].value;
        }
        if(inTime && outTime){
            const momentOutTime = moment(outTime,"HH:mm");
            const momentInTime = moment(inTime,"HH:mm");
            let duration = moment.duration(momentOutTime.diff(momentInTime));
            duration = duration.asHours().toFixed(2);
            const prefix = (duration>1)?"hours":"hour";
            content[durationIndex].value = `${duration} ${prefix}`;
        }
    }

    showAptUI = () =>{
        if(this.state.sections.length){
            return <Plank 
            setTime = {this.setTime.bind(this)}
            sections={this.state.sections}
            onUpdateSection={this.onUpdateSection}/>
        } else {
            return <View style={{justifyContent:"center",alignItems:"center",flex:1}}>
                <Text>No attendance is captured for the day.</Text>
                <Text>Try adding some using "+" icon.</Text>
            </View>
        }
    }

    onUpdateSection = () =>{
    }

    render(){
        return (
            <>
            {this.showAptUI()}
            <AddButton route={this.props.route}/>
            </>
        )
    }
}

export default FirstPage;