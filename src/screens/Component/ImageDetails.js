import React from "react";
import { Text, StyleSheet,View, Button,Image } from "react-native";


const ImageDetails = (p)=>{
    console.log(p);
    return(
    <View>
    <Image source={p.ImageSource} />
    <Text>{p.title}</Text>
    </View>
    )
}

export default ImageDetails;