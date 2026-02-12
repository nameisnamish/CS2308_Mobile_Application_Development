import React from 'react';
import { Image, Text, View, Button, StyleSheet, TouchableOpacity, Pressable, Alert } from 'react-native';


const App = () => {
  return (
    <View style={styles.container}>
      <Text style = {{fontSize: 30, color: 'blue'}}>Hello World</Text>
      <Image 
        source={{uri: 'https://img.freepik.com/free-photo/courage-man-jump-through-gap-hill-business-concept-idea_1323-262.jpg?semt=ais_hybrid&w=740&q=80'}} 
        style={{width: 200, height: 200}}
      />
      <Button title="Click Me" />
      
      <TouchableOpacity onPress={() => Alert.alert('Alert', 'Touch Me Not')}><Text>Touch Me!</Text></TouchableOpacity>

      <Pressable><Text>Press Me!</Text></Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;




