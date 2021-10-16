# CURSO: Tecnologia em Análise e Desenvolvimento de Sistemas

## DISCIPLINA: Programação para Web

## Profa. Me.: Janaine C. S. Arantes

### Tarefa 07: Aula 07

1. Crie uma aplicação React com um componente de classe chamado "App", que contenha:
• Método "constructor", utilizando o objeto state com as seguintes chaves e valores:
nome: "<'seu nome>", sobrenome: "seu sobrenome>"
• Método "render" para renderizar na tela do browser:
Um botão com o evento de "clique", chamado "Alterar", para chamar a função 
"alterarNomeCompleto".
Nome: <'Mostrar nome>
 Sobrenome: <'Mostrar sobrenome>
• Arrow function "alterarNomeCompleto", que altere o valor do objeto state com um outro 
nome e sobrenome.

2. Crie uma aplicação React com dois componentes de classe chamados "Nome" e "App", que 
contenham:
Componente "Nome":
• Método "constructor", utilizando o objeto state com a seguinte chave e valor:
Nome: this.props.nome_inicial, com os valores: "Janaine", "Ana", "Maria" a cada chamada.
• Método "render" para renderizar na tela do browser:
Nome: {this.state.nome}
• Um botão com o evento de "click", chamado "Alterar", para chamar a função "cmd_click", 
que altera o valor do objeto state para this.props.nome_final, com os seguintes valores: 
"Cristiane", "Clara", "Eduarda") a cada chamada.
Componente "App":
• Método "render" para renderizar na tela do browser:
<'h3>Exercício 2</'h3>
 O componente "Nome" deve ser reutilizado 3x.