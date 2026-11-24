import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { ScreenContainer } from '@/components/ScreenContainer';
import { Header } from '@/components/Header';
import { SkillTag } from '@/components/SkillTag';
import { ExperienceCard } from '@/components/ExperienceCard';
import { habilidades, atividades, formacao } from '@/data/curriculo';
import { colors } from '@/constants/colors';
export default function Sobre() {
  return <ScreenContainer><Header eyebrow="Sobre mim" title="Minha trajetória" subtitle="Sou estudante de Ciência da Computação e desenvolvedora em formação, com interesse em data science e engenharia de requisitos." />
    <View style={styles.section}><Text accessibilityRole="header" style={styles.title}>Habilidades técnicas</Text><View style={styles.tags}>{habilidades.map(item => <SkillTag key={item} label={item} />)}</View></View>
    <View style={styles.section}><Link href="/experiencia-academica" asChild><Pressable accessibilityRole="link" accessibilityLabel="Ver experiência acadêmica" style={styles.headingLink}><Text accessibilityRole="header" style={styles.title}>Formação acadêmica</Text><Text style={styles.arrow}>→</Text></Pressable></Link>{formacao.map(item => <ExperienceCard key={item.titulo} {...item} />)}</View>
    <View style={styles.section}><Text accessibilityRole="header" style={styles.title}>Atividades e mentorias</Text>{atividades.map(item => <ExperienceCard key={item.titulo} {...item} />)}</View>
    <View style={styles.section}><Link href="/experiencia-profissional" asChild><Pressable accessibilityRole="link" accessibilityLabel="Ver experiência profissional" style={styles.headingLink}><Text accessibilityRole="header" style={styles.title}>Experiência profissional</Text><Text style={styles.arrow}>→</Text></Pressable></Link><ExperienceCard titulo="Primeira oportunidade" descricao="Atualmente busco minha primeira oportunidade de estágio na área de tecnologia." /></View>
    <Link href="/sobre-aplicativo" asChild><Pressable accessibilityRole="link" accessibilityLabel="Sobre o aplicativo" style={styles.headingLink}><Text style={styles.appLink}>Sobre o aplicativo</Text><Text style={styles.arrow}>→</Text></Pressable></Link>
  </ScreenContainer>;
}
const styles = StyleSheet.create({ section: { gap: 12 }, title: { color: colors.blue, fontSize: 21, fontWeight: '700', flexShrink: 1 }, headingLink: { minHeight: 48, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 12 }, arrow: { color: colors.blue, fontSize: 22 }, appLink: { color: colors.blue, fontSize: 16, fontWeight: '700' }, tags: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 } });
