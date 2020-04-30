import React from 'react';
import Plank from './plank';
const SECTIONS = [
    {
      name: 'Sharandeep Singh',
      in: '2:45',
      out: '3:45',
      duration: '1 hour'
    },
    {
        name: 'Bhopu Singh',
        in: '9:45',
        out: '6:45',
        duration: '9 hours'
    }
  ];
class FirstPage extends React.Component {

    render(){
        return (
            <Plank sections={SECTIONS}/>
        )
    }
}

export default FirstPage;