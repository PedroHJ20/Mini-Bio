import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Profile() {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: 'https://github.com/PedroHJ20.png' }}
                style={styles.image}
            />
            <Text style={styles.name}>Pedro Henrique Jerônimo Da Silva</Text>
            <Text style={styles.bio}>
                Sou estudante do 4º período de Sistemas para Internet na Universidade Católica e atualmente trabalho como assistente de faturamento.
                Tenho forte interesse em desenvolvimento web e busco sempre aplicar meus conhecimentos na criação de soluções eficientes.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f3f4f6',
        borderRadius: 16,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
        marginVertical: 20,
        width: '90%',
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 16,
        borderWidth: 3,
        borderColor: '#e5e7eb',
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#1f2937',
        textAlign: 'center',
    },
    bio: {
        fontSize: 15,
        color: '#4b5563',
        textAlign: 'center',
        lineHeight: 22,
    },
});