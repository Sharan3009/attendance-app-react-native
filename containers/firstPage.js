import React from 'react';

import Attendees from '../presentational/attendees';
import { View } from 'react-native';

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
    state = {
        activeSections : []
    }

    onUpdateSection = activeSections => {
        this.setState({ activeSections });
    };

    onScrollViewPress = () => {
        this.setState({activeSections:[]})
    }
    render(){
        return (
            <Attendees sections={SECTIONS}
                activeSections={this.state.activeSections}
                onUpdateSection={this.onUpdateSection}
                onScrollViewPress={this.onScrollViewPress}
            />
        )
    }
}

export default FirstPage;