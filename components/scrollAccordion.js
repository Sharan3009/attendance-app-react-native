import React from 'react';
import Accordion from 'react-native-collapsible/Accordion';
import { View, Text, ScrollView } from 'react-native';

const _renderHeader = section => {
    return (
        <View style={{ paddingVertical:7, paddingHorizontal: 10, backgroundColor:'rgba(0,0,0,0.03)', borderBottomColor:'rgba(0,0,0,.125)', borderBottomWidth:1}}>
            <Text style={{fontSize:20}}>{section.name}</Text>
        </View>
    );
};

const _renderContent = section => {
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
const scrollAccordion = (props) => {
    return(
        <ScrollView style={{flexGrow:1}}>
            <Accordion
                style={{overflow:"scroll"}}
                sections={props.sections}
                activeSections={props.activeSections}
                renderHeader={_renderHeader}
                renderContent={_renderContent}
                onChange={props.onUpdateSection}
                underlayColor="inherit"
                disabled={props.disabled}
            />
        </ScrollView>
    )
}

export default scrollAccordion;