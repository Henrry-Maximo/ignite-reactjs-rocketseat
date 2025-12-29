# React

- Biblioteca de interfaces, para qualquer dispositivo, sendo web, mobile, vr, tv;
- Interação do usuário;

## Frameworks (base como react):
- Remix
- Next
- Redwoord
- Blitz
- VueJS
- AngularJS
- Svelte

## História:
- A partir da decada de 80, os sites eram totalmente estáticos, não tendo diferenciação
de conteúdo para quem estava acessando. A partir de 2000, houve-se o nascimento da web
2.0, que estabeleceu páginas dinâmicas.

# Rendering Patterns
- Padrões de renderização de conteúdo
- https://javascriptpatterns.vercel.app/patterns/react-patterns/hooks-pattern

# Estrutura de dados:
- JSON (JavaScript Object Notation)
- Trafegar dados entre duas pontas

## SPA (single page application):
- O browser solicita a página, porém o backend (sevidor) se encarrega apenas de
processar os dados e encaminhar, em um formato específico, para a segunda aplicação,
sendo o frontend. Ou seja, duas aplicações, uma para processar os dados e a segunda
para obter e converter os dados para HTML.
- Podendo também, ter múltiplos frontends consumindo o mesmo backend. Assim só tendo
que construir o front para o cliente.
- O JavaScript é o responsável pela construção do frontend, tendo total controle da 
interface.
- Se desativar o JavaScript, a interface ficará em branco totalmente.

## SSR (single page application):
- Padrão tradicional utilizado na web;
- O browser realiza a solicitação da página (requisição), e o servidor processa
e encaminha os arquivos montados (compilados) para o navegador do cliente;

## Compilers (compiladores):
- Converter o código de um formato para outro, por exemplo, o navegador não suporta
alguma funcionalidade existe na última versão do JavaScript, nesta etapa, precisamos
converter o código para uma versão que o Browser consiga compreender
- Babel is A JavaScript Compiler: https://babeljs.io/
  - Converte o código fonte para ser compatível com todos os navegadores.
  - Um pouco lento quando comparado a outros compiladores.

## Bundle (mesclar arquivos em um só):
- Contexto: Browser não compreender importação/exportação na linguagem JavaScript,
então utiliza-se a ferramenta para mesclar em um único arquivo todos os arquivos
js.
- Webpack: https://webpack.js.org/
  - Entender as importações/exportações e mesclar tudo somente em um arquivo;

### Browser (suporte nativo p/ importação/exportação de múltiplos arquivos)
- Checar se há compatibilidade dos browsers na compreensão da leitura dos arquivos
js
- Caniuse (versões e compatibilidade): https://caniuse.com/es6-module
- Contexto: por causa das atualizações, não há necessidade de utilizar o Webpack,
sendo ele ruim para a aplicação, pois sua execução é bem lenta. Prejudicando o
fluxo de desenvolvimento.

## ViteJS & Snowpack:
- Bibliotecas famosas para o desenvolvimento do front utilizando React, mas sem
precisa configurar bunding e compiler. De forma nativa, ele utiliza o ESM para
cuidar das importações/exportações (browsers tem suporte), e possui um compilador
próprio, que se recarrega de converter o código para uma sintaxe legível ao nave
gador.
- O snowpack é extremamente igual ao ViteJS, porém o vite possuí maior aderência
de público.
- https://www.snowpack.dev/
- https://vite.dev/

## Gerenciamento de versões do NPM
- https://github.com/tj/n
- https://github.com/nvm-sh/nvm

## React - Conceitos:
- Fast Refresh: permite que você visualize em tempo real as alterações no código
sendo refletidas na interface do usuário via browser, ou qualquer outro meio
que esteja utilizando para realizar o acesso (https://reactnative.dev/docs/fast-refresh).

## React - Limpeza do Projeto:
- Dentro de "src", apagar todos os arquivos com extensão: css e svg. Mantendo apenas
"App"e "main";
- Dentro do "main", remove importação do css;
- Dentro de "App" remove a importação do css/svg;
- Dentro de "App", remover todo o HTML dentro do return e inserir o que deseja;
- Dentro de "App", remover useState ou qualquer outro código relacionado;

## React - Renderização de Conteúdo:
```
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.tsx"></script>
  // type="module" - ViteJS utilizada deste paramêtro para tratar das  importações/exportações
  // src="/src/main.tsx" - Primeiro arquivo que será executado
</body>
```

```
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// Apenas a importações do React, simboliza o core. No caso, onde teremos as funcionalidades
que serão compartilhadas entre todos os clientes.
// A importação do ReactDOM serve para estabelecer a comunicação das funcionalidades
do React com a DOM (Document Object Model) - Fazer o React funcionar na Web.

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


// document.getElementById('root')! : pegar o elemento raiz do documento afirmando que existe
```

### React - CSS Modules
- Solução para evitar conflitos de CSS entre componentes (escopo local)
- Cada classe CSS é automaticamente renomeada com um hash único
- Nomenclatura: `ComponentName.module.css`

#### Como funciona:
```css
/* Button.module.css */
.container {
  background: blue;
  padding: 1rem;
}

.primary {
  background: green;
}
```

```jsx
// Button.jsx
import styles from './Button.module.css'

export function Button() {
  return (
    <button className={styles.container}>
      Botão
    </button>
  )
}
```

#### Vantagens:
- **Escopo local**: estilos não vazam para outros componentes
- **Nomes únicos**: classes são renomeadas automaticamente (ex: `Button_container__2x3kl`)
- **Composição**: `className={`${styles.container} ${styles.primary}`}`
- **Conditional styling**: `className={isActive ? styles.active : styles.inactive}`

#### Convenções:
- Use camelCase para nomes de classes: `.primaryButton` em vez de `.primary-button`
- Organize por componente: cada componente tem seu próprio arquivo `.module.css`
- Combine com CSS global quando necessário

## CSS Global no React
- Estilos compartilhados entre todos os componentes
- Arquivo: `global.css` (importado no `main.tsx`)

### Reset CSS básico:
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box; /* padding/border não aumentam largura/altura */
}
```

### Variáveis CSS (Custom Properties):
```css
:root {
  --white: #fff;
  --gray-100: #e1e1e6;
  --gray-300: #c4c4cc;
  --green-500: #00875f;
}

body {
  background-color: var(--gray-900);
  color: var(--gray-300);
}
```

### Fontes externas (Google Fonts):
1. **HTML**: adicionar links de preconnect ANTES de outros recursos
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
```

2. **CSS**: aplicar em elementos que não herdam do body
```css
body, input, textarea, button {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem; /* unidade relativa para acessibilidade */
}
```

### Dicas importantes:
- **Unidades relativas**: use `rem` em vez de `px` para acessibilidade
- **Font smoothing**: `-webkit-font-smoothing: antialiased` para fontes mais nítidas
- **Nomenclatura de cores**: sistema numérico (100-900) do claro ao escuro
- **Preconnect**: otimiza carregamento de fontes externas