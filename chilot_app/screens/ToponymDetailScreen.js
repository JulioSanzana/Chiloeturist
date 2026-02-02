import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const ToponymDetailScreen = ({ route }) => {
  const { name, origin_language, meaning, description } = route.params;
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.subtitle}>Origen: {origin_language}</Text>
      <Text style={styles.subtitle}>Significado: {meaning}</Text>
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
  subtitle: {
    fontSize: 14,
    color: '#888',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
  },
});

export default ToponymDetailScreen;
