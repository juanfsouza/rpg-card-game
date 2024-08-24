# Projeto: Game Character Manager

### Visão Geral do Projeto
O Game RPG de Cartas é um aplicativo React desenvolvido para gerenciar personagens em um jogo, permitindo ao usuário selecionar personagens, gerenciar atributos como vida e mana, e realizar ações como comprar cartas e curar personagens.

![Screenshot_1](https://github.com/user-attachments/assets/8a2e178e-05e4-4a46-a4f4-db98925e686e)

### Tecnologias Utilizadas

- React: Biblioteca JavaScript para construção da interface de usuário.
- TypeScript: Superset de JavaScript que adiciona tipos estáticos.
- Redux: Biblioteca para gerenciamento de estado global da aplicação.
- Styled-components: Biblioteca para estilização de componentes React usando CSS-in-JS.
- React-Redux: Integração do Redux com o React.
- Vite: Ferramenta de build que fornece um ambiente de desenvolvimento rápido.

### Estrutura do Projeto
O projeto segue uma estrutura baseada em componentes e organização por funcionalidade:

- uncionalidades Implementadas
- Seleção de Personagens: Usuários podem escolher entre diferentes personagens (Rogue, Warrior, Mage, Druid).
- Barra de Vida e Mana: Exibe o status de vida e mana dos personagens selecionados.

### Ações de Personagem:
- Curar Personagem: Aumenta o nível de vida do personagem.
- Comprar Cartas: Permite que o usuário compre cartas para o personagem.

### Como Funciona
- Seleção de Personagem: A tela inicial permite ao usuário escolher entre os personagens disponíveis. Ao selecionar um personagem, ele é armazenado no estado global (Redux) e pode ser usado em outras partes do aplicativo.
- Barra de Vida e Mana: Cada personagem tem atributos de vida e mana. As barras são renderizadas utilizando o mesmo componente StatusBar, que ajusta a largura com base nos valores atuais e máximos.

### Ações:
- Curar Personagem: Ação que aumenta a vida do personagem selecionado. Esta funcionalidade é acionada em um componente chamado CampFire.
- Comprar Cartas: Ação que permite a compra de cartas, gerida no componente Shop.

## Como Instalar e Rodar o Projeto
### Pré-requisitos
- Node.js (v14.0.0 ou superior)
- npm (v6.0.0 ou superior)
- Passos para Instalação
- Clonar o Repositório

### Copiar código

  ```sh
  git clone https://github.com/juanfsouza/rpg-card-game
  cd rpg-card-game
  ```
### Instalar as Dependências

  ```sh
  npm install
  ```

### Iniciar projeto

  ```sh
  npm start
  ```

### Contribuição
Se você deseja contribuir para este projeto, siga as etapas abaixo:

- Fork o Repositório
- Crie uma Branch para a Nova Funcionalidade (git checkout -b feature/nova-funcionalidade)
- Commit as Suas Alterações (git commit -m 'Adiciona nova funcionalidade')
- Envie para a Branch (git push origin feature/nova-funcionalidade)
- Abra um Pull Request
