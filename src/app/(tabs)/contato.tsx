import { Header } from '@/components/Header';
import { ScreenContainer } from '@/components/ScreenContainer';
import { colors } from '@/constants/colors';
import { SymbolView } from 'expo-symbols';
import { Alert, Linking, Pressable, StyleSheet, Text, View } from 'react-native';

const github = 'https://github.com/ninalira';
const linkedin = 'https://www.linkedin.com/in/nina-lira-b29961325/';
const email = 'ninaliraa22@gmail.com';

export default function Contato() {
  const canais = [
    { titulo: 'GitHub', descricao: 'Conheça meus projetos.', endereco: github, icone: { ios: 'chevron.left.forwardslash.chevron.right', android: 'code', web: 'code' } as const },
    { titulo: 'LinkedIn', descricao: 'Conecte-se comigo.', endereco: linkedin, icone: { ios: 'person.2.fill', android: 'group', web: 'group' } as const },
    { titulo: 'E-mail', descricao: 'Entre em contato.', endereco: email ? `mailto:${email}` : '', icone: { ios: 'envelope.fill', android: 'mail', web: 'mail' } as const },
  ];

  async function abrirCanal(endereco: string) {
    try { await Linking.openURL(endereco); }
    catch { Alert.alert('Não foi possível abrir o canal', 'Verifique se há um aplicativo disponível para abrir este endereço.'); }
  }

  return <ScreenContainer centered>
    <Header eyebrow="Contato" title="Onde me encontrar" subtitle="Estou aberta a novas oportunidades e conexões na área de tecnologia. Você pode me encontrar pelos canais abaixo." />
    <View style={styles.lista}>{canais.map(canal => <Pressable key={canal.titulo} accessibilityRole="link" accessibilityLabel={`${canal.titulo}, ${canal.descricao}${canal.endereco ? '' : ' Ainda não disponível.'}`} accessibilityState={{ disabled: !canal.endereco }} disabled={!canal.endereco} onPress={() => abrirCanal(canal.endereco)} style={styles.card}>
      <View style={styles.icone}><SymbolView name={canal.icone} size={26} tintColor={colors.blue} /></View>
      <View style={styles.textos}><Text style={styles.titulo}>{canal.titulo}</Text><Text style={styles.descricao}>{canal.descricao}</Text>{!canal.endereco ? <Text style={styles.pendente}>Em breve</Text> : null}</View>
      {canal.endereco ? <Text style={styles.seta}>↗</Text> : null}
    </Pressable>)}</View>
  </ScreenContainer>;
}

const styles = StyleSheet.create({ lista: { gap: 14 }, card: { backgroundColor: colors.surface, borderRadius: 18, padding: 20, flexDirection: 'row', alignItems: 'center', gap: 16, minHeight: 88 }, icone: { width: 48, height: 48, borderRadius: 14, backgroundColor: colors.lightYellow, alignItems: 'center', justifyContent: 'center' }, textos: { flex: 1, gap: 4 }, titulo: { color: colors.blue, fontSize: 18, fontWeight: '700' }, descricao: { color: colors.text, fontSize: 15, lineHeight: 21 }, pendente: { color: colors.muted, fontSize: 13 }, seta: { color: colors.blue, fontSize: 22 } });
