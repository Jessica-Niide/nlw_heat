# NLW HEAT

### Trilha Origin - Crachá DoWhile

Projeto em desenvolvimento da **[NLW Heat da Rocketseat](https://nextlevelweek.com/inscricao/7)**: vamos desenvolver um crachá/cartão virtual de eventos que será utilizado no **[DoWhile](https://dowhile.io/convite/jessica-niide)**

![Imagem do crachá no figma](https://github.com/Jessica-Niide/nlw_heat/blob/master/extras/figma_example.png?raw=true)

<details>
<summary>Aula 1</summary>
    
## Fundamentos WEB

<details>
<summary>Javascript </summary>

- O Javascript (JS) é a linguagem de programação que usamos para deixar as aplicações dinâmicas.
- JS é processado nos navegadores para trazer a experiência de utilização da página para o cliente.
</details>

<br>
<details>
<summary>HTML - HyperText Markup Language</summary>

- HTML não possui lógica de programação, por isso não é uma linguagem de programação. É um conjunto de textos com tags, que serão interpretadas e traduzidas no navegador.
- As tags do HTML são indicadas entre `<>`, e indicam como o texto associado a essa tag deve ser interpretado. Por exemplo, a tag `<title>` traz o nome da página, que será exibido na aba do navegador.
- Exemplo de código HTML

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Jessica Niide - DoWhile 2021</title>
  </head>
  <body>
    <h1>Jessica Niide</h1>
    <a href="https://instagram.com/jessicaniide">@jessicaniide</a>
  </body>
</html>
```

- A tag `<!DOCTYPE html>` é especial e obrigatória, indica para o navegador que o documento está escrito em html5.
- Dentro da `<head>` vão informações sobre a página.
- Dentro do `<body>` vai o conteúdo da página.
</details>

<br>
<details>
<summary>CSS - Cascading Style Sheets</summary>

- CSS é a estilização do HTML
- A sintaxe do CSS é

```css
seletor {
  propriedade: valor;
}
```

- Exemplo real:

```css
h1 {
  font-size: 1.5rem;
}
```

- `h1` é o seletor. Todas as tags de html que forem iguais ao seletor receberam essa estilização. A propriedade que ele está recebendo é `font-size`, que será alterada para o valor de `1.5rem`. O CSS fecha o comando após o valor com ponto e vírgula `;`.
- Folha de estilo em cascata: a ordem de aparição dos elementos importa. Tem mais força o elemento que for colocado por último na estilização.

</details>

</details>

---

<details>
<summary>Aula 2</summary>
    
## Revisão dos conceitos da aula 1 e aprofundamento

Estilização da página finalizada!

![Imagem do crachá](https://github.com/Jessica-Niide/nlw_heat/blob/master/extras/aula2.png?raw=true)

<details>
<summary>HTML</summary>
Já vimos que o HTML é uma linguagem que contém marcações, as tags, e que cada tag tem o seu significado, que será traduzido pelo navegador. Ou seja, o html é o responsável pela estrutura das páginas, definindo quem são o título da página, os botões, as estruturas de textos (parágrafos, seções, cabeçalhos de seções), os links, as imagens, etc.

<details>
<summary>Estrutura das tags</summary>
    
As tags são as marcações que determinam qual a função do texto na página. As tags possuem a seguinte estrutura:
    
```html
<!-- As tags podem ter abertura e fechamento, o que acontece aqui, que ela aparece em par -->
<nome-da-tag atributos="valor">
Conteúdo
</nome-da-tag>

<!-- Tags também podem se fechar em si mesmo -->
<nome-da-tag  atributos="valor"/>
```

Os atributos são opcionais, e fornecem informações adicionais para as tags. Podem ser usados vários atributos em uma única tag.

As tags que não possuem conteúdo se fecham em si. É o caso, por exemplo, das tags `<img>` e `<link>`, que usamos no head.

O conteúdo da tag é o que será exibido para o cliente, dentro é claro daquele espaço que a tag indica. Então o conteúdo de uma tag `<button>` será o texto indicado no botão.

```html
<!DOCTYPE html>
<html>
  <body>
    <button>Conteúdo da tag</button>
  </body>
</html>
```

Na tela do navegador, vemos o seguinte resultado:

![Imagem do botão](https://github.com/Jessica-Niide/nlw_heat/blob/master/extras/button.png?raw=true)

Observação importante: dentro de uma tag podem ser colocadas outras tags. Esse é o conceito de aninhamento. No exemplo acima, a tag `<html>` está por fora de todas as outras, e se fecha após todas as outras. Depois temos a tag `<body>` e dentro dela vem a tag `<button>` completa.

</details>

<details>
<summary>Semântica</summary>

A semântica para a linguística está associada ao sentido, à função, de cada palavra em uma frase. Dentro do html 5 foram incluídas as tags semânticas, que possuem significados, facilitando a construção dos layouts das páginas.

Tags não semânticas, com a tag div, não trazem informação sobre o que será seu conteúdo. Qualquer coisa pode ser colocada dentro da div.

Já uma tag semântica, como a `<main>`, nos informa que é ali que estará o conteúdo principal da página.

```html
<div id="main">
  <p>
    Podemos colocar dentro da div o conteúdo da main, e indicar pelo id o que
    estamos fazendo. O problema é que a div em si não possui significado, e um
    leitor de tela ou ferramenta de pesquisa não vê o id "main" que foi dado à
    div, portanto ele não sabe que este é o conteúdo principal.
  </p>
</div>
<!-- Sem falar que toda div fecha igual! Imagina várias delas fechando no 
seu arquivo uma depois da outra /o\ -->

<main>
  <p>
    Se utilizarmos a tag main, o código fica mais direto, e todo mundo fica
    sabendo o que esperar dessa tag.
  </p>
</main>
```

Algumas tags semânticas são header, footer, aside, nav, figure.

Curiosidade - uma explicação muito legal (em inglês) sobre a diferença entre as tags `<figure>` e `<img>`: [https://www.geeksforgeeks.org/difference-between-figure-img-tags-in-html/](https://www.geeksforgeeks.org/difference-between-figure-img-tags-in-html/)

</details>

</details>

<br>
<details>
<summary>CSS</summary>

O estilo da página é definido pelo css. Cores, fontes, tamanhos, sombras, tudo isso é adicionado ao html pelo css.

Podemos adicionar estilo diretamente no arquivo com o html, dentro da tag `<style>`, mas a leitura fica mais limpa e organizada quando separamos a estilização em um arquivo próprio. Nesse caso, para que a página final receba essa estilização, utilizamos outra tag (`<link>`) que faz a ligação entre os dois arquivos.

<details>
    <summary>Estrutura de um arquivo .css</summary>

O arquivo de regras de estilização que vamos criar é basicamente uma lista de estilos que serão aplicados aos elementos html. No botão mostrado anteriormente, podemos aplicar a seguinte estilização:

```css
/* O símbolo * indica um seletor universal, ou seja, o arquivo inteiro recebe essas regras.
Body e button são os seletores das tags body e button, respectivamente, e as regras para eles serão aplicadas 
apenas a esses elementos. */
* {
  background: purple;
}

body {
  padding: 10pt;
  background: lightgoldenrodyellow;
}

button {
  border: 1px solid black;
  border-radius: 6px;
  padding: 5pt;
  color: white;
}
```

O resultado desse estilo é o seguinte:

![Imagem do botão com estilo](https://github.com/Jessica-Niide/nlw_heat/blob/master/extras/button_css.png?raw=true)

</details>

<details>
<summary>Cascata</summary>

Os estilos são aplicados em cascata, ou seja, os estilos definidos mais "baixo" tem mais força. No exemplo, a cor de fundo foi definida para todo o arquivo pelo seletor _, mas como definimos uma nova cor para o fundo do body, esse será o estilo que o body irá ter. O button não tem regra para cor de fundo, por isso ele está com o fundo roxo definido pelo _.

Podemos pensar que o estilo da página é aplicado lendo as regras css de cima para baixo. Assim, o fundo é pintado todo de roxo, depois o body recebe o padding e tem a cor de fundo alterada, e por último o botão recebe suas características.

</details>

<details>
<summary>Especificidade</summary>

É possível sobrescrever a cascata utilizando a especificidade. Quando precisamos escolher um elemento da página, ou um conjunto de elementos, para receber uma estilização diferente, podemos usar a especificidade. Podemos fazer isso por:

- Estilos inline: são declarações de estilo feitas pelo atributo style dentro da tag html. Ao indicar no arquivo html, dentro da tag do elemento o estilo que ele irá receber, essa regra será a mais forte de todas e prevalecerá. Evitamos misturar estilização na estrutura, por isso deve ser usada como último recurso.
- Seleção pelo id: dentro de qualquer tag do html, podemos passar um atributo `id="nome"`. Na folha de estilos, escolhemos o seletor de id utilizando `#nome`. Essa é a seleção mais forte que temos para a folha de estilos.
- Seleção pela classe: também como atributo da tag html, podemos passar uma classe com `class="nome"`. A seleção da classe no css é feita por `.nome`, e é mais fraca do que a seleção por id, mas é mais forte do que a seleção por elemento.
- Seleção por elemento: é a seleção mais fraca, que passa os estilos para o elemento utilizando o nome da tag.

Existem outras regras para selecionar elementos específicos dentro do css, como para escolher a primeira ocorrência de um elemento, ou a junção de elemento e classe para dar mais força ao estilo. Essas regras são aprendidas com a prática e alguma pesquisa. Alguns jogos também ajudam a entender melhor os seletores, como o CSS Diner ([https://flukeout.github.io/](https://flukeout.github.io/)).

</details>

<details>
<summary>Unidades de medida</summary>

Podemos usar diversas unidades de medida no css.

Algumas são unidades estáticas, como centimetros (cm), pixels (px), pontos (pt).

Outras são relativas, ou seja, podem variar de acordo com o tamanho da tela, o viewport (vh = viewport height = altura da tela, vw = viewport width = largura da tela), ou com o tamanho de fonte, o em (relativo ao tamanho da fonte do elemento pai) e o rem (relativo ao tamanho da fonto do root).

- Relativa x Estática
  A escolha pela unidade que será usada depende do que se vai estilizar. Se queremos que uma imagem ou logo, por exemplo, tenha um tamanho fixo, usamos unidades estáticas. Já se queremos definir que a imagem se molde para ocupar metade da tela, e não sabemos o tamanho da tela em que a página será aberta, empregamos as unidades relativas.

</details>

<details>
<summary>Box Model</summary>

Podemos pensar que para o css cada elemento que ele irá estilizar é uma caixa. Um parágrafo é uma caixa, uma div qualquer é uma caixa, um botão é uma caixa. Pensando nisso fica mais fácil entender o que é a margin e o padding, e como posicionar nossos elementos na página.

</details>

</details>
</details>

---

<details>
<summary>Aula 3</summary>

### Colocando lógica na página

<details>
<summary>Javascript</summary>

Javascript é a linguagem de programação que utilizamos no desenvolvimento web para conferir elementos dinâmicos às páginas.
O Javascript é lido e executado como lemos normalmente um texto ocidental, ou seja, o código é lido de cima para baixo, da esquerda para a direita. As intruções são executadas na ordem em que aparecem no cóodigo.

<details>
<summary>Os dados do Javascript</summary>

Para declarar um dado em Javascript, utilizamos a seguinte sintaxe:

```jsx
// A declaração é feita por:
// tipo nome-da-variável = valor
const tech = 'Javascript'

// Agora podemos usar a variável tech no programa.
console.log(tech)

// O comando acima irá exibir no console o valor que foi atribuído para tech, ou seja, irá escrever Javascript
```

- Tipos de variáveis

  - const: (= constante) indica que a variável receberá um valor uma única vez no programa e não poderá ser alterada.
  - let: (= modificável) indica que a variável poderá mudar de valor.

- Tipos de dados primitvos

  - String: é um dado de texto. Deve ser declarado entre aspas (duplas ou simples).
  - Number: é um dado de número, logo pode ser usado para realizar operações. Atenção: um número entre aspas é uma string, "1" é tratado como texto e 1 como número.
  - Boolean: os booleanos são os valores lógicos true (verdadeiro) ou false (falso).

- Tipos de dados estruturados
  - Objetos
    Um objeto é um conjunto de dados agrupados em uma única variável. Quando declaramos um objeto, devemos dizer quais são os dados que ele possui. A forma de declarar os dados em um objeto é diferente da declaração de dados primitivos, tendo a seguinte estrutura:
    ```jsx
    // Um objeto tem seus dados definidos entre chaves
    const objeto = {
      // Os dados aqui são da forma
      // nome-da-variável: valor
      // a vírgula separa um dado do seguinte
      tech: 'Javascript',
      aula: 3
    }
    ```

</details>

<details>
<summary>Funções</summary>

Funções são sequências de comandos que devem ser executadas em ordem para realizar uma tarefa. Para declarar uma função no Javascript, fazemos do seguinte modo:

```jsx
// Indicamos ao programa que se trata de uma função pela paralvra "function"
// Nomeamos a função e colocamos entre () os parâmetros que ela recebe
// Se não houver parâmetros, deixa-se () vazio
// Entre as chaves {} colocamos os comandos da função

function nome-da-função(parâmetros) {
  comandos;
}

// E para chamar a função, fazemos:
nome-da-função(parâmetros);
```

  </details>

  <details>
  <summary>Boas práticas de escrita</summary>
      
  Evite usar nomes que não tem sentido para as variáveis e funções. Quem for ler o código deve conseguir entender para que serve a variável.
  </details>

</details>

<br>
<details>
<summary>DOM</summary>

- O DOM é uma versão da página html que o navegador cria, em que cada elemento do html é mapeado como um objeto (um objeto da DOM, não um objeto como em Javascript).
  Com a página toda mapeada pelo navegador, podemos acessar os elementos da página utilizando o Javascript.

- Acessando os elementos pelo Javascript

  Para acessar os elementos da DOM no Javascript, utilizamos o comando `document`. A partir dele, podemos trabalhar com os elementos do html.

  ```jsx
  // Para acessar o elemento pela classe
  document.getElementsByClassName('class').textContent = 'new'

  // Mas se estamos usando o id, podemos cortar uma parte do código
  id.textContent = 'new'
  ```

</details>

</details>
