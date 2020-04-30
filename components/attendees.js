import React from 'react';
import { View, ScrollView, TouchableWithoutFeedback } from 'react-native';
import ScrollAccordion from './scrollAccordion';

class Attendees extends React.Component {
    state = {
        activeSections : []
    }

    onUpdateSection = activeSections => {
        this.setState({ activeSections });
    };

    onScrollViewPress = () => {
        this.onUpdateSection([]);
    }
    render(){
        return (
            <TouchableWithoutFeedback onPress={this.onScrollViewPress}>
                <View style={{flexGrow:1}}>
                    <ScrollAccordion 
                    activeSections={this.state.activeSections}
                    onUpdateSection={this.onUpdateSection}/>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

export default Attendees;