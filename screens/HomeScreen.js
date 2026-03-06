import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import ProductSkeleton from '../components/ProductSkeleton';

export default function HomeScreen({ navigation }) {

  const loading = true;
  return (
    <View style={styles.container}>
      {loading ? (
        <ProductSkeleton />
      ) : (
        <Button 
          title="Перейти на неіснуючу сторінку"
          onPress={() => navigation.navigate('NotFound')}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
});