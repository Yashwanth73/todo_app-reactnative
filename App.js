import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  FlatList, StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import TodoItem from "./components/TodoItem";
export default function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleTodo = () => {
    if (!todo) return;
    setTodos([...todos, { id: Date.now(), text: todo }]);
    setTodo("");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>TODO LIST APP </Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter ToDo"
          style={styles.input}
          value={todo}
          onChangeText={(text) => setTodo(text)}
        />
        <TouchableOpacity onPress={handleTodo} style={styles.button}>
          <Text>Add</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 10, width: "100%" }}>

        <FlatList
          data={todos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TodoItem todo={item} todos={todos} setTodo={setTodo} />
          )}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    marginVertical: 10,
    fontSize: 30,
    fontWeight: "700",
  },
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: "#f7eceb",
    alignItems: "center",
  },
  input: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
    elevation: 10,
    shadowColor: "black",
    flex: 1,
    backgroundColor: "white",
  },
  inputContainer: {
    flexDirection: "row",
    marginHorizontal: 10,
    alignItems: "center",
  },
  button: {
    padding: 13,
    backgroundColor: "white",
    borderRadius: 50,
    elevation: 10,
    shadowColor: "black",
  },
});
