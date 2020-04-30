import React from 'react';
import Plank from './plank';
const SECTIONS = [
    {
      header: 'Sharandeep Singh',
      content : [
          {
              id:"in",
              key:"In",
              value:"2:45"
          },
          {
            id:"out",
            key:"Out",
            value:"3:45"
        },
        {
            id:"duration",
            key:"Duration",
            value:"1 hour"
        }
      ]
    },
    {
        header: 'Bhopu Singh',
        content : [
            {
                id:"in",
                key:"In",
                value:"9:45"
            },
            {
              id:"out",
              key:"Out",
              value:"6:45"
          },
          {
              id:"duration",
              key:"Duration",
              value:"9 hours"
          }
        ]
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