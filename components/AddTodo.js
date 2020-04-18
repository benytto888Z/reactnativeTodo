import React,{useState} from 'react';
import {StyleSheet, View, Text, TextInput, Button, TouchableOpacity} from 'react-native';


export default function AddTodo({onAdding}) {
    const [text,setText]=useState('');
    const changeHandler=val=>{
        setText(val);
    };
    return (
        <View style={styles.add}>

                <TextInput style={styles.input}
                           placeholder="Entrer une nouvelle tâche"
                           onChangeText = {changeHandler}
                />

                <TouchableOpacity>
                    <View>
                        <Button title="Ajouter" color="coral" onPress={() => onAdding(text)}/>
                    </View>
                </TouchableOpacity>

        </View>


    )
}

const styles = StyleSheet.create({
    add: {
        flexDirection: 'row',
        justifyContent:'center'
    },
    input: {
        textAlign: 'center',
        backgroundColor: 'rgba(33,33,33,0.76)',
        fontWeight: 'bold',
        marginRight:5,
        color: '#fff',
        width: '60%'
    }
});