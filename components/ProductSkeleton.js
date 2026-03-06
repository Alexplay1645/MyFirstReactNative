import React from "react";
import { View, StyleSheet } from "react-native";

export default function ProductSkeleton() {

  const skeletons = Array(6).fill(null);

  return (
    <View style={styles.container}>
      {skeletons.map((_, index) => (
        <View key={index} style={styles.card}>
          
          <View style={styles.image} />
          <View style={styles.title} />

        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10
  },

  card: {
    width: "48%",
    marginBottom: 20
  },

  image: {
    width: "100%",
    height: 140,
    backgroundColor: "#e0e0e0",
    borderRadius: 10
  },

  title: {
    width: "70%",
    height: 15,
    backgroundColor: "#e0e0e0",
    marginTop: 10,
    borderRadius: 4
  }

});