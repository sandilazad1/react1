import React from "react";
import { Text, StyleSheet,View, Button } from "react-native";

const HomeScreen = () => {
  return(<View>
   <Text style={styles.text}>HomeScreen</Text>
   <Button
  
   onPress={()=>{ var count = 1;console.log("hello world " + count ++ )}}
   title="click me"
   />
  </View>
  )

};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});



export default HomeScreen;
