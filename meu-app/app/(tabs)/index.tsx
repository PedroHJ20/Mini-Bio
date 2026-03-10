import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Profile from '../../components/Profile';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>
        App criado para a disciplina Programação para Dispositivos Móveis
      </Text>
      
      <Profile />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#111827',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});