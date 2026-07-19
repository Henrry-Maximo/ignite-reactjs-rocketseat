# 01 · Github Explorer

Projeto introdutório do bootcamp **Ignite ReactJS 2021** da Rocketseat.  
O objetivo é entender como o ecossistema React funciona **do zero**, sem Create React App ou Vite — configurando manualmente o Babel e o Webpack.

---

## Tecnologias

| Ferramenta | Versão | Para que serve |
|---|---|---|
| React | 17.0.1 | Biblioteca de UI |
| React DOM | 17.0.1 | Renderiza o React no browser |
| Webpack | 5 | Empacota todos os arquivos em um único bundle |
| Webpack Dev Server | 6 | Servidor local com hot reload |
| Babel | 8 | Transpila JSX e JS moderno para JS compatível com browsers |
| babel-loader | 10 | Integra o Babel ao Webpack |
| css-loader | 7 | Permite importar arquivos `.css` dentro do JS |
| style-loader | 4 | Injeta o CSS importado no `<head>` do HTML |
| html-webpack-plugin | 5 | Gera o `index.html` final já com o `<script>` do bundle |
| cross-env | 7 | Define variáveis de ambiente de forma cross-platform |

---

## Estrutura de pastas

```
01-github-explorer-21/
├── public/
│   └── index.html          # Template HTML base
├── src/
│   ├── styles/
│   │   └── global.css      # Reset e estilos globais
│   ├── App.jsx             # Componente raiz da aplicação
│   └── index.jsx           # Entry point — monta o React no DOM
├── .gitignore
├── babel.config.js         # Configuração do Babel
├── package.json
└── webpack.config.js       # Configuração do Webpack
```

---

## Como rodar

### Scripts disponíveis

```bash
# Servidor de desenvolvimento com hot reload (recomendado para desenvolver)
pnpm run dev:watch

# Gera o bundle em modo desenvolvimento (sem servidor)
pnpm run dev

# Gera o bundle otimizado para produção
pnpm run build
```

Após rodar `dev:watch`, acesse: **http://localhost:8080**

---

## Como o projeto funciona

### O fluxo completo

```
src/index.jsx  →  Babel (transpila JSX)  →  Webpack (empacota)  →  bundle.js  →  browser
```

1. O Webpack lê o `src/index.jsx` como entry point
2. Encontra todos os `import`s e resolve as dependências
3. Passa cada arquivo `.jsx` pelo Babel via `babel-loader`
4. O Babel converte JSX e sintaxe moderna em JS que o browser entende
5. O Webpack junta tudo em um único `dist/bundle.js`
6. O `html-webpack-plugin` injeta o `<script src="bundle.js">` no `index.html` automaticamente

---

## Explicação de cada arquivo

### `public/index.html`

Template HTML que serve de base para a aplicação.

```html
<div id="root"></div>
```

Esse `<div id="root">` é o único elemento relevante — é onde o React vai injetar toda a aplicação. A tag `<script>` do bundle **não precisa** ser adicionada manualmente, o `html-webpack-plugin` faz isso automaticamente no build.

---

### `src/index.jsx`

Entry point da aplicação. É o primeiro arquivo que o Webpack lê.

```jsx
import { render } from 'react-dom';
import { App } from './App';

render(<App />, document.getElementById('root'))
```

- Importa a função `render` do `react-dom`
- Importa o componente `App`
- Chama `render(<App />, elemento)` para montar a aplicação dentro do `<div id="root">`

> **Por que não precisa importar React?**  
> O `babel.config.js` usa `runtime: 'automatic'`, que injeta o import do React automaticamente em cada arquivo JSX. Por isso não é necessário escrever `import React from 'react'` manualmente.

---

### `src/App.jsx`

Componente raiz da aplicação. Todo o conteúdo visual parte daqui.

```jsx
import './styles/global.css';

export function App() {
  return (
    <h1>Helllo</h1>
  )
}
```

- Importa o CSS global (o Webpack processa via `css-loader` + `style-loader`)
- Exporta a função `App` como um componente React
- Retorna JSX — que o Babel converte em chamadas `React.createElement()` por baixo dos panos

---

### `src/styles/global.css`

Reset de estilos aplicado globalmente na aplicação.

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font: Arial, Helvetica, sans-serif;
}
```

- Remove margens e paddings padrão do browser
- Define `box-sizing: border-box` para que padding e border não aumentem o tamanho dos elementos
- Define a fonte padrão do projeto

---

### `babel.config.js`

Configura como o Babel transpila o código.

```js
module.exports = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', {
      runtime: 'automatic'
    }]
  ]
}
```

- `@babel/preset-env` — converte sintaxe JS moderna (arrow functions, optional chaining, etc.) para versões compatíveis com browsers mais antigos
- `@babel/preset-react` — converte JSX em JavaScript puro
- `runtime: 'automatic'` — elimina a necessidade de `import React from 'react'` em cada arquivo

---

### `webpack.config.js`

Coração da configuração do projeto. Define como o Webpack empacota tudo.

```js
module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    static: path.resolve(__dirname, 'public'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_module/,
        use: 'babel-loader'
      }
    ]
  }
};
```

| Propriedade | O que faz |
|---|---|
| `mode` | Define o ambiente (`development` ou `production`) |
| `devtool: 'eval-source-map'` | Gera source maps para facilitar o debug no browser |
| `entry` | Arquivo de entrada — onde o Webpack começa a ler |
| `output` | Onde e com qual nome salvar o bundle gerado |
| `resolve.extensions` | Permite importar arquivos sem escrever a extensão (ex: `import { App } from './App'`) |
| `devServer.static` | Pasta de arquivos estáticos servidos pelo servidor de dev |
| `HtmlWebpackPlugin` | Usa o `public/index.html` como template e injeta o bundle automaticamente |
| `module.rules` | Define que arquivos `.jsx` devem passar pelo `babel-loader` antes de serem empacotados |

---

### `.gitignore`

```
node_modules
dist
```

Ignora do Git as pastas `node_modules` (dependências, não devem ser versionadas) e `dist` (gerada automaticamente no build).

---

## Conceitos aprendidos neste módulo

- O que é e para que serve o **Babel**
- O que é e para que serve o **Webpack**
- Como configurar um projeto React **do zero**, sem boilerplate
- O que é um **entry point** e um **bundle**
- Como o JSX é transformado em JavaScript pelo Babel
- Como importar CSS dentro de componentes React via loaders
- Como funciona o **Webpack Dev Server** com hot reload
- O que é `runtime: 'automatic'` e por que elimina o `import React`
