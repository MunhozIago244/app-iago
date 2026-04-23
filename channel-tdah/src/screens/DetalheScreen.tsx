import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function DetalheScreen() {
  const route = useRoute<any>();
  const { id } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Detalhe #{id}</Text>
    </View>
  );
}