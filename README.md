# Currículo e Portfólio — Nina Lira

Aplicativo de currículo e portfólio desenvolvido para a disciplina de Programação Web-Mobile do curso de Ciência da Computação da Universidade Católica de Pernambuco.

O projeto adapta para dispositivos móveis um portfólio originalmente criado em Next.js. O objetivo da migração foi apresentar o currículo, os projetos e o Jogo da Forca em uma interface nativa construída com React Native e Expo.

## Tecnologias

- React e React Native
- Expo SDK 58 e Expo Router
- TypeScript
- Expo Symbols, para ícones
- React Native Safe Area Context, para respeitar as áreas seguras da tela

## Funcionalidades

- Apresentação pessoal, habilidades e trajetória acadêmica.
- Telas de experiência acadêmica e profissional e informações sobre o aplicativo.
- Portfólio com cinco projetos.
- Jogo da Forca com palavras da área de tecnologia.
- Canais de contato: GitHub, LinkedIn e e-mail.

## Organização das pastas

```text
src/
  app/          telas e navegação com Expo Router
  components/   componentes reutilizáveis
  constants/    cores e outras constantes
  data/         dados do currículo e dos projetos
assets/         imagens e ícones do aplicativo
```

## Instalação e execução

É necessário ter o Node.js e o npm instalados. Na pasta do projeto, execute:

```bash
npm install
npx expo start
```

O terminal exibirá um QR Code e as opções de execução. Para verificar os tipos do TypeScript:

```bash
npx tsc --noEmit
```

## Testar no Expo Go

Instale o Expo Go no celular, inicie o projeto com `npx expo start` e abra o QR Code exibido no terminal. No iPhone, use a câmera para ler o código; no Android, use o leitor do Expo Go.

O computador e o celular geralmente devem estar na mesma rede. Se houver dificuldade de conexão, inicie o projeto em modo Tunnel:

```bash
npx expo start --tunnel
```

## Publicação

Link da publicação no Expo: a adicionar posteriormente.
