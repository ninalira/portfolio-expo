import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Header } from '@/components/Header';
import { ScreenContainer } from '@/components/ScreenContainer';
import { GameKeyboard } from '@/components/GameKeyboard';
import { colors } from '@/constants/colors';

const PALAVRAS = ['REACT', 'JAVASCRIPT', 'PYTHON', 'HTML', 'CSS', 'PROGRAMACAO', 'COMPUTADOR', 'TECLADO', 'MONITOR', 'INTERNET', 'ALGORITMO', 'VARIAVEL', 'FUNCAO', 'OBJETO', 'ARRAY', 'NAVEGADOR', 'SERVIDOR', 'BANCO', 'FRAMEWORK', 'BIBLIOTECA', 'COMPONENTE', 'ESTADO', 'PROPRIEDADE', 'INTERFACE', 'USUARIO', 'APLICATIVO', 'SISTEMA', 'REDE', 'SOFTWARE', 'HARDWARE', 'DESENVOLVEDOR', 'CODIGO', 'DEBUG', 'GITHUB', 'TERMINAL', 'LINGUAGEM', 'LOGICA', 'ROTEADOR'];
const MAX_ERROS = 6;
function sortearPalavra() { return PALAVRAS[Math.floor(Math.random() * PALAVRAS.length)]; }

export default function Jogo() {
  const [palavra, setPalavra] = useState(sortearPalavra);
  const [tentativas, setTentativas] = useState<string[]>([]);
  const erros = tentativas.filter(letra => !palavra.includes(letra)).length;
  const venceu = palavra.split('').every(letra => tentativas.includes(letra));
  const perdeu = erros >= MAX_ERROS;
  const terminou = venceu || perdeu;
  function tentarLetra(letra: string) {
    if (terminou || tentativas.includes(letra)) return;
    setTentativas(atuais => atuais.includes(letra) ? atuais : [...atuais, letra]);
  }
  function reiniciar() { setPalavra(sortearPalavra()); setTentativas([]); }
  const revelada = palavra.split('').map(letra => tentativas.includes(letra) || terminou ? letra : '_');
  return <ScreenContainer><Header eyebrow="Projeto" title="Jogo da Forca" subtitle="Adivinhe a palavra. Você pode errar até seis letras." />
    <View style={styles.board}><Text accessibilityLabel={`Palavra: ${revelada.join(' ')}`} style={styles.word}>{revelada.join(' ')}</Text><Text style={styles.count}>Tentativas restantes: {MAX_ERROS - erros} de {MAX_ERROS}</Text>
      {terminou ? <Text accessibilityLiveRegion="polite" style={[styles.message, venceu ? styles.win : styles.loss]}>{venceu ? 'Parabéns, você acertou!' : 'Você perdeu!'} A palavra era {palavra}.</Text> : null}
      <Pressable accessibilityRole="button" onPress={reiniciar} style={styles.button}><Text style={styles.buttonText}>{terminou ? 'Jogar novamente' : 'Reiniciar'}</Text></Pressable>
    </View>
    <View style={styles.section}><Text accessibilityRole="header" style={styles.title}>Escolha uma letra</Text><GameKeyboard palavra={palavra} tentativas={tentativas} terminou={terminou} onLetra={tentarLetra} /></View>
    <View style={styles.section}><Text accessibilityRole="header" style={styles.title}>Letras já tentadas</Text>{tentativas.length === 0 ? <Text style={styles.text}>Nenhuma letra tentada ainda.</Text> : <View style={styles.history}>{tentativas.map(letra => <Text key={letra} style={[styles.historyLetter, { color: palavra.includes(letra) ? '#167468' : '#ad3d35' }]}>{letra}</Text>)}</View>}</View>
  </ScreenContainer>;
}
const styles = StyleSheet.create({ board: { backgroundColor: colors.surface, borderRadius: 20, padding: 20, gap: 16, alignItems: 'center' }, word: { color: colors.blue, fontSize: 21, fontWeight: '800', textAlign: 'center', lineHeight: 34 }, count: { color: colors.text, fontSize: 15, fontWeight: '700' }, message: { textAlign: 'center', fontSize: 16, lineHeight: 23, fontWeight: '700' }, win: { color: '#167468' }, loss: { color: '#ad3d35' }, button: { minHeight: 48, paddingHorizontal: 22, justifyContent: 'center', borderRadius: 12, backgroundColor: colors.yellow }, buttonText: { color: colors.blue, fontWeight: '700' }, section: { gap: 12 }, title: { color: colors.blue, fontSize: 19, fontWeight: '700' }, text: { color: colors.muted, fontSize: 15 }, history: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 }, historyLetter: { fontSize: 18, fontWeight: '700' } });
