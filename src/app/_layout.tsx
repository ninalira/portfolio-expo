import { Stack } from 'expo-router';
import { colors } from '@/constants/colors';
export default function RootLayout() {
  return <Stack screenOptions={{ headerTintColor: colors.blue, headerStyle: { backgroundColor: colors.background }, headerShadowVisible: false, headerBackTitle: 'Voltar' }}>
    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    <Stack.Screen name="experiencia-academica" options={{ title: 'Experiência Acadêmica' }} />
    <Stack.Screen name="experiencia-profissional" options={{ title: 'Experiência Profissional' }} />
    <Stack.Screen name="sobre-aplicativo" options={{ title: 'Sobre o aplicativo' }} />
  </Stack>;
}
