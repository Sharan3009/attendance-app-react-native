import React from 'react';
import Accordion from 'react-native-collapsible/Accordion';
import { View, Text, ScrollView } from 'react-native';

const _renderHeader = section => {
    return (
        <View style={{ paddingVertical:7, paddingHorizontal: 10, backgroundColor:'rgba(0,0,0,0.03)', borderBottomColor:'rgba(0,0,0,.125)', borderBottomWidth:1}}>
            <Text style={{fontSize:20}}>{section.header}</Text>
        </View>
    );
};

const _renderContent = section => {
    let returnUI = null;
    if(section && section.content && Array.isArray(section.content)){
        returnUI = section.content.map((d,idx)=>{
            return(
                <View style={{paddingVertical:7, paddingHorizontal: 14, flexDirection:'row'}} key={idx}>
                    <Text style={{fontWeight:'bold'}}>{d.key}: </Text><Text>{d.value}</Text>
                </View>
            )
        })
    }
    return (
        returnUI
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
            />
        </ScrollView>
    )
}

export default scrollAccordion;