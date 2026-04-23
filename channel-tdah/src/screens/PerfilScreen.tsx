// src/screens/PerfilScreen.tsx
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function PerfilScreen() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/150?img=3' }}
          style={styles.avatar}
        />
        <Text style={styles.nome}>Maria Silva</Text>
        <Text style={styles.email}>maria@email.com</Text>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Membro desde</Text>
          <Text style={styles.infoValor}>Janeiro 2024</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Plano</Text>
          <Text style={styles.infoValor}>Gratuito</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('Detalhe', { id: 99 })}
      >
        <Text style={styles.botaoTexto}>Ver meu detalhe</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.botao, styles.botaoSair]}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.botaoTexto}>Voltar para Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    padding: 24,
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 32,
    marginBottom: 32,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
  },
  nome: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  email: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  infoContainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    gap: 12,
  },
  infoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  infoLabel: {
    fontSize: 14,
    color: '#888',
  },
  infoValor: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  botao: {
    width: '100%',
    backgroundColor: '#6C63FF',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 12,
  },
  botaoSair: {
    backgroundColor: '#aaa',
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
});