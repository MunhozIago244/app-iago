import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation<any>();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home</Text>
      <Button 
        title="Ver Detalhe" 
        onPress={() => navigation.navigate('Detalhe', { id: 42 })} 
      />
    </View>
  );
}