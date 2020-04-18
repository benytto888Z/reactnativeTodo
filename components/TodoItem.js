import React from 'react';
import {StyleSheet, View,Text,TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';



export default function TodoItem({todo,onDelete}) {
return (

        <View style={styles.item}>
            <Text style={styles.text}>{todo.text}</Text>
            <Text style={{color:'white'}}>{todo.id}</Text>

            <TouchableOpacity onPress={()=>onDelete(todo.id)}>
            <MaterialIcons name='delete' size={24} color='gold'/>
            </TouchableOpacity>

        </View>


)
}

const styles = StyleSheet.create({
  item: {
      flexDirection:'row',
      justifyContent:'space-around',
      padding : 16,
      marginTop  : 16,
      borderColor:'#bbb',
      borderWidth:1,
      borderStyle:'dashed',
      borderRadius:10,
      backgroundColor:'gray',
    },
    text: {
        textAlign: 'center',
        color:'#fff'
    },
    title:{
        textAlign:'center',
        color:'#fff',
        fontSize:20,
        fontWeight:'bold'
    }
});