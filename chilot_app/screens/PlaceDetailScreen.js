import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const PlaceDetailScreen = ({ route }) => {
  const { name, description, category } = route.params;
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.category}>{category.toUpperCase()}</Text>
      <Text style={styles.description}>{description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  category: {
    fontSize: 14,
    color: '#888',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
  },
});

export default PlaceDetailScreen;
