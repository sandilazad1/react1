import React from "react";
import { Text, StyleSheet, View } from "react-native";


const ComponentScreen =() =>
{
    const name = "sandil azad"
return(
<View>
<Text style={style.textStyle}>My name is {name}</Text>
    <Text>I am  bad boy</Text>
</View>
);

};

const style = StyleSheet.create({
    textStyle:{
        fontSize:45,
        color:'blue',
        fontStyle:'italic'
    
    },
    subHeaderStyle:{
        fontSize:20

    }


})

export default ComponentScreen;