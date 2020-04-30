import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import ScrollAccordion from './scrollAccordion';

class Plank extends React.Component {
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
                    sections={this.props.sections}
                    activeSections={this.state.activeSections}
                    onUpdateSection={this.onUpdateSection}
                    disabled={this.props.disabled}/>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

export default Plank;