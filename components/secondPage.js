import React from 'react';
import Plank from './plank';
const SECTIONS = [
    {
      header: '11-11-22',
    },
    {
        header: '12-11-22',
    }
  ];
class SecondPage extends React.Component {

    onUpdateSection = (i) =>{
        this.props.navigation.push("Details")
    }

    render(){
        return (
            <Plank sections={SECTIONS} 
            onUpdateSection={this.onUpdateSection}/>
        )
    }
}

export default SecondPage;