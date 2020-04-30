import React from 'react';
import Plank from './plank';
const SECTIONS = [
    {
      name: '10-11-22',
      in: '2:45',
      out: '3:45',
      duration: '1 hour'
    },
    {
        name: '11-11-22',
        in: '9:45',
        out: '6:45',
        duration: '9 hours'
    }
  ];
class SecondPage extends React.Component {

    render(){
        return (
            <Plank sections={SECTIONS} disabled={true}/>
        )
    }
}

export default SecondPage;