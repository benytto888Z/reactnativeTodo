import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList,Alert,TouchableWithoutFeedback,Keyboard} from 'react-native';
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";

export default function App() {
    const [todos,setTodos] = useState([
        {text: 'Prendre du café', id: '1'},
        {text: 'Concevoir une appli', id: '2'},
        {text: 'Jouer à la console', id: '3'},
    ]);
    const addHandler=(todo)=>{
        if(todo.length > 3){
            const newTodo ={text:todo,id:(todos.length+1).toString()};
            setTodos(prevTodos=>[...prevTodos,newTodo]);
        }else{
            Alert.alert('OOPS','Le texte doit être au moins de 4 caractères',[
                {text:'Fermer',onPress:()=>console.log('close alert')}
            ]);
        }

    };
    const handleDelete= id =>{
        setTodos(prevTodos=>{
           return  prevTodos.filter(todo=> todo.id !== id)
        })
    };
    return (
        <TouchableWithoutFeedback onPress={()=>{
          Keyboard.dismiss();
        }}>
        <View style={styles.container}>
            <Header/>
            <View style={styles.content}>
                <AddTodo onAdding={addHandler}/>
                <View style={styles.list}>
                    <FlatList
                        keyExtractor = {item=>item.id}
                        data={todos}
                        renderItem={({item})=>(
                            <TodoItem todo = {item} onDelete={handleDelete}/>
                        )}
                    />
                </View>
            </View>
        </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eafefb',
    },
    content: {
       flex: 1,
        paddingHorizontal: 40,
        paddingTop:40,
        paddingBottom:20,
        backgroundColor:'skyblue'
    },
    list:{
        flex:1,
        marginTop: 20,
    },

});
