import { StyleSheet, Text } from 'react-native';
import { colors } from '@/constants/colors';
export function SkillTag({ label }: { label: string }) { return <Text style={styles.tag}>{label}</Text>; }
const styles = StyleSheet.create({ tag: { backgroundColor: colors.lightBlue, color: colors.blue, paddingHorizontal: 12, paddingVertical: 7, borderRadius: 20, overflow: 'hidden', fontSize: 13, fontWeight: '600' } });
