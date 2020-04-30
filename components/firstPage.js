import React from 'react';

import { View, Text } from 'react-native';
import {Collapse,CollapseHeader, CollapseBody} from 'accordion-collapse-react-native';
class FirstPage extends React.Component {
    render(){
        return (
            <>
            <Collapse>
                <CollapseHeader>
                    <View style={{ paddingVertical:7, paddingHorizontal: 10, backgroundColor:'rgba(0,0,0,0.03)', borderBottomColor:'rgba(0,0,0,.125)', borderBottomWidth:1}}>
                        <Text style={{fontSize:20}}>Sharandeep Singh</Text>
                    </View>
                </CollapseHeader>
                <CollapseBody>
                    <View style={{paddingVertical:7, paddingHorizontal: 14, flexDirection:'row'}}>
                        <Text style={{fontWeight:'bold'}}>Name: </Text><Text>Sharandeep Singh</Text>
                    </View>
                </CollapseBody>
            </Collapse>
            </>
        )
    }
}

export default FirstPage;