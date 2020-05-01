import React from 'react';
import {View, Text} from 'react-native';
import SetTimeButton from './setTimeButton';

const accordionContent = (props) =>{
    let returnUI = null;
    const { section } = props;
    if(section && section.content && Array.isArray(section.content)){
        returnUI = section.content.map((d)=>{
            return(
                <View style={{paddingVertical:7, paddingHorizontal: 14, flexDirection:'row'}} key={d.id}>
                    <Text style={{fontWeight:'bold'}}>{d.key}: </Text>
                    <Text style={{marginRight:10}}>{d.value || d.default}</Text>
                    {(d.isTime)?<SetTimeButton setTime={(e)=>props.setTime(d.id,e)} />:null}
                </View>
            )
        })
    }
    return (
        returnUI
    );
}

export default accordionContent;