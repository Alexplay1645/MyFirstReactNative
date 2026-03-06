import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function NotFoundScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>404</Text>
      <Text style={styles.subtitle}>Сторінка не знайдена</Text>
      <Button 
        title="Повернутися на головну" 
        onPress={() => navigation.navigate('Home')} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff',
  },
  title:{
    fontSize:72,
    fontWeight:'bold',
    marginBottom:20,
  },
  subtitle:{
    fontSize:20,
    marginBottom:40,
  }
});