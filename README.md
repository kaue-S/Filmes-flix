# Filmes flix

App nativo multiplataforma criado com React Native e expo.

## Branch 06

- Cadastro na PI TheMovieDB
- Criação de uma chavr de API (API Key)
- Configuração de variável ambiente através do arquivo `.env` contendo a API Key via Expo. (Arquivo ENV são ignorados no versionamento)

### Consumo de dados da API

- instalação da lib **AXIOS**
- COnfiguração do `Services/api-moviedb.js` contendo a programação básica de acesso à API para uso em diferentes partes do app.

## Branch 05

- Componentes/Recursos nativos: `TextInput`, ` Vibration`, e `Alert`
- Eventos: `onChangeText` no `TextInput` para captura em tempo real do nome do filme digitado e atualização no `state`.
- `onPress` no `button` para acionamento da função `buscarFilmes`
- `onSubmitEditing` no `TextInput` para acionamento da função `buscarFilmes`

## Branch 04

Para genrenciar ps recursos de navegação é necessário usar uma biblioteca de navegação.

As mais cinhecidas são a **React Navigation** e a **Expo Router**.

Atualmente a biblioteca mais usada e considerada padrão é a **react navigator**.

### Como usar o React navigator com navegação Stack

#### Pacotes de instalação

React Navigation: `npm install @react-navigation/native`

Dependências para navegação:

`npx expo install react-native-screens react-native-safe-area-context`

Mecanismo de navegação: `npm install @react-navigation/native-stack`

## Branch 03

- Criação das telas básicas: sobre e privacidade.
- Componente `ScrollView` para contaúdos maiores que a tela com suporte à rolagem
- Componente `Linking` para criação de link para a web.

## Dica

Instale a extensão **ES7+ React...** no vscode para facilitar a programação de componentes.

## Branch 2

### Utilização de fontes adicionais

- Download dos arquivos de fonte(formato TTF ou OTF)
- Colocação na pasta `assets\fonts`
- Instaação das libs `expo-fonts` e `expo-splash-screen`
- Importação das fontes com auxilio os `hooks` `useFonts` e `useCallback`.
- Aplicação das fontes usando regras de StyledSheet.
