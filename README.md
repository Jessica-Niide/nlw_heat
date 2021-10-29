# NLW HEAT

### Trilha Origin - Crachá DoWhile

Projeto finalizado da **[NLW Heat da Rocketseat](https://nextlevelweek.com/inscricao/7)**: desenvolvemos um crachá/cartão virtual de eventos personalizado para o **[DoWhile](https://dowhile.io/convite/jessica-niide)**

Confira o resultado final em: https://jessica-niide.github.io/nlw_heat/

![Imagem do crachá de_Jessica_Niide](https://github.com/Jessica-Niide/nlw_heat/blob/master/extras/cracha_JN.png?raw=true)

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

---

<details>
<summary>Aula 4</summary>

### Colocando o crachá na internet

<details>
<summary>API</summary>

Uma API é uma interface de comunicação entre sites ou aplicativos. Por meio delas é possível buscar conteúdo de sites ou funcionalidades, e utilizar na sua própria aplicação. Neste projeto, utilizamos a api do github para buscar informações sobre o usuário que serão exibidas no crachá.
</details>

<details>
<summary>JSON</summary>

JSON (JavaScript Object Notation) é basicamente uma forma de escrever dados usado para transferir informações de um lugar para outro.

O JSON se parece com um objeto do Javascript. Os dados vem apresentados entre chaves, e eles são escritos da forma `"propriedade": valor`. O nome da propriedade deve vir entre aspas, por exemplo `"id"`, e o seu valor pode ser qualquer tipo de dado do Javascript (string, number, objeto, etc).

</details>

</details>

---

<details>
<summary>Aula 5</summary>

### Finalizando o crachá: acertando a versão mobile e web

<details>
<summary>Complementando o HTML</summary>

Quando construímos a estrutura html da nossa página, temos algumas tags especiais. Já vimos algumas delas:

- doctype: essa informação é obrigatória e a primeira coisa que colocamos no arquivo. É ela que avisa para o navegador qual a versão do html usada.
- html: a tag html é a primeira a aparecer (depois do doctype) e a última a se fechar no documento. Todos os outros elementos do html serão colocados dentro dela. Ela recebe um atributo importante que adicionamos nesta aula, o atributo lang, que indica o idioma da página.
- head: dentro dessa tag agrupamos informações sobre a página. Alguns exemplos dessas informações que já colocamos no projeto são o título da página e os links para o css e as fontes. Dentro da head vão também as tags meta, que já explico.
- body: o body é a tag que irá indicar onde está o conteúdo da página que ficará visível no navegador. Colocamos o body depois da head.

Agora temos as tags meta para discutir. Elas são colocadas no head do arquivo, e servem para passar ao navegador informações sobre caracteres, palavras-chave, descrições de conteúdo e o ajuste do tamanho da página.

Vamos adicionar duas tags meta ao arquivo.

- `<meta charset="UTF-8" />`: charset tem a ver com a codificação dos caracteres, e o padrão "UTF-8" é o mais usado na web. Assim, garantimos que quase qualquer caractere será exibido corretamente.
- `<meta name="viewport" content="width=device-width, initial-scale=1.0" />`: o viewport se refere à área visível da tela do dispositivo onde a página será aberta, passando para o navegador informações sobre como dimensionar a página. Aqui, deixamos o conteúdo da página com a largura do dispositivo, e o zoom da página quando ela for carregada como 1.0, ou seja, o tamanho renderizado será o mesmo descrito no arquivo.
    
</details>

<br>

<details>
<summary>Ajuste para mobile e responsividade</summary>

A visualização da nossa página deve se adequar ao dispositivo que abrir o crachá. Nos concentramos primeiro na visualização para uma tela de celular, depois iremos adicionar o estilo para telas maiores.

- Acertando o projeto para celulares
    
    Até agora, os tamanhos do crachá, das imagens e dos textos estavam fixos. Não precisamos mexer nas imagens e no textos, mas vamos alterar o fundo para que ele ocupe a tela do celular inteira.
    
    Ao invés de pixels, vamos utilizar a viewport como unidade de medida. Além disso, vamos centralizar a imagem de fundo. Assim, temos:
    
```css
    main {
      background: url(images/background.svg) no-repeat center/cover;
      width: 100vw;
      min-height: 812px;
      height: 100vh;
    }
```
    

A opção no-repeat faz sentido para telas grandes, e garante que a imagem de fundo não se repita. E a opção cover faz a imagem se ajustar para cobrir toda a tela.
    
- Criando o layout para tablets e desktops
    
    No figma já existe o layout da página para desktops, vou utilizar o mesmo desenho para tablets por simplicidade.
    
    Quando a página for aberta em um computador, a imagem de fundo irá se estender para ocupar toda a tela. Quando queremos desenvolver estilos diferentes para telas de tamanhos diferentes, usamos as regras de css `@media`, as medias queries. Com ela é possível selecionar estilos diferentes para dispositivos diferentes. Temos o exemplo a seguir:
    
```css
main {
    backgound-color: black;
}

@media (min-width: 720px) {
    main {
        backgound-color: green;
    }
}
```


O que esse arquivo faz é definir um cor de fundo inicial para a página como preto. Mas se a tela onde a página for exibida possuir a largura mínima de 720px, o css irá ler as regras especificadas dentro da regra `@media`. Lembrando que o css funciona como cascata, a cor de fundo da página será verde.
    
Para a nossa aplicação, vemos que para o desktop, temos uma imagem de fundo diferente, e o crachá é composto por uma alça além do crachá com as informações, que é menor do que na versão mobile. Todas essas mudanças serão colocadas dentro da regra `@media (min-width: 720px)`.
    

Esse é um assunto muito rico e extenso, para explicações mais completas sobre responsividade, unidades responsivas, medias queries e como implementar, confira a Masterclass Responsividade na Prática no Youtube da Rocketseat [https://www.youtube.com/watch?v=H91DhKPjhPk](https://www.youtube.com/watch?v=H91DhKPjhPk)

</details>

</details>


