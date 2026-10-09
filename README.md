# VetorGames: Catálogo de Produtos

Projeto Integrador da disciplina **Front-End Frameworks** (2026.2), curso de Análise e Desenvolvimento de Sistemas.

## Integrantes

| Nome completo | GitHub |
| --- | --- |
| Mateus Henrique Trajano Da Silva Pessoa| @mateustrajano05 |
| Lucas Matheus Silva Gomes | @lucasmatheuslmsg |
| Vinícius Tavares Alves | @viniciustavaresalves19 |
| Pedro Fellipe Paixão de Araújo Cintra | @pedrofcintra1-ai |
| Felipe | @usuario-github |

## Descrição

A VetorGames é uma loja fictícia de games. O projeto é um catálogo de produtos em uma página web, que apresenta os jogos de forma organizada e deixa o usuário interagir com a lista.

- **Problema escolhido:** apresentar os produtos de uma pequena loja de games em uma interface clara e funcional (Cenário B, Catálogo de produtos).
- **Usuários:** pessoas que querem ver os produtos da loja, comparar categorias e preços e encontrar um jogo específico.
- **Necessidades identificadas:** informações dos produtos organizadas, dados fáceis de ler (nome, categoria e preço), busca ou filtro para achar itens rápido e uma interface que responda às ações do usuário sem recarregar a página.

A proposta não é uma loja virtual completa. É uma aplicação pequena, feita só com HTML, CSS e JavaScript, para demonstrar os fundamentos das Unidades I e II.

## Funcionalidades

- Exibição da lista de produtos com nome, categoria e preço.
- Pesquisa ou filtro de produtos.
- Interação do usuário com os produtos.
- Atualização dinâmica da interface conforme a interação, sem recarregar a página.

## Tecnologias utilizadas

- **HTML5:** estrutura e conteúdo da página.
- **CSS3:** layout, cores e responsividade. As cores ficam centralizadas em variáveis no seletor `:root`, o que facilita a manutenção e a padronização.
- **JavaScript:** variáveis, funções, arrays, objetos, condicionais, manipulação do DOM e eventos.
- **Git e GitHub:** versionamento, branches e entrega.

Não foram usados frameworks, bibliotecas, back-end, banco de dados nem APIs externas, conforme o escopo da atividade.

## Estrutura do projeto

```
/
├── vetor_games.html
├── vetor_style.css
├── vetor_script.js
├── logo_vetor.png
└── README.md
```

- `vetor_games.html`: estrutura da página.
- `vetor_style.css`: estilos da interface.
- `vetor_script.js`: lógica do catálogo (dados dos produtos, filtro e interações).
- `logo_vetor.png`: logotipo da loja.

## Como executar

1. Baixe ou clone o repositório:
   ```
   git clone https://github.com/lucasmatheuslmsg/vetor-games.git
   ```
2. Abra a pasta do projeto.
3. Dê um duplo clique em `vetor_games.html` para abrir no navegador.

Não é preciso instalar nada nem ter servidor.

## Decisões de desenvolvimento

- **Empresa fictícia:** a VetorGames dá um contexto prático ao catálogo e mantém o projeto numa escala compatível com o prazo de uma semana.
- **Só HTML, CSS e JavaScript:** o grupo quis mostrar domínio dos fundamentos antes de avançar para React.
- **Cores com `:root`:** as cores ficam em um só lugar e podem ser alteradas sem mexer no resto do CSS.
- **Arquivos separados:** HTML, CSS e JavaScript ficam em arquivos próprios, para organizar e facilitar a manutenção.
- **Produtos em um array de objetos:** os dados ficam separados da interface, e o JavaScript monta a lista na tela a partir deles.

### Dificuldades e soluções

Houve falhas durante o desenvolvimento. O grupo abriu o site e testou as funcionalidades de forma contínua, revisou o código e corrigiu os problemas encontrados. Nas dúvidas de lógica de programação, usou ferramentas de IA como apoio (veja abaixo), sempre revisando e adaptando as sugestões.

### Uso de IA

O grupo consultou Claude e ChatGPT para tirar dúvidas de lógica e entender o funcionamento do código, com perguntas como "como posso solucionar esse problema?" e "o que isso faz?". As respostas foram revisadas e adaptadas pelo grupo.

### Melhorias futuras

- Mais produtos e organização mais completa do catálogo.
- Novas formas de interação com os produtos.
- Componentização e, em uma versão maior, adoção de React ou Vue.
- Persistência de dados, back-end e integração com APIs, se o projeto crescer.

## Comparação tecnológica

### Por que HTML, CSS e JavaScript foram suficientes?

O catálogo é pequeno e roda inteiro no navegador, sem back-end, banco de dados, login ou APIs. O HTML estruturou a página, o CSS cuidou da aparência e da adaptação a diferentes telas, e o JavaScript fez a lista, o filtro e a interação funcionarem, atualizando o DOM a partir de eventos. Tudo isso é compatível com o nível das Unidades I e II.

### O que poderia mudar com React?

1. **Componentes reutilizáveis:** card de produto, barra de busca e lista virariam componentes isolados, reaproveitados em outras telas.
2. **Estado gerenciado pelo framework:** hoje o JavaScript altera o DOM manualmente. No React, a interface se atualizaria a partir do estado (por exemplo, o texto da busca ou o filtro selecionado).
3. **Melhor escala:** com várias telas (carrinho, detalhes do produto), o React organiza o código melhor do que muitos arquivos de manipulação direta do DOM.

### React seria necessariamente a melhor escolha?

Não. Para uma aplicação pequena, de uma tela e poucas funcionalidades, o React acrescentaria configuração, ferramentas e conceitos que não trazem ganho real agora. O JavaScript puro é mais simples e suficiente para esse tamanho. O React passaria a valer a pena se a VetorGames crescesse, com mais telas, componentes repetidos, regras de interação e necessidade de manutenção contínua.

### E Vue ou Angular?

O Vue seria uma alternativa válida: tem componentes, uma curva de aprendizado suave e funcionaria bem numa evolução do catálogo. O Angular também serviria, mas é mais indicado para projetos grandes que precisam de estrutura completa e padronizada, o que seria exagero aqui. Para a versão atual, nenhum dos dois é necessário. A escolha deve depender do contexto, não de achar que uma tecnologia é melhor que as outras.
