import { Header } from '@/components/Header';
import { ProjectCard } from '@/components/ProjectCard';
import { ScreenContainer } from '@/components/ScreenContainer';
import { projetos } from '@/data/curriculo';
export default function Projetos() { return <ScreenContainer><Header eyebrow="Portfólio" title="Projetos" subtitle="Alguns trabalhos que fiz durante os estudos." />{projetos.map(projeto => <ProjectCard key={projeto.titulo} projeto={projeto} />)}</ScreenContainer>; }
