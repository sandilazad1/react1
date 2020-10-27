import React from "react";
import { Text, StyleSheet, View, FlatList} from "react-native";

const ListComponent = ()=>
{
    const friends = [

        {name:'oly'   },
        {name:'sandil'},
        {name:'rabbi' },
        {name:'rasel' },
        {name:'olyi'   },
        {name:'sandili'},
        {name:'rabbii' },
       
    ];

  
   return(<FlatList 
   //horizontal
   //showsHorizontalScrollIndicator={false}
   keyExtractor={friend => friend.name}
   data={friends}
   renderItem ={
   ({item})=>{
   return <Text style={styles.textStyle}>{item.name}</Text>
   }}/>
   );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical:50,
        marginLeft:5

    }
  });

export default ListComponent;