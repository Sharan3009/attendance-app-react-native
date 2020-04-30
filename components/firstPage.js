import React from 'react';

import { View, Text } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
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
    },
  ];
class FirstPage extends React.Component {
    state = {
        activeSections: [],
    };
     
    _renderHeader = section => {
        return (
            <View style={{ paddingVertical:7, paddingHorizontal: 10, backgroundColor:'rgba(0,0,0,0.03)', borderBottomColor:'rgba(0,0,0,.125)', borderBottomWidth:1}}>
                <Text style={{fontSize:20}}>{section.name}</Text>
            </View>
        );
    };
    
    _renderContent = section => {
        return (
            <>
                <View style={{paddingVertical:7, paddingHorizontal: 14, flexDirection:'row'}}>
                    <Text style={{fontWeight:'bold'}}>Name: </Text><Text>{section.name}</Text>
                </View>
                <View style={{paddingVertical:7, paddingHorizontal: 14, flexDirection:'row'}}>
                    <Text style={{fontWeight:'bold'}}>In: </Text><Text>{section.in}</Text>
                </View>
                <View style={{paddingVertical:7, paddingHorizontal: 14, flexDirection:'row'}}>
                    <Text style={{fontWeight:'bold'}}>Out: </Text><Text>{section.out}</Text>
                </View>
                <View style={{paddingVertical:7, paddingHorizontal: 14, flexDirection:'row'}}>
                    <Text style={{fontWeight:'bold'}}>Duration: </Text><Text>{section.duration}</Text>
                </View>
            </>
        );
    };
    
    _updateSections = activeSections => {
        this.setState({ activeSections });
    };

    render(){
        return (
            <Accordion
                sections={SECTIONS}
                activeSections={this.state.activeSections}
                renderSectionTitle={this._renderSectionTitle}
                renderHeader={this._renderHeader}
                renderContent={this._renderContent}
                onChange={this._updateSections}
                underlayColor="inherit"
            />
        )
    }
}

export default FirstPage;