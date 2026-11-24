import { ReactNode } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '@/constants/colors';

export function ScreenContainer({ children, centered = false }: { children: ReactNode; centered?: boolean }) {
  return <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}><ScrollView contentContainerStyle={[styles.content, centered && styles.centered]}>{children}</ScrollView></SafeAreaView>;
}
const styles = StyleSheet.create({ safe: { flex: 1, backgroundColor: colors.background }, content: { padding: 22, paddingBottom: 36, gap: 22, maxWidth: 700, width: '100%', alignSelf: 'center' }, centered: { flexGrow: 1, justifyContent: 'center' } });
