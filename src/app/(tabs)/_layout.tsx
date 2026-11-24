import { Tabs } from 'expo-router';
import { SymbolView } from 'expo-symbols';
import { colors } from '@/constants/colors';
export default function TabsLayout() {
  return <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: colors.blue, tabBarInactiveTintColor: colors.muted, tabBarStyle: { backgroundColor: colors.surface, borderTopColor: colors.lightBlue }, tabBarLabelStyle: { fontSize: 11, fontWeight: '600' } }}>
    <Tabs.Screen name="index" options={{ title: 'Home', tabBarIcon: ({ color }) => <SymbolView name={{ ios: 'house.fill', android: 'home', web: 'home' }} size={23} tintColor={color} /> }} />
    <Tabs.Screen name="sobre" options={{ title: 'Sobre', tabBarIcon: ({ color }) => <SymbolView name={{ ios: 'person.fill', android: 'person', web: 'person' }} size={23} tintColor={color} /> }} />
    <Tabs.Screen name="projetos" options={{ title: 'Projetos', tabBarIcon: ({ color }) => <SymbolView name={{ ios: 'folder.fill', android: 'folder', web: 'folder' }} size={23} tintColor={color} /> }} />
    <Tabs.Screen name="jogo" options={{ title: 'Jogo', tabBarIcon: ({ color }) => <SymbolView name={{ ios: 'gamecontroller.fill', android: 'sports_esports', web: 'sports_esports' }} size={23} tintColor={color} /> }} />
    <Tabs.Screen name="contato" options={{ title: 'Contato', tabBarIcon: ({ color }) => <SymbolView name={{ ios: 'envelope.fill', android: 'mail', web: 'mail' }} size={23} tintColor={color} /> }} />
  </Tabs>;
}
