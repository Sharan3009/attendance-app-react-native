import React from 'react';
import Accordion from 'react-native-collapsible/Accordion';
import { View, Text, ScrollView } from 'react-native';
import AccordionContent from './accordionContent';

const _renderHeader = section => {
    return (
        <View style={{ paddingVertical:7, paddingHorizontal: 10, backgroundColor:'rgba(0,0,0,0.03)', borderBottomColor:'rgba(0,0,0,.125)', borderBottomWidth:1}}>
            <Text style={{fontSize:20}}>{section.header}</Text>
        </View>
    );
};

const setTime = () =>{

}

const _renderContent = section => {
    return <AccordionContent section={section} setTime={setTime}/>
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