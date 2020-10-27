import React from "react";
import { Text, StyleSheet,View, Button } from "react-native";
import ImageDetails from '../screens/Component/ImageDetails';

const ImageScreen = ()=>{
    return(
      <View>
       <ImageDetails title="Hell" ImageSource= {require('../../assets/beach.jpg')}/>
       <ImageDetails title="Pound"ImageSource= {require('../../assets/forest.jpg')}/>
       <ImageDetails title="Sea"  ImageSource= {require('../../assets/mountain.jpg')}/>
      </View> 
       



    )
}

export default ImageScreen;