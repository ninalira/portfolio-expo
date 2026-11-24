import { Header } from '@/components/Header';
import { ScreenContainer } from '@/components/ScreenContainer';
import { ExperienceCard } from '@/components/ExperienceCard';
export default function ExperienciaProfissional() {
  return <ScreenContainer><Header eyebrow="Minha trajetória" title="Experiência Profissional" /><ExperienceCard titulo="Primeira oportunidade" descricao="Atualmente busco minha primeira oportunidade de estágio na área de tecnologia." /></ScreenContainer>;
}
