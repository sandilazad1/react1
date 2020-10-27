import React from "react";
import { Text, StyleSheet,View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (p) => {
  return(<View>
   <Text style={styles.text}>HomeScreen</Text>
   <Button
  
   onPress={()=>{ p.navigation.navigate('Components')}}
   title="click me"
   />

<Button
  style={Buttonstyles.text}
  onPress={()=>{ p.navigation.navigate('Imagescreen')}}
  title="click me"
  />

<TouchableOpacity onPress={()=>{p.navigation.navigate('Listcomponent')}}>
  <Text>Go To list Demo</Text>
  <Text>Go To list Demo</Text>
  <Text>Go To list Demo</Text>
</TouchableOpacity>


  </View>
  
  )

};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

const Buttonstyles = StyleSheet.create({
  text: {
    marginTop:8
  }
});



export default HomeScreen;
