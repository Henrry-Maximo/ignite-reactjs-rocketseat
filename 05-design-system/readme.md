
# Design System:

- Elementos visuais que podem ser compartilhados entre qualquer aplicação da empresa;
- Elementos que não podem, são enquadrados como UIKit.
- Os componentes das aplicações devem ser deagnostico de tecnologia (o quanto possível for)
  - SolidJS: escrever um componente, e usar em qualquer framework UI.

# Components

- [ ] Text
- [ ] Heading
- [ ] Box
- [ ] Button
- [ ] TextInput
- [ ] TextArea
- [ ] Checkbox
- [ ] Avatar
- [ ] MultiStep

- Tokens: variáveis de estilização que podem ser compartilhadas entre aplicações, como tamanho de texto e fonte.

# Configuração

- npm init -y (inicializar package.json)
- npm i -D typescript (instalar typescript pra criar tsconfig)
- npx tsc --init (criar tsconfig)
- npx tsc (gerar build - js)
- npm i tsup -D (gerar build - mas pode gerar em vários formatos: aplicações antigas e novas)