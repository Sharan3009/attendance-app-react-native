import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

class AddButton extends React.Component{
    render(){
        return(
            <TouchableOpacity
            style={{
                borderWidth:1,
                borderColor:'rgba(0,0,0,0.2)',
                position:"absolute",
                justifyContent:"center",
                alignItems:"center",
                bottom:10,
                right:10,
                width:50,
                height:50,
                backgroundColor:'#633689',
                borderRadius:50,
              }}
          >
            <Text style={{color:"#fff",fontSize:40,marginTop:-5}}>+</Text>
          </TouchableOpacity>
        )
    }
}

export default AddButton;