import { StyleSheet, Text, View } from 'react-native';
import { colors } from '@/constants/colors';
export function Header({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return <View style={styles.container}><Text style={styles.eyebrow}>{eyebrow.toUpperCase()}</Text><Text accessibilityRole="header" style={styles.title}>{title}</Text>{subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}</View>;
}
const styles = StyleSheet.create({ container: { gap: 8 }, eyebrow: { color: colors.blue, fontWeight: '700', fontSize: 12, letterSpacing: 1.4 }, title: { color: colors.blue, fontWeight: '800', fontSize: 32, lineHeight: 39 }, subtitle: { color: colors.muted, fontSize: 16, lineHeight: 24 } });
