import React from "react";
import { Text, StyleSheet, View, FlatList} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";


const FristGoal = ()=>{

const vartical_list = [
    {name:"friend1" ,age :"20"},
    {name:"friend2" ,age: "60"},
    {name:"friend3" ,age: "50"},
    {name:"friend4" ,age: "40"},
]

return(
    <FlatList
    horizontal
    keyExtractor={friend => friend.name}
    data = {vartical_list}
    renderItem={({item})=>{
    return <Text style={style.textStyle}>{item.name}- Age {item.age}</Text>
    }}
    />
)

}

const style = StyleSheet.create(
    {
        textStyle:{
            fontSize:30,
            color:'red',
            marginEnd:6
        }
    }
)

export default FristGoal;