import { ImageSourcePropType } from 'react-native';

export const habilidades = ['Java', 'React', 'Next.js', 'C/C++', 'Python', 'SQL', 'Lógica de programação', 'TypeScript', 'JavaScript'];
export const tecnologiasApp = ['React', 'React Native', 'Expo', 'Expo Router', 'Expo Symbols', 'React Native Safe Area Context', 'TypeScript'];
export const formacao = [
  { periodo: '2024.2 — atual', titulo: 'Ciências da Computação', local: 'Universidade Católica de Pernambuco', descricao: 'Cursando, com foco e dedicação.' },
  { periodo: '2020 — 2022', titulo: 'Ensino Médio', local: 'Colégio Marista São Luís', descricao: 'Formação concluída em 2022, já visando a área de tecnologia.' },
];
export const atividades = [
  { titulo: 'Programa de mentoria da Avanade', descricao: 'Durante o segundo período da graduação, fui mentorada por uma profissional da área, que me ajudou e guiou no início do curso.' },
  { titulo: 'Mentora no projeto Padawan na Unicap', descricao: 'Participei do projeto de extensão, mentorando duas calouras de Ciência da Computação e ajudando na adaptação à universidade e ao curso.' },
  { titulo: 'SWITAB — Supporting Women in Technology Across Borders', descricao: 'Participação em projeto de conexão entre mulheres da área, com mentoria, visitas a empresas de tecnologia e orientação de outras meninas.' },
];
export type Projeto = { titulo: string; descricao: string; tags: string[]; imagem?: ImageSourcePropType; icone?: 'moveis' | 'pizza' | 'veterinaria'; github?: string; deploy?: string };
export const projetos: Projeto[] = [
  { titulo: 'Jogo dos Dados', descricao: 'Projeto de aprendizado da disciplina de Programação Web-Mobile.', tags: ['Next.js', 'React'], imagem: require('../../assets/images/projects/projeto2.png') },
  { titulo: 'Projeto Qina Design', descricao: 'Projeto em grupo para criar uma aplicação web que melhore a comunicação da empresa com o cliente. Atuei como backend.', tags: ['JavaScript', 'HTML', 'CSS'], imagem: require('../../assets/images/projects/projeto4.jpeg') },
  { titulo: 'Projeto Acesso Inclusivo', descricao: 'Projeto de controle de acesso inclusivo na Universidade Católica de Pernambuco, para facilitar o acesso e promover autonomia a pessoas com deficiência nas catracas. Uma tranca automatizada é destravada por leitura de tags RFID.', tags: ['C', 'Arduino'], imagem: require('../../assets/images/projects/projeto1.png') },
  { titulo: 'Projeto Massa Mia', descricao: 'Sistema desenvolvido em grupo durante os estudos de Programação Web Mobile, para gestão de um delivery de pizza e eventos, com relatórios de desempenho.', tags: ['JavaScript', 'HTML', 'CSS'], imagem: require('../../assets/images/projects/projeto3.jpeg') },
  { titulo: 'Banco de dados para clínica veterinária', descricao: 'Banco de dados criado na disciplina de Projeto de Banco de Dados, da modelagem e verificação da normalização até a implementação no MySQL.', tags: ['MySQL'], icone: 'veterinaria' },
];
