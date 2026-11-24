import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '@/constants/colors';

const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
type Props = { palavra: string; tentativas: string[]; terminou: boolean; onLetra: (letra: string) => void };
export function GameKeyboard({ palavra, tentativas, terminou, onLetra }: Props) {
  return <View style={styles.keyboard}>{letras.map(letra => {
    const usada = tentativas.includes(letra);
    const correta = usada && palavra.includes(letra);
    const incorreta = usada && !correta;
    return <Pressable key={letra} accessibilityRole="button" accessibilityLabel={`Letra ${letra}${correta ? ', correta' : incorreta ? ', incorreta' : ''}`} accessibilityState={{ disabled: usada || terminou }} disabled={usada || terminou} onPress={() => onLetra(letra)} style={[styles.key, correta && styles.correct, incorreta && styles.wrong]}><Text style={[styles.keyText, usada && styles.usedText]}>{letra}</Text></Pressable>;
  })}</View>;
}
const styles = StyleSheet.create({ keyboard: { flexDirection: 'row', flexWrap: 'wrap', gap: 6, justifyContent: 'center' }, key: { minWidth: 44, height: 48, flexBasis: '13%', flexGrow: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 10, backgroundColor: colors.lightBlue }, correct: { backgroundColor: '#167468' }, wrong: { backgroundColor: '#ad3d35' }, keyText: { color: colors.blue, fontSize: 16, fontWeight: '700' }, usedText: { color: colors.white } });
