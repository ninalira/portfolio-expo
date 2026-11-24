import { SymbolView } from 'expo-symbols';
import { Image, Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import { Projeto } from '@/data/curriculo';
import { colors } from '@/constants/colors';
import { SkillTag } from './SkillTag';

export function ProjectCard({ projeto }: { projeto: Projeto }) {
  const simbolo = projeto.icone === 'moveis' ? { ios: 'chair.lounge.fill', android: 'chair', web: 'chair' } as const : projeto.icone === 'pizza' ? { ios: 'takeoutbag.and.cup.and.straw.fill', android: 'local_pizza', web: 'local_pizza' } as const : { ios: 'pawprint.fill', android: 'pets', web: 'pets' } as const;
  return <View style={styles.card}>
    {projeto.imagem ? <Image source={projeto.imagem} style={styles.image} resizeMode="cover" accessibilityLabel={`Imagem do projeto ${projeto.titulo}`} /> : <View style={styles.placeholder} accessible accessibilityLabel={`Ilustração do projeto ${projeto.titulo}`}><SymbolView name={simbolo} size={48} tintColor={colors.blue} /></View>}
    <View style={styles.body}><Text accessibilityRole="header" style={styles.title}>{projeto.titulo}</Text><Text style={styles.description}>{projeto.descricao}</Text><View style={styles.tags}>{projeto.tags.map(tag => <SkillTag key={tag} label={tag} />)}</View>
      <View style={styles.tags}>{projeto.github ? <Pressable accessibilityRole="link" accessibilityLabel={`GitHub: ${projeto.titulo}`} onPress={() => Linking.openURL(projeto.github!)} style={styles.link}><Text style={styles.linkText}>GitHub ↗</Text></Pressable> : null}{projeto.deploy ? <Pressable accessibilityRole="link" accessibilityLabel={`Acessar projeto ${projeto.titulo}`} onPress={() => Linking.openURL(projeto.deploy!)} style={styles.link}><Text style={styles.linkText}>Ver projeto ↗</Text></Pressable> : null}</View>
    </View>
  </View>;
}
const styles = StyleSheet.create({ card: { backgroundColor: colors.surface, borderRadius: 20, overflow: 'hidden' }, image: { width: '100%', height: 180, backgroundColor: colors.lightBlue }, placeholder: { height: 120, backgroundColor: colors.lightBlue, justifyContent: 'center', alignItems: 'center' }, body: { padding: 20, gap: 12 }, title: { color: colors.blue, fontSize: 19, fontWeight: '700' }, description: { color: colors.text, fontSize: 15, lineHeight: 22 }, tags: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 }, link: { minHeight: 48, justifyContent: 'center', paddingHorizontal: 16, borderRadius: 12, backgroundColor: colors.blue }, linkText: { color: colors.white, fontWeight: '700' } });
