import { StyleSheet, Text, View } from 'react-native';
import { Header } from '@/components/Header';
import { ScreenContainer } from '@/components/ScreenContainer';
import { ExperienceCard } from '@/components/ExperienceCard';
import { atividades, formacao } from '@/data/curriculo';
import { colors } from '@/constants/colors';
export default function ExperienciaAcademica() {
  return <ScreenContainer><Header eyebrow="Minha trajetória" title="Experiência Acadêmica" subtitle="Formação, atividades extracurriculares e mentorias." />
    <View style={styles.section}><Text accessibilityRole="header" style={styles.title}>Formação acadêmica</Text>{formacao.map(item => <ExperienceCard key={item.titulo} {...item} />)}</View>
    <View style={styles.section}><Text accessibilityRole="header" style={styles.title}>Atividades e mentorias</Text>{atividades.map(item => <ExperienceCard key={item.titulo} {...item} />)}</View>
  </ScreenContainer>;
}
const styles = StyleSheet.create({ section: { gap: 12 }, title: { color: colors.blue, fontSize: 21, fontWeight: '700' } });
