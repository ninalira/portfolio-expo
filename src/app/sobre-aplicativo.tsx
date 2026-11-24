import { StyleSheet, Text, View } from 'react-native';
import { Header } from '@/components/Header';
import { ScreenContainer } from '@/components/ScreenContainer';
import { SkillTag } from '@/components/SkillTag';
import { colors } from '@/constants/colors';
import { tecnologiasApp } from '@/data/curriculo';

export default function SobreAplicativo() {
  return <ScreenContainer>
    <Header eyebrow="O projeto" title="Sobre o aplicativo" subtitle="Este currículo e portfólio foi desenvolvido para a disciplina de Programação Web-Mobile." />
    <Text accessibilityRole="header" style={styles.title}>Tecnologias e módulos utilizados</Text>
    <View style={styles.tags}>{tecnologiasApp.map(item => <SkillTag key={item} label={item} />)}</View>
  </ScreenContainer>;
}
const styles = StyleSheet.create({ title: { color: colors.blue, fontSize: 20, fontWeight: '700' }, tags: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 } });
