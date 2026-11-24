import { StyleSheet, Text, View } from 'react-native';
import { colors } from '@/constants/colors';
export function ExperienceCard({ titulo, descricao, periodo, local }: { titulo: string; descricao: string; periodo?: string; local?: string }) {
  return <View style={styles.card}>{periodo ? <Text style={styles.periodo}>{periodo}</Text> : null}<Text accessibilityRole="header" style={styles.title}>{titulo}</Text>{local ? <Text style={styles.local}>{local}</Text> : null}<Text style={styles.description}>{descricao}</Text></View>;
}
const styles = StyleSheet.create({ card: { backgroundColor: colors.surface, borderRadius: 18, padding: 20, gap: 7, borderLeftWidth: 4, borderLeftColor: colors.yellow }, periodo: { color: colors.muted, fontSize: 13, fontWeight: '700' }, title: { color: colors.blue, fontSize: 18, fontWeight: '700' }, local: { color: colors.blue, fontSize: 14, fontWeight: '600' }, description: { color: colors.text, lineHeight: 22, fontSize: 15 } });
