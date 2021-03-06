import React from 'react';
import Accordion from 'react-native-collapsible/Accordion';
import { View, Text, ScrollView } from 'react-native';
import AccordionContent from './accordionContent';

const scrollAccordion = (props) => {
    const _renderHeader = section => {
        return (
            <View style={{ paddingVertical:15, paddingHorizontal: 15, backgroundColor:'rgba(0,0,0,0.03)', borderBottomColor:'rgba(0,0,0,.125)', borderBottomWidth:1}}>
                <Text style={{fontSize:20}}>{section.header}</Text>
            </View>
        );
    };
    
    const setTime = (param,time,i) =>{
        props.setTime(param,time,i);
    }
    
    const _renderContent = (section,index) => {
        return <AccordionContent section={section} setTime={(param,time)=>setTime(param,time,index)}/>
    };
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